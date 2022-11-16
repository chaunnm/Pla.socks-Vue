import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue";
import SignInView from "../views/SignInView.vue";
import SignUpView from "../views/SignUpView.vue";
import ForgotPasswordView from "../views/ForgotPasswordView.vue";
import changePasswordView from "../views/ChangePasswordView.vue";
import ContactUsView from "../views/ContactUsView.vue";

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
    path: "/signIn",
    name: "signIn",
    component: SignInView,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: SignUpView,
  },
  {
    path: "/forgotPassword",
    name: "forgotPassword",
    component: ForgotPasswordView,
  },
  {
    path: "/changePassword",
    name: "changePassword",
    component: changePasswordView,
  },
  {
    path: "/contactUs",
    name: "contactUs",
    component: ContactUsView,
  },
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
