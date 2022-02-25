<template>
  
    <div class="home container" style="background-color: ; max-width: 100%; max-height: 100%;">
      <span class="text-black fw-bold"> <h1>Articles</h1></span>
      <div class="mw-3xl mx-auto">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div v-for="article in articles" :key="article.id" class="article">
          <router-link :to="{ name: 'Article', params: { id: article.id } }">
            <div v-if="article.status == 'public'">
            <h2>{{ article.title }}</h2>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  
</template>

<script>
export default {
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/apis/articles/v1/articles")
      .then((res) => res.json())
      .then((data) => (this.articles = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.article h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.article h2:hover {
  background: #ddd;
}
.article a {
  text-decoration: none;
}
</style>