<template>

<div v-if="article">
  <h1>Article Details Page</h1>
   <p>{{ article.title }}</p>
  <p>The article id is {{ id }}</p>
  <p>The article: {{ article.body }}</p>
   
</div>
<div v-else>
    <p> Loading article details...</p>
</div>

</template>

<script>
export default {
    props: ['id'],
    data(){
        return{
            article: null
        }
    },
    mounted(){
         fetch('http://localhost:3000/articles/'+ this.id +'.json')
        .then(res => res.json())
        .then(data => this.article = data)
        .catch(err => console.log(err.message))
    }
    // data(){
    //     return{
    //         id: this.$route.params.id
    //     }
    // }
}
</script>

<style>

</style>