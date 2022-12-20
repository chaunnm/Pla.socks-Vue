import Vue from "vue";
import VueRouter from "vue-router";
import AdminUserView from "../views/AdminView/AdminUserView.vue";
import AdminUserAddView from "../views/AdminView/AdminUserAddView.vue";
import NProgress from "nprogress/nprogress.js";
import "@/assets/styles/nprogress.scss";
import AdminDashboardView from "../views/AdminView/AdminDashboardView.vue";
import AdminUserUpdateView from "../views/AdminView/AdminUserUpdateView.vue";

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
    name: "our-story",
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
    path: "/account",
    name: "Account",
    component: () => import("@/views/AccountView.vue"),
  },
  {
    path: "/admin/user",
    name: "admin-user",
    component: AdminUserView,
    meta: {
      requiredAdmin: true,
    },
  },
  {
    path: "/admin/user/add",
    name: "admin-user-add",
    component: AdminUserAddView,
    meta: {
      requiredAdmin: true,
    },
  },
  {
    path: "/admin/user/update/:userId(\\d+)",
    name: "adminUsersUpdate",
    component: AdminUserUpdateView,
  },
  {
    path: "/dashboard",
    name: "admin-dashboard",
    component: AdminDashboardView,
  },

  // Admin Section

  // {
  //   path: "/admin/user/update/:id",
  //   name: "admin-user-update",
  //   component: AdminUserUpdateView,
  //   meta: {
  //     requiredAdmin: true,
  //   },
  // },
  {
    path: "/admin/category",
    name: "admin-category",
    component: () => import("@/views/AdminView/AdminCategoryView.vue"),
    meta: {
      requiredAdmin: true,
    },
  },
  {
    path: "/admin/category/add",
    name: "admin-category-add",
    component: () => import("@/views/AdminView/AdminCategoryAddView.vue"),
    meta: {
      requiredAdmin: true,
    },
  },
  {
    path: "/admin/category/update/:cateId(\\d+)",
    name: "admin-category-update",
    component: () => import("@/views/AdminView/AdminCategoryUpdateView.vue"),
    meta: {
      requiredAdmin: true,
    },
  },
  {
    path: "/admin/product",
    name: "admin-product",
    component: () => import("@/views/AdminView/AdminProductView.vue"),
    meta: {
      requiredAdmin: true,
    },
  },
  {
    path: "/admin/product/add",
    name: "admin-product-add",
    component: () => import("@/views/AdminView/AdminProductAddView.vue"),
    meta: {
      requiredAdmin: true,
    },
  },
  {
    path: "/admin/product/update/:prodId(\\d+)",
    name: "admin-product-update",
    component: () => import("@/views/AdminView/AdminProductUpdateView.vue"),
    meta: {
      requiredAdmin: true,
    },
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

// const auth = store.getters['auth/getIsAuth'];
// const currentUser = store.getters["auth/getUserCurrentAdmin"];

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiredAdmin) {
//     if (currentUser === true) {
//       next();
//     } else {
//       next("/sign-in");
//     }
//   } else {
//     next();
//   }
// });

export default router;
