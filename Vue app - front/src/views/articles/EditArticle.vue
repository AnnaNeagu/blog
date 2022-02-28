<template>
  <body style="background-color: ">
    <div
      class="home container"
      style="margin-top: 100px; background-color: #f3ead8"
    >
      <span class="text-black fw-bold"><h1>Edit Article</h1></span>
      <div class="row">
        <div class="col-3 container">
          <form>
            <div class="mw-3xl mx-auto">
              <p>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Title"
                  v-model="state.text"
                />
                <span v-if="v$.text.$error">
                  {{ v$.text.$errors[0].$message }}
                </span>
              </p>
              <p>
                <textarea
                  type="text"
                  class="form-control"
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
                <select v-model="state.status" class="form-control">
                  <option value="public">public</option>
                  <option value="private">private</option>
                  <option value="archived">archived</option>
                </select>
                <span v-if="v$.status.$error">
                  {{ v$.status.$errors[0].$message }}
                </span>
              </p>
              <div class="d-grid gap-2 d-md-block">
                <button
                  type="button"
                  class="btn btn-outline-success"
                  @click="submitForm"
                >
                  Edit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import axios from "axios";
export default {
  name: "EditArticle",
  props: ["id_edit"],
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
        //adding data by constant res
        const res = await axios.put(
          //path to rails app
          "http://localhost:3000/apis/articles/v1/articles/"  + this.id_edit,
          {
            //data taken from the form
            title: this.state.text,
            body: this.state.body,
            status: this.state.status,
            
            headers: {
              origin: "http://localhost:3000",
            },
          }
        );
        //for test in console
        console.log(res);
        //if the data is added correctly
        if (res.status == 200) {
          //redirect to articles page
          this.$router.replace({
            name: "Article",
            params: { id: this.id_edit },
          });
        }
      } else {
        alert("Form failed validation.");
      }
    },
    // postData(e) {
    //   this.axios.post("http://localhost:3000/apis/articles/v1/articles");
    //   // console.warn(this.state);
    //   e.preventDefault();
    // },
  },
};
</script>
