<template>
    <div v-show="show">
        <h1>{{ article.title }}</h1>
        <p>{{ article.body }}</p>
        <p>Created_at: {{ article.created_at }}</p>
        <p>Updated_at: {{ article.updated_at }}</p>
        <p>--------------</p>
        <button v-on:click="toggleShow">
            Mark as read
        </button>
    </div>
</template>

<script>

export default{
    name: 'Article',
    props: {
        article:Object,
    },
    data(){
        return{
            show: true,

        }
    },
    methods:{
        toggleShow: function(){
            this.show = !this.show;
        }
    }
}
</script>

<style scoped>
h1{
    color: green;
}
</style>
