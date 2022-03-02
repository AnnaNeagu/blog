<template>
  <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <div id="nav">
        <router-link :to="{ name: 'Weather' }"> Weather </router-link>
      </div>
    </div>
  </nav>
  <router-view />
</template>


<style>
#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-front-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0b0c0c;
}

#nav {
  padding: 15px;
}

#nav a {
  font-weight: bold;
  color: #ebeef0;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background: rgb(6, 131, 17);
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
