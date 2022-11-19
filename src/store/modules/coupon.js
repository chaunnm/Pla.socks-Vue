const coupon = {
  state: {
    couponData: [
      {
        couponId: 1,
        couponTitle: "Giảm giá 10%",
        couponCode: "ANCUTENHATHEMATTROI",
        sale: 0.1,
        ship: 0,
        expiredAt: "2022-11-16T18:40:48.113Z",
        quantity: 100,
      },
      {
        couponId: 2,
        couponTitle: "Giảm ship 10%",
        couponCode: "ANKAWAII",
        sale: 0,
        ship: 0.1,
        expiredAt: "2022-12-16T18:40:48.113Z",
        quantity: 100,
      },
      {
        couponId: 3,
        couponTitle: "Giảm ship 100%",
        couponCode: "ANKAWAII100",
        sale: 0,
        ship: 1,
        expiredAt: "2022-12-16T18:40:48.113Z",
        quantity: 100,
      },
      {
        couponId: 4,
        couponTitle: "Giảm giá 50%",
        couponCode: "ANCUTE50",
        sale: 0.5,
        ship: 0,
        expiredAt: "2022-12-16T18:40:48.113Z",
        quantity: 100,
      },
      {
        couponId: 5,
        couponTitle: "Giảm ship 50%",
        couponCode: "ANKAWAII50",
        sale: 0,
        ship: 0.5,
        expiredAt: "2022-12-16T18:40:48.113Z",
        quantity: 100,
      },
    ],
    currentCoupon: {
      sale: 0,
      ship: 0,
    },
  },
  getters: {
    GET_COUPONS: (state) => {
      return state.couponData;
    },
    GET_COUPON_QUANTITY: (state) => {
      return state.couponData.length;
    },
    GET_COUPON_ITEM_BY_ID: (state) => (id) => {
      return state.couponData.find(
        (productItem) => productItem.couponId === id
      );
    },
    GET_COUPON_ITEM_BY_CODE: (state) => (code) => {
      return state.couponData.filter(
        (productItem) => productItem.couponCode === code
      );
    },
    GET_CURRENT_COUPON: (state) => {
      return state.currentCoupon;
    },
  },
  setters: {},
  mutations: {
    ADD_COUPON_ITEM: (state, data) => {
      let couponExists = false;
      state.couponData.map((couponItem) => {
        if (couponItem.couponCode === data.couponCode) {
          couponExists = true;
        }
      });
      if (!couponExists) {
        state.couponData.push(data);
      }
    },
    SET_CURRENT_COUPON: (state, data) => {
      state.currentCoupon = { ...data };
    },
    CHANGE_COUPON_ITEM: (state, data) => {
      state.couponData.find(
        (couponItem) => couponItem.couponCode === data.couponCode
      ).couponTitle = data.couponTitle;
      state.couponData.find(
        (couponItem) => couponItem.couponCode === data.couponCode
      ).sale = data.sale;
      state.couponData.find(
        (couponItem) => couponItem.couponCode === data.couponCode
      ).ship = data.ship;
      state.couponData.find(
        (couponItem) => couponItem.couponCode === data.couponCode
      ).expiredAt = data.expiredAt;
      state.couponData.find(
        (couponItem) => couponItem.couponCode === data.couponCode
      ).quantity = data.quantity;
    },
    DELETE_COUPON_ITEM: (state, code) => {
      state.couponData.splice(
        state.couponData.findIndex((item) => item.couponCode === code),
        1
      );
    },
  },
};

export default coupon;
