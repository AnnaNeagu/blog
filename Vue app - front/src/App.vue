<template>
  <div class="container">
    <Articles :articles="articles" />
    </div>
</template>
<script>
  import Articles from './components/Articles.vue'
  

  export default{
    name: 'App',
    components: {
      Articles,
     
    },
    data(){
      return{
        articles: [],
      }
    },
    methods:{
      async fetchArticles() {
        const res = await fetch("http://localhost:3000/apis/articles/v1/articles")
        const data = await res.json()
        return data
      }
    },
    async created() {
      this.articles = await this.fetchArticles()
    }
  }
</script>

<style>
 body{
   background-color: lightcoral;
 }
</style>
