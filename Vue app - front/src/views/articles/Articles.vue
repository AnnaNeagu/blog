

<template>
  <h1>Articles</h1>
  <div v-for="article in articles" :key="article.id" class="article">
     <router-link :to="{name: 'Article', params: {id: article.id}}">
         <h2>{{ article.title }}</h2>
     </router-link>
  </div>
</template>

<script>
export default {
    data(){
        return{
           articles: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/apis/articles/v1/articles')
        .then(res => res.json())
        .then(data => this.articles = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style>

    .article h2{
        background: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        color: #444;
    }
    .article h2:hover{
        background: #ddd;
    }
    .article a{
        text-decoration: none;
    }
</style>