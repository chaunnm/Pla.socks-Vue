import Vue from "vue";
import VueRouter from "vue-router";
import AdminUserView from "../views/AdminView/AdminUserView.vue";
import AdminUserAddView from "../views/AdminView/AdminUserAddView.vue";
import NProgress from "nprogress/nprogress.js";
import "@/assets/styles/nprogress.scss";
import AdminDashboardView from "../views/AdminView/AdminDashboardView.vue";
import AdminUserUpdateView from "../views/AdminView/AdminUserUpdateView.vue";
import AdminOrders from "../components/Admin/AdminOrder/AdminOrders.vue";
import AdminOrder_Update from "../components/Admin/AdminOrder/AdminOrder_Update.vue";
import AdminBlogs from "../components/Admin/AdminBlog/AdminBlogs.vue";
import AdminBlog_Update from "../components/Admin/AdminBlog/AdminBlog_Update";

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
    path: "/account",
    name: "MyAccount",
    component: () => import("../views/MyAccount.vue"),
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
    path: "/rewards",
    name: "rewards",
    props: true,
    component: () => import("../views/RewardsView.vue"),
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
    path: "/admin/orders",
    name: "orderUpdate",
    component: AdminOrders,
    meta: {
      requiredAdmin: true,
    },
  },

  {
    path: "/admin-orders-update",
    name: "adminOrders",
    component: AdminOrder_Update,
    meta: {
      requiredAdmin: true,
    },
  },

  {
    path: "/admin/blogs",
    name: "AdminBlogs",
    component: AdminBlogs,
    meta: {
      requiredAdmin: true,
    },
  },

  {
    // /admin/category/update/:cateId(\\d+)
    path: "/admin-blogs-update",
    name: "AdminBlogsUpdate",
    component: AdminBlog_Update,
    meta: {
      requiredAdmin: true,
    },
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
    path: "/admin/todo",
    name: "admin-to-do",
    component: () => import("@/views/AdminView/AdminToDoView.vue"),
    meta: {
      requiredAdmin: true,
    },
  },
  {
    path: "/admin/calendar",
    name: "admin-calendar",
    component: () => import("@/views/AdminView/AdminCalendarView.vue"),
    meta: {
      requiredAdmin: true,
    },
  },
  {
    path: "/admin/color",
    name: "admin-color",
    component: () => import("@/views/AdminView/AdminColorPickView.vue"),
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
