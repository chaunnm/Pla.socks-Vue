import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress/nprogress.js";
import "@/assets/styles/nprogress.scss";

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
    component: () => import("@/views/AdminView/AdminUserView.vue"),
  },
  {
    path: "/admin-users-add-new",
    name: "adminUsersAdd",
    component: () => import("@/views/AdminView/AdminUserAddView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/CartView.vue"),
  },
  {
    path: "/privacy-policy",
    name: "privacy-provicy",
    component: () => import("@/components/GetHelp/PrivacyProvicy.vue"),
  },
  {
    path: "/FAQs",
    name: "FAQs",
    component: () => import("@/components/GetHelp/FAQs.vue"),
  },
  {
    path: "/return-policy",
    name: "return-policy",
    component: () => import("@/components/GetHelp/ReturnPolicy.vue"),
  },
  {
    path: "/shipping-information",
    name: "shipping-information",
    component: () => import("@/components/GetHelp/ShippingInformation.vue"),
  },
  {
    path: "/sizing-guide",
    name: "sizing-guide",
    component: () => import("@/components/GetHelp/SizingGuide.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("@/components/Blog/Blog.vue"),
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
    NProgress.start()
  }
  console.log(from);
  next()
})

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router;
