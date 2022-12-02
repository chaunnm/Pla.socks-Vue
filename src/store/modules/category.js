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
    categoryDataList: [
      {
        categoryId: 1,
        itemTitle: "Socks for winter",
        image:
          "https://drive.google.com/uc?id=1h29pQ7-KTwsswyxiEv4PNMJlLE6XzKm2",
        description:
          "We have designed a new collection for active and cool winter shopping, giving away vouchers with purchase",
      },
      {
        categoryId: 2,
        itemTitle: "Socks for custom",
        image:
          "https://drive.google.com/uc?id=1Ykb80VpmIO9lR4syAtzZNoIjtalbY5V8",
        description:
          "You can send us images or descriptions of their signature pictures or signs, or they can draw and create their own pattern on Pla.Socks’ website",
      },
      {
        categoryId: 3,
        itemTitle: "Socks for women",
        image:
          "https://drive.google.com/uc?id=1zWw2ETtfV--GiCX53F1RXjrwbH2RkhfE",
        description:
          "Many beautiful designs of socks for young and beautiful women are sure to attract you",
      },
      {
        categoryId: 4,
        itemTitle: "Boxes Of Love",
        image:
          "https://drive.google.com/uc?id=1gMlhJIJ73a_5eoIBXgHtQlXxD46S2j3k",
        description:
          "We create many beautiful socks for couples that make their love stronger",
      },
      {
        categoryId: 5,
        itemTitle: "Socks for men",
        image:
          "https://drive.google.com/uc?id=1W4p_RL5E4TPGpHaQ3SuAwimBtu6Jffdt",
        description:
          "Many beautiful designs of socks for young and beautiful women are sure to attract you",
      },
      {
        categoryId: 6,
        itemTitle: "Socks for kids",
        image:
          "https://drive.google.com/uc?id=1WvSjBQ3b7JXRK19F5dpdoX6vVh6yoq3A",
        description:
          "Discover our kids socks collection and bring joy to little feet all over the world. We’ve got long, warm, colorful, and crazy socks – and baby socks for the smallest ones",
      },
    ],
  },
  getters: {
    GET_CATEGORY: (state) => {
      return state.categoryData;
    },
    GET_CATEGORY_QUANTITY: (state) => {
      return state.categoryData.length;
    },

    GET_CATEGORY_LIST: (state) => {
      return state.categoryDataList;
    },

    GET_CATEGORY_LIST_BY_ID: (state) => (id) => {
      return state.categoryDataList.find(
        (categoryItem) => categoryItem.categoryId === id
      );
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
