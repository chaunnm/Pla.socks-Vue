import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignInView from "../views/SignInView.vue";
import SignUpView from "../views/SignUpView.vue";
import ForgotPasswordView from "../views/ForgotPasswordView.vue";
import changePasswordView from "../views/ChangePasswordView.vue";
import ContactUsView from "../views/ContactUsView.vue";
import AdminUserView from "../views/AdminView/AdminUserView.vue";
import AdminUserAddView from "../views/AdminView/AdminUserAddView.vue";
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
    path: "/sign-in",
    name: "signIn",
    component: SignInView,
  },
  {
    path: "/sign-up",
    name: "signUp",
    component: SignUpView,
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    component: ForgotPasswordView,
  },
  {
    path: "/change-password",
    name: "changePassword",
    component: changePasswordView,
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: ContactUsView,
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

export default router;
