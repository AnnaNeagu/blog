<template>
  <body style="background-color: ">
    <div class="home container">
      <span class="text-black fw-bold"><h1>New Article</h1></span>
      <form>
        <div class="mw-3xl mx-auto">
          <p>
            <input type="text" placeholder="Title" v-model="state.text" />
            <span v-if="v$.text.$error">
              {{ v$.text.$errors[0].$message }}
            </span>
          </p>
          <p>
            <textarea
              type="text"
              placeholder="Body"
              cols="22"
              rows="6"
              v-model="state.body"
            ></textarea>
            <span v-if="v$.body.$error">
              {{ v$.body.$errors[0].$message }}
            </span>
          </p>
          <p>
            <select v-model="state.status">
              <option value="public">public</option>
              <option value="private">private</option>
              <option value="archived">archived</option>
            </select>
            <span v-if="v$.status.$error">
              {{ v$.status.$errors[0].$message }}
            </span>
          </p>
          <button type="button" @click="submitForm">Submit</button>
        </div>
      </form>
    </div>
  </body>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import axios from 'axios'
export default {
  name: "NewArticle",
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
        status: { required },
      };
    });
    const v$ = useValidate(rules, state);

    return {
      state,
      v$,
    };
  },
  // data() {
  //   return {
  //     posts: {
  //       title: null,
  //       body: null,
  //     },
  //   };
  // },
  methods: {
    async submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("Form successfuly submitted.");
        const res = await axios.post(
          "http://localhost:3000/apis/articles/v1/articles",
          {
           title: this.state.text,
            body: this.state.body,
            status: this.state.status,
            // when I implement the login I mush change the user_id that is sent
            user_id: 1,
            headers: {
             origin: "http://localhost:3000",
            },
          }
        );
        console.log(res);
        if (res.status == 200) {
          this.$router.replace({ name: "Articles" });
        }
      } else {
        alert("Form failed validation.");
      }
    },
    postData(e) {
      this.axios.post("http://localhost:3000/apis/articles/v1/articles");
      // console.warn(this.state);
      e.preventDefault();
    },
  },
  
}
</script>
