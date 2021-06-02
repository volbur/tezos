<template>
  <router-view />
</template>


<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
.container {
  margin: 0 auto;
  padding: 0 40px;
  max-width: 1240px;
}
@media (max-width: 960px) {
  .container {
    max-width: 768px;
  }
}
@media (max-width: 576px) {
  .container {
    max-width: 100%;
    padding: 0 30px;
  }
}

* {
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
  height: 100%;
}

html::after,
html::before {
  box-sizing: inherit;
}

body {
  /* font-family: $main-font-family; */
  font-weight: 400;
}

body img {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
body .visually-hidden {
  display: none;
}
body h1,
body h2,
body h3,
body h4,
body h5,
body h6,
body p {
  margin: 0;
}
body a {
  text-decoration: none;
  color: inherit;
}
</style>
