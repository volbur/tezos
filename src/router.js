import VueRouter from "vue-router";
import LoginPage from "./views/LoginPage";
import MainPage from "./views/MainPage";

export default new VueRouter({
  routes: [
    {
      path: "/login",
      component: LoginPage,
    },
    {
      path: "",
      component: MainPage,
    },
  ],
  mode: "history",
});

// import { createRouter, createWebHistory } from "vue-router";
// import LoginPage from "./views/LoginPage";

// export default createRouter({
//   history: createWebHistory(),
//   routes: [{ path: "/login", component: LoginPage }],
// });
