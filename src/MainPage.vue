<template>
  <div>
    <Header></Header>
    <main class="main">
      <section class="info">
        <div class="info__container container">
          <div class="info__text">
            <img
              src="img/logo-info.png"
              alt="logo tezos"
              class="info__img-logo"
            />
            <h1 class="info__title">Tezos Ukraine</h1>
            <h2 class="info__subtitle">
              Front-end development test assignment
            </h2>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
.info {
  padding: 156px 0;
  background-color: rgba(44, 125, 247, 0.67);
}
.info__title {
  font-weight: bold;
  font-size: 54px;
  line-height: 74px;
  color: #ffffff;
}
.info__subtitle {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #ffffff;
}
</style>