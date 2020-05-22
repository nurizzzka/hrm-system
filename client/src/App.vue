<template>
  <div id="app">
    <Header />
    <router-view class="container" />
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
