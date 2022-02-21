<template>

  <!-- <div class="container">
    <Articles :articles="articles" />
    </div> -->
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <div id ="nav">
     <!-- <router-link to="/">
       Home
     </router-link>
     <router-link :to="{name: 'About'}">
      About
     </router-link> -->
    <router-link :to="{name: 'Articles'}">
      Articles
     </router-link>
    <router-link :to="{name: 'NewArticle'}">
      New Article
     </router-link>
       <router-link :to="{name: 'Signin'}">
      Sign In
     </router-link>

    
     <!-- <a href="/about">about</a> -->
   </div>
   </div>
   </nav>
<!-- <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Blog App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">  
            <router-link to="/">
       Home
     </router-link>
     </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> <router-link :to="{name: 'About'}">
      About
     </router-link></a>
        </li>
        <li class="nav">
          <a class="nav-link" href="#"><router-link :to="{name: 'Articles'}">
      Articles
     </router-link></a>
        </li>
      </ul>
      <span class="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </div>
</nav> -->

   <!-- <button @click="redirect">Redirect</button>
   <button @click="back">Go back</button>
   <button @click="forword">Go forward</button> -->

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
   color: #0b0c0c;
 }

 #nav{
   padding: 15px;
 }

 #nav a{
   font-weight: bold;
   color: #ebeef0;
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
