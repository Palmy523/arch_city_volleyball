import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Tournaments from "../views/Tournaments.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "home",
    component: Home
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/tournaments",
    name: "Tournaments",
    component: Tournaments
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
