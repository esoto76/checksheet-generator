import Vue from "vue";
import Router from "vue-router";
import LandingPage from "./pages/LandingPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingPage
    }
  ]
});
