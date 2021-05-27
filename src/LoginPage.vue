<template>
  <div>
    <Header></Header>
    <main class="main">
      <section class="entrance">
        <Form></Form>
      </section>
      <section class="basic"></section>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Form,
    Footer,
  },
};
</script>

<style scoped>
.entrance {
  padding: 140px 0 40px;
  background: rgba(44, 125, 247, 0.67);
}
.basic {
  min-height: 1385px;
  background-color: #e5e5e5;
}
</style>