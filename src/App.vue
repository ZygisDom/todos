<template>
  <div id="app">
    <NavBar></NavBar>
    <Home></Home>
    <router-view/>
  </div>
</template>

<!-- <div id="nav">
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
</div>
-->

<script>
  import NavBar from "@/components/NavBar";
  export default {
    components: {NavBar},
  }
</script>