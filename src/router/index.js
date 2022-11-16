import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/product/:name/:variance?",
    name: "product",
    props: true,
    component: () =>
      import("../views/ProductView.vue"),
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/our-story",
    name: "our story",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OurStoryView.vue"),
  },
  {
    path: "/shop",
    name: "shop",
    component: () =>
      import("../views/ShopView.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
});

router.replace({ path: '*', redirect: '/' })

export default router;
