import Vue from "vue";
import Vuex from "vuex";
// import adminUi from "./modules/adminUi";
import auth from "./modules/auth";
import products from "./modules/products";
import cart from "./modules/cart";
import category from "./modules/category";
import coupon from "./modules/coupon";
import orders from "./modules/orders";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth: auth,
    products: products,
    cart: cart,
    category: category,
    coupon: coupon,
    orders: orders,
  },
});
