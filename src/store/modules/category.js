const category = {
  state: {
    categoryData: [
      // An example of category item
      {
        categoryId: 1,
        name: "Boxes Of Love",
        description: "Haahahahahahahahahahahahah",
        level: 1,
        isChild: "",
        createdAt: "",
        updatedAt: "",
      },
      {
        categoryId: 2,
        name: "Customized Socks",
        description: "Haahahahahahahahahahahahah",
        level: 1,
        isChild: "",
        createdAt: "",
        updatedAt: "",
      },
      {
        categoryId: 3,
        name: "Socks For Kids",
        description: "Haahahahahahahahahahahahah",
        level: 1,
        isChild: "",
        createdAt: "",
        updatedAt: "",
      },
      {
        categoryId: 4,
        name: "Socks For Men",
        description: "Haahahahahahahahahahahahah",
        level: 1,
        isChild: "",
        createdAt: "",
        updatedAt: "",
      },
      {
        categoryId: 5,
        name: "Socks For Winter",
        description: "Haahahahahahahahahahahahah",
        level: 1,
        isChild: "",
        createdAt: "",
        updatedAt: "",
      },
      {
        categoryId: 6,
        name: "Socks For Women",
        description: "Haahahahahahahahahahahahah",
        level: 1,
        isChild: "",
        createdAt: "",
        updatedAt: "",
      },
    ],
  },
  getters: {
    GET_CATEGORY: (state) => {
      return state.categoryData.map((item) => item.name);
    },
    GET_CATEGORY_ITEMS: (state) => {
      return state.categoryData;
    },
    GET_CATEGORY_ITEM_BY_ID: (state) => (id) => {
      return state.categoryData.find(
        (categoryItem) => categoryItem.categoryId === id
      );
    },
    GET_CATEGORY_QUANTITY: (state) => {
      return state.categoryData.length;
    },
  },
  setters: {},
  mutations: {
    // ADD_CATEGORY_ITEM: (state, data) => {
    //   const index = state.categoryData.indexOf(data);
    //   if (index === -1) {
    //     state.categoryData.push(data);
    //   }
    // },
    ADD_CATEGORY_ITEM: (state, data) => {
      state.categoryData.push(data);
    },
    CHANGE_CATEGORY_ITEM: (state, payload) => {
      const index = state.categoryData.findIndex((item) => {
        return item.categoryId === payload.categoryId;
      });
      if (index !== -1) {
        state.categoryData[index] = payload;
      }
    },
    DELETE_CATEGORY_ID: (state, id) => {
      state.categoryData.splice(
        state.categoryData.findIndex((item) => item.categoryId === id),
        1
      );
    },
    DELETE_CATEGORY_ITEMS: (state, data) => {
      state.categoryData = state.categoryData.filter(
        (item) => !data.includes(item.categoryId)
      );
    },
  },
};

export default category;
