import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import SignInView from "../views/SignInView.vue";
// import SignUpView from "../views/SignUpView.vue";
// import ForgotPasswordView from "../views/ForgotPasswordView.vue";
// import changePasswordView from "../views/ChangePasswordView.vue";
// import ContactUsView from "../views/ContactUsView.vue";
import AdminUserView from "../views/AdminView/AdminUserView.vue";
import AdminUserAddView from "../views/AdminView/AdminUserAddView.vue";
import NProgress from "nprogress/nprogress.js";
import "@/assets/styles/nprogress.scss";
import Blog from "../components/Blog/Blog.vue";
import PrivacyProvicy from "../components/GetHelp/PrivacyProvicy.vue";
import FAQs from "../components/GetHelp/FAQs.vue";
import ReturnPolicy from "../components/GetHelp/ReturnPolicy.vue";
import ShippingInformation from "../components/GetHelp/ShippingInformation.vue";
import SizingGuide from "../components/GetHelp/SizingGuide.vue";
import Recycles from "../components/GetHelp/Recycles.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/product/:name/:variance?",
    name: "product",
    props: true,
    component: () => import("../views/ProductView.vue"),
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("../views/ShopView.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
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
    path: "/sign-in",
    name: "signIn",
    component: () => import("@/views/SignInView.vue"),
  },
  {
    path: "/sign-up",
    name: "signUp",
    component: () => import("@/views/SignUpView.vue"),
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    component: () => import("@/views/ForgotPasswordView.vue"),
  },
  {
    path: "/change-password",
    name: "changePassword",
    component: () => import("@/views/ChangePasswordView.vue"),
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: () => import("@/views/ContactUsView.vue"),
  },
  {
    path: "/admin-users",
    name: "adminUsers",
    component: AdminUserView,
  },
  {
    path: "/admin-users-add-new",
    name: "adminUsersAdd",
    component: AdminUserAddView,
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/CartView.vue"),
  },
  {
    path: "/privacy-policy",
    name: "privacy-provicy",
    component: PrivacyProvicy,
  },
  {
    path: "/FAQs",
    name: "FAQs",
    component: FAQs,
  },
  {
    path: "/return-policy",
    name: "return-policy",
    component: ReturnPolicy,
  },
  {
    path: "/shipping-information",
    name: "shipping-information",
    component: ShippingInformation,
  },
  {
    path: "/sizing-guide",
    name: "sizing-guide",
    component: SizingGuide,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/pla-socks-recycles",
    name: "pla-socks-recylces",
    component: Recycles,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/404NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

// router.replace({ path: '*', redirect: '/' })
router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start();
  }
  console.log(from);
  next();
});

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

export default router;
