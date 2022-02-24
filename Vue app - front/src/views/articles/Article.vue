<template>
  <div
    class="home container"
    style="margin-top: 100px; background-color: #f3ead8"
  >
    <h1>
      <p>{{ article.title }}</p>
    </h1>
    <button style="margin-right: 10px" type="button" class="btn btn-outline-success" @click="editArticle">
      Edit
    </button>

    <button style="margin-left: 10px" type="button" class="btn btn-outline-success" @click="deleteArticle">
      Delete
    </button>

    <!-- <p>The article id is {{ id }}</p> -->
    <p>{{ article.body }}</p>

    <div v-for="comment in article.comments" :key="comment.id" >
      <Comment :comment="comment"/>
       </div>
  </div>

 
  <!-- comment -->
  <div
    class="home container"
    style="margin-top: 100px; background-color: #f3ead8"
  >
    <span class="text-black fw-bold"><h1>Comment</h1></span>
    <div class="row">
      <div class="col-3 container">
        <form>
          <div class="mw-3xl mx-auto">
            <p>
              <input
                type="text"
                class="form-control"
                placeholder="Commenter"
                v-model="state.text"
              />
              <span v-if="v$.text.$error">
                {{ v$.text.$errors[0].$message }}
              </span>
            </p>

            <p>
              <textarea
                type="text"
                placeholder="Body"
                class="form-control"
                cols="22"
                rows="6"
                v-model="state.body"
              ></textarea>
              <span v-if="v$.body.$error">
                {{ v$.body.$errors[0].$message }}
              </span>
            </p>
             <p>
                <select v-model="state.status" class="form-control">
                  <option value="public">public</option>
                  <option value="private">private</option>
                  <option value="archived">archived</option>
                </select>
                <span v-if="v$.status.$error">
                  {{ v$.status.$errors[0].$message }}
                </span>
              </p>
            <button  type="button" class="btn btn-outline-success" @click="submitForm">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
   <div
    class="home container" style="margin-top: 100px"/>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import axios from "axios"; 
import Comment from './Comment'

export default {
  props: ["id"],
  name: "Content",
  components: {
    Comment,
  },
  data() {
    return {
      article: {},
    };
  },
  
  mounted() {
    fetch("http://localhost:3000/articles/" + this.id + ".json")
      .then((res) => res.json())
      .then((data) => (this.article = data))
      .catch((err) => console.log(err.message));
  },
  // data(){
  //     return{
  //         id: this.$route.params.id
  //     }
  // }

  setup() {
    const state = reactive({
      text: "",
      body: "",
      status: "",
    });

    const rules = computed(() => {
      return {
        text: { required },
        body: { required, minLength: minLength(10) },
        status: {required},
      };
    });
    const v$ = useValidate(rules, state);

    return {
      state,
      v$,
    };
  },

  methods: {
    async fetchArticle() {
      const res = await fetch(
        "http://localhost:3000/articles/" + this.id + ".json"
      );

      const data = await res.json();

      return data;
    },

    async created() {
      this.article = await this.fetchArticle();
    },

    async deleteArticle() {
      const res = await axios.delete(
        "http://localhost:3000/apis/articles/v1/articles/" + this.article.id
      );

      console.log(res);
      if (res.status == 200) {
        this.$router.replace({ name: "Articles" });
      }
    },

     async submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("Form successfuly submitted.");
        const res = await axios.post(
          "http://localhost:3000/apis/comments/v1/articles/" +
            this.article.id +
            "/comments",
          {
            commenter: this.state.text,
            body: this.state.body,
            status: this.state.status,
            // when I implement the login I mush change the user_id that is sent
           
            headers: {
              origin: "http://localhost:3000",
            },
          }
        );
        console.log(res);
        if (res.status == 200) {
         this.$router.go(0);
        }
      }  else {
        alert("Form failed validation.");
      }
    },
  },
};
</script>

<style>
</style>