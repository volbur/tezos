import { createRouter } from "vue-router";
import LoginPage from "./views/LoginPage";

createRouter({
  routes: [{ path: "/login", component: LoginPage }],
});
