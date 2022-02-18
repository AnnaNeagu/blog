<template>

  <b-container class="bv-example-row">
      <b-row>
        <b-col>1 of 3</b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
      </b-row>
    </b-container>
  <!-- <div class="container">
    <Articles :articles="articles" />
    </div> -->
    <div id ="nav">
     <router-link to="/">
       Home
     </router-link>
     <router-link :to="{name: 'About'}">
      About
     </router-link>
        <router-link :to="{name: 'Articles'}">
      Articles
     </router-link>
     <!-- <a href="/about">about</a> -->
   </div>


   <button @click="redirect">Redirect</button>
   <button @click="back">Go back</button>
   <button @click="forword">Go forward</button>

   <router-view/>




 
</template>




<script>
  // import Articles from './components/Articles.vue'
  

  // export default{
  //   name: 'App',
  //   components: {
  //     Articles,
     
  //   },
  //   data(){
  //     return{
  //       articles: [],
  //     }
  //   },
  //   methods:{
  //     async fetchArticles() {
  //       //const res = await fetch("http://localhost:3000/apis/articles/v1/articles")
  //       //const data = await res.json()
  //      // return data
  //     }
  //   },
  //   async created() {
  //     this.articles = await this.fetchArticles()
  //   }
  // }

    export default{
    methods: {
      redirect() {
        this.$router.push({name: 'Home'})
      },
      back() {
        this.$router.go(-1)
      },
      forword() {
         this.$router.go(1)
      }
    }
  }
</script>

<style>
 /* body{
   background-color: lightcoral;
 } */

 #app{
   font-family: Avenir, Arial, Helvetica, sans-serif;
   -webkit-front-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
 }

 #nav{
   padding: 30px;
 }

 #nav a{
   font-weight: bold;
   color: #2c3e50;
   text-decoration: none;
   padding: 10px;
   border-radius: 4px;
 }

 #nav a.router-link-exact-active{
   color:white;
   background: crimson;

 }

 button{
   margin: 0 10px;
   padding: 10px;
   border: none;
   border-radius: 4px;
 }
</style>
