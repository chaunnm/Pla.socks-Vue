import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartNumber: "0",
  },
  getters: {
    CART: (state) => {
      return state.cartNumber;
    },
  },
  mutations: {
    SET_CART: (state, payload) => {
      state.cartNumber = payload;
    },
  },
  actions: {},
  modules: {},
});
