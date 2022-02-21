<template>

<div v-if="article">
  <h1>Article Details Page</h1>
   <p>{{ article.title }}</p>
  <p>The article id is {{ id }}</p>
  <p>The article: {{ article.body }}</p>
  <p>Comments: {{ article.comments}}</p>
   <div v-for="comment in comments" :key="comment.id" class="comment">
     <router-link :to="{name: 'Comment', params: {id: comments.id}}">
         <h2>{{ commnets.body }}</h2>
     </router-link>
  </div>
</div>
<div v-else>
    <p> Loading article details...</p>
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
export default {
    props: ['id'],
    data(){
        return{
            article: null,
            comments: [],
            
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