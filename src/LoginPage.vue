<template>
  <div>
    <header class="header">
      <div class="header__wrapper">
        <NavBar></NavBar>
        <div class="header__container container">
          <Form></Form>
        </div>
      </div>
    </header>
    <main class="main"></main>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Footer from "./components/Footer";
export default {
  components: {
    NavBar,
    Form,
    Footer,
  },
};
</script>

<style scoped>
.nav {
  margin-bottom: 156px;
}
.header {
  padding-bottom: 160px;
  background-image: url("/img/bg-header.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.header__wrapper {
  background-color: rgba(44, 125, 247, 0.67);
  width: 100%;
}
.header__container {
  display: flex;
  justify-content: space-between;
}
.header__img-logo {
  margin-bottom: 26px;
}
.header__title {
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 54px;
  line-height: 74px;
  color: #ffffff;
}
.header__subtitle {
  width: 390px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #ffffff;
}

.main {
  min-height: 1384px;
  padding: 95px 0 100px;
  background-color: #f7fbff;
}
</style>