const auth = {
  state: {
    auth: {
      user: [
        {
          id: 1,
          name: "Nhi",
          password: "11111111",
          email: "vd@gm.com",
          admin: false,
        },
      ],
      isAuth: false,
      userCurent: {
        id: "",
        name: "",
        password: "",
        email: "",
        admin: false,
      },
    },
  },
  getters: {
    getUserAll: (state) => state.auth.user,
    getUserQuantity: (state) => state.auth.user.length,
    getCurrentUser: (state) => state.auth.userCurent,
  },
  setters: {},
  mutations: {
    SIGNUP(state, payload) {
      console.log("userList", state.auth.user);
      console.log("usernew", payload);
      state.auth.user.push(payload);
    },
    SIGNIN(state, payload) {
      console.log(payload);
      //   state.auth.isAuth = true;
      state.auth.user.map((u) => {
        if (u.name == payload.name && u.password == payload.password) {
          state.auth.isAuth = true;
          state.auth.userCurent = u;
          console.log(u.name);
        }
      });
    },
    CHANGEPASSWORD(state, payload) {
      console.log("data", payload);
      state.auth.user.map((u) => {
        if (u.email == payload.email && u.password == payload.password) {
          const oldUser = u;
          console.log("u: ", u.email);
          const newUser = {
            ...oldUser,
            password: payload.newPassword,
          };
          console.log(newUser);
          const lisetfilter = state.auth.user.filter((u) => {
            return u != oldUser;
          });
          console.log(lisetfilter);
          lisetfilter.push(newUser);
          console.log("listNew: ", lisetfilter);
          state.auth.user = lisetfilter;
        }
      });
    },
    SIGNOUT(state) {
      if (state.auth.isAuth == true) {
        state.auth.isAuth == false,
          state.auth.userCurent ==
            {
              id: "",
              name: "",
              password: "",
              email: "",
              admin: false,
            };
      }
    },
  },
};
// const a =[]
// a.filter

export default auth;
