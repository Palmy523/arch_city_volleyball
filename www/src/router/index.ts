import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../views/Auth.vue";
import Home from "../views/Home.vue";
import Tournaments from "../views/Tournaments.vue";
import TournamentSignUp from "../views/TournamentSignUp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "home",
    component: Home
  },
  {
    path: "/home",
    name: "home2",
    component: Home
  },
  {
    path: "/tournaments",
    name: "Tournaments",
    component: Tournaments
  },
  {
    path: "/tournamentSignUp",
    name: "tournamentSignUp",
    component: TournamentSignUp
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
