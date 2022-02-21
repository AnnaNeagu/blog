<template>
  <div v-if="coments">
    <h1>Commnet</h1>
    <p>Comment id {{ id }}</p>
    <p>{{ comments.body }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      comments: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/articles/" + this.id + ".json")
      .then((res) => res.json())
      .then((data) => (this.comments = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
