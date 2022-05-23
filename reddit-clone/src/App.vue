<template>
 <div id="app">
    <nav class="d-flex navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="mx-auto navbar-brand" href="#">/r/spongebob</a>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
