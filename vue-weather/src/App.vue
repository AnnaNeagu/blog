<template>
  <img  src="./assets/fewclouds.png" />
  <h1>Weather app</h1>
  <Weather_page />
</template>

<script>
import Weather_page from "./weather/Weather_page.vue";

export default {
  name: "App",
  components: {
    Weather_page
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>