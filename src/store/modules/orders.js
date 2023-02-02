const orders = {
  state: {
    orderData: [
      // Example of data
      {
        orderId: 0,
        userId: "26",
        itemList: [],
        totalPrice: 950000,
        orderInfo: {
          fullname: "An Nguyen",
          companyName: "",
          phoneNo: "0123456789",
          email: "anguyn@gmail.com",
          apartmentNo: "KTX khu A ĐHQG TPHCM",
          street: "khu phố 6",
          district: "Linh Trung",
          ward: "Thủ Đức",
          city: "Thành phố Hồ Chí Minh",
          note: "Đừng hối lấy hàng ạ!",
        },
        couponCodes: "ANCUTE20",
        createdAt: "01/02/2023",
        paidAt: "2022-11-16T18:50:48.113Z",
        paidMethod: "COD",
        isPaid: true,
        status: "Delivered",
        completedAt: "2022-11-20T18:50:48.113Z",
      },

      {
        orderId: 1,
        userId: "11",
        itemList: [
          {
            cartId: 1,
            productId: 1,
            itemTitle: "An Cute",
            image:
              "https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/39119006_1113850205445620_1201278674536497152_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pAWLWql14OIAX-yfNsP&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfCMAPDt4NnRFfPnL5FXImPqLcCUuMxTpDGsm3kQF7fa2g&oe=6399A428",
            variance: 2,
            price: 105000,
            quantity: 1,
          },
          {
            cartId: 2,
            productId: 0,
            itemTitle: "Happy Highaadadadadad",
            image:
              "https://plasocks.com/wp-content/uploads/2022/07/z3571975985247_917b2be7dbea1cee4ce04094a34668ab-768x768.jpg",
            variance: 3,
            price: 50000,
            quantity: 10,
          },
        ],
        totalPrice: 150000,
        orderInfo: {
          fullname: "Dien Chau",
          companyName: "",
          phoneNo: "0987654321",
          email: "dienchau@gmail.com",
          apartmentNo: "KTX khu B ĐHQG TPHCM",
          street: "khu phố 6",
          district: "Dĩ An",
          ward: "Dĩ An",
          city: "Bình Dương",
          note: "Đừng giao hàng ạ!",
        },
        couponCodes: "ANKAWAII20",
        createdAt: "16/01/2023",
        paidAt: "2022-12-16T18:50:48.113Z",
        paidMethod: "Momo",
        isPaid: true,
        status: "Processing",
        completedAt: "2022-12-20T18:50:48.113Z",
      },
    ],
  },
  getters: {
    GET_ORDERS_QUANTITY: (state) => {
      return state.orderData.length;
    },
    GET_ORDERS_ITEMS: (state) => {
      return state.orderData;
    },
    GET_ORDER_ITEM_BY_ID: (state) => (id) => {
      return state.orderData.find((orderItem) => orderItem.orderId === id);
    },
    GET_ORDER_ITEM_BY_USERID: (state) => (id) => {
      return state.orderData.filter((orderItem) => orderItem.userId === id);
    },
  },
  setters: {},
  mutations: {
    ADD_ORDER_ITEM: (state, data) => {
      state.orderData.push(data);
    },
  },
  // CHANGE_ORDER_QUANTITY: (state, payload) => {
  //   // console.log(state, payload);
  //   const index = state.orderData.findIndex((item) => {
  //     return item.orderId === payload.orderId;
  //   });
  //   const temp = state.orderData[index].quantity;
  //   if (index !== -1) {
  //     state.orderData[index].quantity = temp + payload.quantity;
  //   }
  // },
  // DELETE_ORDER_ITEM: (state, id) => {
  //   state.orderData.splice(
  //     state.orderData.findIndex((item) => item.orderId === id),
  //     1
  //   );
  // },
};
export default orders;
