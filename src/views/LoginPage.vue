<template>
  <div>
    <header class="header">
      <div class="header__wrapper">
        <NavBar></NavBar>
        <Form></Form>
      </div>
      <div class="strip"></div>
    </header>
    <main class="main"></main>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Form from "../components/Form";
import Footer from "../components/Footer";
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
  position: relative;
  width: 100%;
  min-height: 825px;
  background-image: url("/img/bg-header.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
}
.header__wrapper {
  background-color: rgba(44, 125, 247, 0.67);
  width: 100%;
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

.strip {
  z-index: -1;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 36px;
  /* border-radius: 100% 100% 0 100%; */

  background-color: #ffbf2b;
}

.main {
  min-height: 1384px;
  padding: 95px 0 100px;
  background-color: #f7fbff;
}
</style>