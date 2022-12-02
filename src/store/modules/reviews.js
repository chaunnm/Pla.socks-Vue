const review = {
  state: {
    reviewData: [
      {
        reviewId: 1,
        itemTitle: "Superb socks!",
        image:
          "https://drive.google.com/uc?id=1SWsWALF0XNwsWZBE4frDSUytaXcbT9aF",
        content:
          "I'm much impressed by the quality of these socks. They are the perfect weight, flawlessly knit, and quite comfortable, not to mention stylish.",
        name: "Tran Thanh",
        job: "MC",
      },
      {
        reviewId: 2,
        itemTitle: "I love Pla.socks",
        image:
          "https://drive.google.com/uc?id=1wEwF8C7l7-ed80o7nzcE7id2-OdYbd6S",
        content:
          "None of my Pla.socks have holes in them and I feel very great when using them.",
        name: "Tan Phuoc",
        job: "Content Creator",
      },
      {
        reviewId: 3,
        itemTitle: "Love these socks!",
        image:
          "https://drive.google.com/uc?id=1AFs7YlKdd8e-dvo399j3eFO59oPGxsMJ",
        content:
          "These are my go to socks :) The durability, style and feel has got me hooked!",
        name: "Chi Pu",
        job: "Singer",
      },
      {
        reviewId: 4,
        itemTitle: "Perfect!",
        image:
          "https://drive.google.com/uc?id=11_FqMXPlIg8sjJN8qOCkPgX_1IZIa-9D",
        content: "Comfy, well made, great fit, BEAUTIFUL & made in Vietnam.",
        name: "Giang Oi",
        job: "Vlogger",
      },
      {
        reviewId: 5,
        itemTitle: "Two thumbs way up",
        image:
          "https://drive.google.com/uc?id=1hsIqSJRWDWeLsjvCF40horPTABiLMa5v",
        content:
          "These are the best socks on the planet. High quality material, great design, comfortable, and long wearing.",
        name: "Xuan Truong",
        job: "Football Player",
      },
      {
        reviewId: 6,
        itemTitle: "I love your products",
        image:
          "https://drive.google.com/uc?id=1nAEDgGChWwg6gXrk6lSWdpQweM3gSTkO",
        content: "Soft, cushy and so comfortable.",
        name: "Le Bong",
        job: "Tiktoker",
      },
    ],
  },
  getters: {
    GET_REVIEW_LIST: (state) => {
      return state.reviewData;
    },
    GET_REVIEW_QUANTITY: (state) => {
      return state.reviewData.length;
    },

    GET_REVIEW_BY_ID: (state) => (id) => {
      return state.reviewData.find((reviewItem) => reviewItem.reviewId === id);
    },
  },
  setters: {},
  mutations: {},
};

export default review;
