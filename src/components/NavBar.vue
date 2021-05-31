<template>
  <nav class="nav">
    <div class="nav-bar container">
      <a href="#" class="logo"><img src="img/logo.svg" alt="logo" /></a>
      <ul class="nav-list">
        <li class="nav-item"><a href="#">Home</a></li>
        <li class="nav-item"><a href="#">Login</a></li>
      </ul>
    </div>
  </nav>
</template>


<style scoped>
.nav {
  padding: 12px 0;
  background: #2b7df7;
}
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  background-color: #ffbf2b;
}
</style>