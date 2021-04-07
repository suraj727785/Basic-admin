import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import AnotherPage from "../views/AnotherPage.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/another",
    name: "AnotherPage",
    component: AnotherPage,
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated == false) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated == false) {
        next("/");
      } else {
        next();
      }
    },
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
