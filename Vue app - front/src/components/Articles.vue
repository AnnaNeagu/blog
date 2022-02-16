<template>
    <h1>Hello, worlds UPDATED</h1>
    <div :key="article.id" v-for="article in articles">
        <Article :article="article" />
    </div>
</template>

<script>
 import Article from './Article'

 export default{
     name: 'Articles',
     props: {
         articles: Array,
     },
     components:{
         Article
     },
 }
</script>