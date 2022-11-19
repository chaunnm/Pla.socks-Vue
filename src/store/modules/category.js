const category = {
  state: {
    categoryData: [
      "Boxes Of Love",
      "Customized Socks",
      "Socks For Kids",
      "Socks For Men",
      "Socks For Winter",
      "Socks For Women",
    ],
  },
  getters: {
    GET_CATEGORY: (state) => {
      return state.categoryData;
    },
    GET_CATEGORY_QUANTITY: (state) => {
      return state.categoryData.length;
    },
  },
  setters: {},
  mutations: {
    ADD_CATEGORY_ITEM: (state, data) => {
      const index = state.categoryData.indexOf(data);
      if (index === -1) {
        state.categoryData.push(data);
      }
    },
    CHANGE_CATEGORY_ITEM: (state, data) => {
      const index = state.categoryData.indexOf(data);
      if (index !== -1) {
        state.categoryData[index] = data;
      }
    },
    DELETE_CATEGORY_ITEM: (state, data) => {
      const index = state.categoryData.indexOf(data);
      if (index > -1) {
        state.categoryData.splice(index, 1);
      }
    },
  },
};

export default category;
