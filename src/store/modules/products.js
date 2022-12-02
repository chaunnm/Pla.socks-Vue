const products = {
  state: {
    productData: [
      {
        productId: 1,
        itemTitle: "Happy High",
        variance: 1,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571975991764_6c5aac385ee991d1f32ba5405d596470-768x768.jpg",
        stock: "0",
        sold: "0",
        price: 100000,
        height: 100,
        category: "Boxes Of Love",
        thickness: "Medium",
        sale: 51,
        review: [],
        createdAt: "2022-11-16T18:40:48.113Z",
      },
      {
        productId: 2,
        itemTitle: "Happy High",
        variance: 2,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571975989496_320be5d4342a3a90a48516b143ba6885.jpg",
        stock: "2",
        sold: "0",
        price: 78500,
        height: 80,
        category: "Boxes Of Love",
        thickness: "High",
        sale: 20,
        review: [],
        createdAt: "2022-11-16T18:40:48.113Z",
      },
      {
        productId: 3,
        itemTitle: "Happy High",
        variance: 3,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571976000984_b32c5ed8c85e787edb59281f6d7da799-768x768.jpg",
        stock: "5",
        sold: "0",
        price: 85000,
        height: 90,
        category: "Customized Socks",
        thickness: "Low",
        sale: 40,
        review: [],
        createdAt: "2022-11-16T18:40:48.113Z",
      },
      {
        productId: 4,
        itemTitle: "Happy High",
        variance: 4,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571975985247_917b2be7dbea1cee4ce04094a34668ab-768x768.jpg",
        stock: "10",
        sold: "0",
        price: 105500,
        height: 110,
        category: "Socks For Men",
        thickness: "Medium",
        sale: 60,
        review: [],
        createdAt: "2022-11-16T18:40:48.113Z",
      },
      {
        productId: 5,
        itemTitle: "An Nguyen 1",
        variance: 1,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571975985247_917b2be7dbea1cee4ce04094a34668ab-768x768.jpg",
        stock: "10",
        sold: "0",
        price: 5000,
        height: 110,
        category: "Customized Socks",
        thickness: "Medium",
        sale: 30,
        review: [],
        createdAt: "2022-06-16T18:40:48.113Z",
      },
      {
        productId: 6,
        itemTitle: "An Nguyen 1",
        variance: 2,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571975985247_917b2be7dbea1cee4ce04094a34668ab-768x768.jpg",
        stock: "10",
        sold: "0",
        price: 4000,
        height: 110,
        category: "Socks For Women",
        thickness: "Medium",
        sale: 25,
        review: [],
        createdAt: "2022-06-16T18:40:48.113Z",
      },
      {
        productId: 7,
        itemTitle: "An Nguyen 1",
        variance: 3,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571975985247_917b2be7dbea1cee4ce04094a34668ab-768x768.jpg",
        stock: "10",
        sold: "0",
        price: 1000,
        height: 110,
        category: "Socks For Men",
        thickness: "Medium",
        sale: 25,
        review: [],
        createdAt: "2022-06-16T18:40:48.113Z",
      },
      {
        productId: 8,
        itemTitle: "An Nguyen 1",
        variance: 4,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571975985247_917b2be7dbea1cee4ce04094a34668ab-768x768.jpg",
        stock: "10",
        sold: "0",
        price: 99000,
        height: 110,
        category: "Socks For Men",
        thickness: "Medium",
        sale: 25,
        review: [],
        createdAt: "2022-06-16T18:40:48.113Z",
      },
      {
        productId: 9,
        itemTitle: "An Nguyen 2",
        variance: 1,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571975985247_917b2be7dbea1cee4ce04094a34668ab-768x768.jpg",
        stock: "10",
        sold: "0",
        price: 85000,
        height: 110,
        category: "Socks For Men",
        thickness: "Medium",
        sale: 25,
        review: [],
        createdAt: "2022-07-16T18:40:48.113Z",
      },
      {
        productId: 10,
        itemTitle: "An Nguyen 2",
        variance: 2,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571975985247_917b2be7dbea1cee4ce04094a34668ab-768x768.jpg",
        stock: "10",
        sold: "0",
        price: 50000,
        height: 110,
        category: "Socks For Kids",
        thickness: "Medium",
        sale: 25,
        review: [],
        createdAt: "2022-07-16T18:40:48.113Z",
      },
      {
        productId: 11,
        itemTitle: "An Nguyen 2",
        variance: 3,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571975985247_917b2be7dbea1cee4ce04094a34668ab-768x768.jpg",
        stock: "10",
        sold: "0",
        price: 105500,
        height: 110,
        category: "Socks For Men",
        thickness: "Medium",
        sale: 25,
        review: [],
        createdAt: "2022-07-16T18:40:48.113Z",
      },
      {
        productId: 12,
        itemTitle: "An Nguyen 2",
        variance: 4,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571975985247_917b2be7dbea1cee4ce04094a34668ab-768x768.jpg",
        stock: "10",
        sold: "0",
        price: 200000,
        height: 110,
        category: "Socks For Men",
        thickness: "Medium",
        sale: 25,
        review: [],
        createdAt: "2022-07-16T18:40:48.113Z",
      },
      {
        productId: 13,
        itemTitle: "An Nguyen 3",
        variance: 1,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571975985247_917b2be7dbea1cee4ce04094a34668ab-768x768.jpg",
        stock: "10",
        sold: "5",
        price: 45000,
        height: 110,
        category: "Socks For Men",
        thickness: "Medium",
        sale: 25,
        review: [],
        createdAt: "2022-05-16T18:40:48.113Z",
      },
      {
        productId: 14,
        itemTitle: "An Nguyen 3",
        variance: 2,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571975985247_917b2be7dbea1cee4ce04094a34668ab-768x768.jpg",
        stock: "10",
        sold: "1000",
        price: 105500,
        height: 110,
        category: "Socks For Men",
        thickness: "Medium",
        sale: 25,
        review: [],
        createdAt: "2022-05-16T18:40:48.113Z",
      },
      {
        productId: 15,
        itemTitle: "An Nguyen 3",
        variance: 3,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571975985247_917b2be7dbea1cee4ce04094a34668ab-768x768.jpg",
        stock: "10",
        sold: "0",
        price: 105500,
        height: 110,
        category: "Socks For Men",
        thickness: "Medium",
        sale: 25,
        review: [],
        createdAt: "2022-05-16T18:40:48.113Z",
      },
      {
        productId: 16,
        itemTitle: "An Nguyen 3",
        variance: 4,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571975985247_917b2be7dbea1cee4ce04094a34668ab-768x768.jpg",
        stock: "10",
        sold: "0",
        price: 105500,
        height: 110,
        category: "Socks For Men",
        thickness: "Medium",
        sale: 25,
        review: [],
        createdAt: "2022-05-16T18:40:48.113Z",
      },
      {
        productId: 17,
        itemTitle: "An Nguyen 4",
        variance: 1,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571975985247_917b2be7dbea1cee4ce04094a34668ab-768x768.jpg",
        stock: "10",
        sold: "0",
        price: 6000,
        height: 110,
        category: "Socks For Men",
        thickness: "Medium",
        sale: 25,
        review: [],
        createdAt: "2022-01-16T18:40:48.113Z",
      },
      {
        productId: 18,
        itemTitle: "An Nguyen 4",
        variance: 2,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571975985247_917b2be7dbea1cee4ce04094a34668ab-768x768.jpg",
        stock: "10",
        sold: "0",
        price: 180000,
        height: 110,
        category: "Socks For Men",
        thickness: "Medium",
        sale: 25,
        review: [],
        createdAt: "2022-01-16T18:40:48.113Z",
      },
      {
        productId: 19,
        itemTitle: "An Nguyen 4",
        variance: 3,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571975985247_917b2be7dbea1cee4ce04094a34668ab-768x768.jpg",
        stock: "10",
        sold: "0",
        price: 30000,
        height: 110,
        category: "Socks For Men",
        thickness: "Medium",
        sale: 25,
        review: [],
        createdAt: "2022-01-16T18:40:48.113Z",
      },
      {
        productId: 20,
        itemTitle: "An Nguyen 4",
        variance: 4,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571975985247_917b2be7dbea1cee4ce04094a34668ab-768x768.jpg",
        stock: "10",
        sold: "0",
        price: 800,
        height: 110,
        category: "Socks For Men",
        thickness: "Medium",
        sale: 25,
        review: [],
        createdAt: "2022-01-16T18:40:48.113Z",
      },
    ],
  },
  getters: {
    //ProductItems
    GET_PRODUCT_NUMBER: (state) => {
      return state.productData.length;
    },
    GET_PRODUCT_ITEMS: (state) => {
      return state.productData;
    },
    GET_PRODUCT_ITEM_BY_ID: (state) => (id) => {
      return state.productData.find(
        (productItem) => productItem.productId === id
      );
    },
    GET_PRODUCT_ITEM_BY_NAME: (state) => (name) => {
      return state.productData.filter(
        (productItem) => productItem.itemTitle === name
      );
    },
    GET_PRODUCT_ITEM_BY_CATEGORY: (state) => (category) => {
      return state.productData.filter(
        (productItem) => productItem.category === category
      );
    },
  },
  setters: {},
  mutations: {
    ADD_PRODUCT_ITEM: (state, data) => {
        state.productData.push(data);
    },
    CHANGE_PRODUCT_STOCK: (state, payload) => {
      const index = state.productData.findIndex((item) => {
        return item.productId === payload.productId;
      });
      if (index !== -1) {
        state.productData[index].stock += payload.quantity;
      }
    },
    CHANGE_PRODUCT_ITEM: (state, payload) => {
      const index = state.productData.findIndex((item) => {
        return item.productId === payload.productId;
      });
      if (index !== -1) {
        state.productData[index] = payload;
      }
    },
    DELETE_PRODUCTS_ID: (state, payload) => {
      state.productData = state.productData.filter(item => !payload.includes(item.productId));
    },
    DELETE_PRODUCT_ID: (state, id) => {
      state.productData.splice(
        state.productData.findIndex((item) => item.productId === id),
        1
      );
    },
  },
};

export default products;
