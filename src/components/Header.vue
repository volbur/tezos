<template>
  <header class="header">
    <div class="nav-bar">
      <a href="#" class="logo"><img src="img/logo.png" alt="logo" /></a>
      <ul class="nav-list">
        <li class="nav-item"><a href="#">Home</a></li>
        <li class="nav-item"><a href="#">Login</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  padding: 12px 0;
  background-color: #2b7df7;
}
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1240px;
}
.nav-list {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav-item a {
  display: inline-block;
  padding: 19px 73px;
  border: 4px solid transparent;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  text-decoration: none;
}
.nav-item a:hover {
  border-color: #ffbf2b;
  color: #ffbf2b;
}
</style>