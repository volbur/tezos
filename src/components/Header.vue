<template>
  <header class="header">
    <NavBar></NavBar>
  </header>
</template>

<script>
import NavBar from "./NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.header {
  padding: 12px 0;
  background-color: #2b7df7;
}
</style>