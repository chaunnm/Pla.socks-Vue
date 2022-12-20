const adminUi = {
  state: {
    drawer: true,
    showAdmin: false,
  },
  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
    toggleShowAdmin(state) {
      state.showAdmin = !state.showAdmin;
    },
  },
  actions: {
    TOGGLE_DRAWER({ commit }) {
      commit("toggleDrawer");
    },
  },
  getters: {
    DRAWER_STATE(state) {
      return state.drawer;
    },
    getShowAdminUI(state) {
      return state.showAdmin;
    },
  },
};
export default adminUi;
