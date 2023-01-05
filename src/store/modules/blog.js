const blogs = {
  state: {
    blogsData: [
      {
        blogID: 1,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571975991764_6c5aac385ee991d1f32ba5405d596470-768x768.jpg",
        titleName: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
        author: "anguynv",
        pulishingDate: "15/11/2022",
      },
      {
        blogID: 2,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571975991764_6c5aac385ee991d1f32ba5405d596470-768x768.jpg",
        titleName: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
        author: "nnmc",
        pulishingDate: "20/12/2022",
      },
      {
        blogID: 3,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571975989496_320be5d4342a3a90a48516b143ba6885.jpg",
        titleName: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
        author: "ltyn",
        pulishingDate: "30/10/2022",
      },
      {
        blogID: 4,
        image:
          "https://plasocks.com/wp-content/uploads/2022/07/z3571976000984_b32c5ed8c85e787edb59281f6d7da799-768x768.jpg",
        titleName: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
        author: "btdc",
        pulishingDate: "21/10/2022",
      },
    ],
  },
  getters: {
    //BlogtItems
    GET_BLOG_NUMBER: (state) => {
      return state.blogsData.length;
    },
    GET_BLOG_ITEMS: (state) => {
      return state.blogsData;
    },
    GET_BLOG_ITEM_BY_ID: (state) => (id) => {
      return state.blogsData.find((blogData) => blogData.blogID === id);
    },
    GET_BLOG_ITEM_BY_AUTHOR: (state) => (author) => {
      return state.blogsData.filter((blogData) => blogData.author === author);
    },
    // GET_PRODUCT_ITEM_BY_NAME: (state) => (name) => {
    //   return state.productData.filter(
    //     (productItem) => productItem.itemTitle === name
    //   );
    // },
    // GET_PRODUCT_ITEM_BY_CATEGORY: (state) => (category) => {
    //   return state.productData.filter(
    //     (productItem) => productItem.category === category
    //   );
    // },
  },
  setters: {},
  mutations: {
    ADD_BLOG_ITEM: (state, data) => {
      state.blogsData.push(data);
    },
    // CHANGE_PRODUCT_STOCK: (state, payload) => {
    //   const index = state.productData.findIndex((item) => {
    //     return item.productId === payload.productId;
    //   });
    //   if (index !== -1) {
    //     state.productData[index].stock += payload.quantity;
    //   }
    // },
    // CHANGE_BLOG_ITEM: (state, payload) => {
    //   const index = state.blogsData.findIndex((item) => {
    //     return item.blogID === payload.blogID;
    //   });
    //   if (index !== -1) {
    //     state.blogsData[index] = payload;
    //   }
    // },
    DELETE_BLOGS_ID: (state, payload) => {
      state.blogsData = state.blogsData.filter(
        (item) => !payload.includes(item.blogID)
      );
    },
    DELETE_BLOG_ID: (state, id) => {
      state.blogsData.splice(
        state.blogsData.findIndex((item) => item.blogID === id),
        1
      );
    },
  },
};

export default blogs;
