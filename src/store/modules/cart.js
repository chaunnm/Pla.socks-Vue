const cart = {
  state: {
    cartData: [
      // An example of cart item
      // {
      //   cartId: 1,
      //   productId: 0,
      //   itemTitle: "Happy Highaadadadadad",
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
  setters: {},
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
    CHANGE_CART_QUANTITY: (state, payload) => {
      const index = state.cartData.findIndex((item) => {
        return item.cartId === payload.cartId;
      });
      const temp = state.cartData[index].quantity;
      if (index !== -1) {
        state.cartData[index].quantity = temp + payload.quantity;
      }
    },
    DELETE_CART_ITEM: (state, id) => {
      state.cartData.splice(
        state.cartData.findIndex((item) => item.cartId === id),
        1
      );
    },
    DELETE_ALL_CART_ITEM: (state) => {
      state.cartData.splice(0, state.cartData.length);
    },
  },
};

export default cart;
