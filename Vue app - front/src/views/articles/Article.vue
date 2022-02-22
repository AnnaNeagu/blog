<template>


  <h1>Article Details Page</h1>
   <button style ="margin-right: 10px" type ="button" @click="editArticle">Edit</button>

   <button style ="margin-left: 10px" type ="button" @click="deleteArticle">Delete</button>
   <p>{{ article.title }}</p>
  <p>The article id is {{ id }}</p>
  <p>The article: {{ article.body }}</p>
  <!-- <p>Comments: {{ article.comments}}</p> -->
   <div v-for="comment in article.comments" :key="comment.id" > 
     <!-- <router-link :to="{name: 'Comment', params: {id: comment.id}}"> -->
         <h2>{{ comment.commenter }}</h2>
         <h2>{{ comment.body }}</h2>
     <!-- </router-link> -->
  </div>


<!-- comment -->
  <div>
    <h1>New Comment</h1>
  </div>
  <p>
    <input type="text" placeholder="Commenter" v-model="state.text" />
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
  <button @click="submitForm">Submit</button>



</template>

<script>
import useValidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import axios from 'axios';
export default {
    props: ['id'],
    data(){
        return{
            article: {},
           
        }
    },
    mounted(){
         fetch('http://localhost:3000/articles/'+ this.id +'.json')
        .then(res => res.json())
        .then(data => this.article = data)
        .catch(err => console.log(err.message))
    },
    // data(){
    //     return{
    //         id: this.$route.params.id
    //     }
    // }

    setup() {
    const state = reactive({
      text: '',
      body: '',
    });

    const rules = computed(() => {
      return {
        text: { required },
        body: { required, minLength: minLength(10)},
      };
    });
    const v$ = useValidate(rules, state)

    return {
      state, 
      v$,
    }
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
    const res = await axios.delete("http://localhost:3000/apis/articles/v1/articles/" + this.article.id );  
    
    console.log(res);
    if(res.status==200){
        this.$router.replace({ name: "Articles" });
    }
  },


    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("Form successfuly submitted.");
      } else {
        alert("Form failed validation.");
      }
    },
  },






}
</script>

<style>

</style>