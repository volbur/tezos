<template>
  <nav class="nav">
    <div class="nav-bar container">
      <a href="#" class="logo"><img src="img/logo.svg" alt="logo" /></a>
      <ul class="nav-list">
        <li class="nav-item"><a href="#">Home</a></li>
        <li class="nav-item"><a href="#">Login</a></li>
      </ul>
      <div class="burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
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
.logo {
  width: 120px;
  height: 32px;
}
.nav-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 370px;
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
.burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 22px;
  height: 20px;
}
.burger span {
  height: 4px;
  background-color: #fff;
}
.burger:hover span {
  background-color: #ffbf2b;
}
@media (max-width: 960px) {
  .nav {
    padding: 14px 0;
  }
  .nav-item a {
    display: inline-block;
    padding: 10px 62px;
    border: none;
    border-radius: 4px;
    font-weight: bold;
  }
  .nav-item a:hover {
    background-color: #ffbf2b;
    color: #fff;
  }
}
@media (max-width: 576px) {
  .nav {
    padding: 7px 0;
  }
  .logo {
    width: 95px;
    height: 26px;
  }
  .burger {
    display: flex;
  }
  .nav-list {
    display: none;
  }
}
</style>