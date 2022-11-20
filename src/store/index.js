import Vue from "vue";
import Vuex from "vuex";
import adminUi from "./modules/adminUi";
import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categoryList: [
      "Boxes Of Love",
      "Customized Socks",
      "Socks For Kids",
      "Socks For Men",
      "Socks For Summer",
      "Socks For Women",
    ],
    productData: [
      {
        productId: 1,
        itemTitle: "Happy High",
        variance: "Type 1",
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
        variance: "Type 2",
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
        variance: "Type 3",
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
        variance: "Type 4",
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
        variance: "Type 1",
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
        variance: "Type 2",
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
        variance: "Type 3",
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
        variance: "Type 4",
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
        variance: "Type 1",
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
        variance: "Type 2",
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
        variance: "Type 3",
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
        variance: "Type 4",
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
        variance: "Type 1",
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
        variance: "Type 2",
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
        variance: "Type 3",
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
        variance: "Type 4",
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
        variance: "Type 1",
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
        variance: "Type 2",
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
        variance: "Type 3",
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
        variance: "Type 4",
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
    cartData: [
      // An example of cart item
      // {
      //   cartId: 1,
      //   productId: 0,
      //   itemTitle: "Happy High",
      //   image: "https://plasocks.com/wp-content/uploads/2022/07/z3571975985247_917b2be7dbea1cee4ce04094a34668ab-768x768.jpg",
      //   variance: 3,
      //   price: 50000,
      //   quantity: 1,
      // },
      // {
      //   cartId: 2,
      //   productId: 1,
      //   itemTitle: "An Cute",
      //   image: "https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/39119006_1113850205445620_1201278674536497152_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pAWLWql14OIAX-yfNsP&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfCMAPDt4NnRFfPnL5FXImPqLcCUuMxTpDGsm3kQF7fa2g&oe=6399A428",
      //   variance: 2,
      //   price: 105000,
      //   quantity: 5,
      // },
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
      return state.productData.find((productItem) => productItem._id === id);
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

    //CartItems
    GET_CART_ITEMS: (state) => {
      return state.cartData;
    },
    GET_CART_QUANTITY: (state) => {
      const quanty = state.cartData.reduce((acc, cartItem) => {
        return cartItem.quantity + acc;
      }, 0);
      return quanty;
    },
    GET_CART_PRICE: (state) => {
      const total = state.cartData
        .reduce((acc, cartItem) => {
          return cartItem.quantity * cartItem.price + acc;
        }, 0)
        .toFixed(2);
      return total;
    },
  },
  mutations: {
    ADD_CART_ITEM: (state, data) => {
      let cartProductExists = false;
      state.cartData.map((cartItem) => {
        if (cartItem.productId === data.productId) {
          cartItem.quantity++;
          cartProductExists = true;
        }
      });
      if (!cartProductExists) {
        state.cartData.push(data);
      }
    },
    DELETE_CART_ITEM: (state, id) => {
      state.cartData.splice(
        state.cartData.findIndex((item) => item.cartId === id),
        1
      );
    },
  },
  actions: {},
  modules: {
    auth: auth,
    adminUI: adminUi,
  },
});
