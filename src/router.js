import { createRouter } from "vue-router";
import LoginPage from "./views/LoginPage";

createRouter({
  history: "",
  routes: [{ path: "/login", component: LoginPage }],
});
