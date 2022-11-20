const auth = {
  state: {
    auth: {
      user: [
        {
          id: 1,
          name: "nhi",
          password: "11111111",
          email: "vd@gm.com",
          admin: true,
          phone: "0123456789",
          img: "https://clipart.info/images/ccovers/1522855947cat-png-cartoon-kitty-cut-clipart.png",
        },
        {
          id: 2,
          name: "Diễn Châu",
          password: "22222222",
          email: "vd@gm.com",
          admin: true,
          phone: "0123456789",
          img: "https://clipart.info/images/ccovers/1522855947cat-png-cartoon-kitty-cut-clipart.png",
        },
        {
          id: 3,
          name: "Minh Châu",
          password: "33333333",
          email: "vd@gm.com",
          admin: true,
          phone: "0123456789",
          img: "https://clipart.info/images/ccovers/1522855947cat-png-cartoon-kitty-cut-clipart.png",
        },
        {
          id: 4,
          name: "An Nguyễn",
          password: "44444444",
          email: "vd@gm.com",
          admin: true,
          phone: "0123456789",
          img: "https://clipart.info/images/ccovers/1522855947cat-png-cartoon-kitty-cut-clipart.png",
        },
        {
          id: 5,
          name: "nhi5",
          password: "11111111",
          email: "vd@gm.com",
          admin: false,
          phone: "0123456789",
          img: "https://clipart.info/images/ccovers/1522855947cat-png-cartoon-kitty-cut-clipart.png",
        },
        {
          id: 6,
          name: "nhi6",
          password: "11111111",
          email: "vd@gm.com",
          admin: false,
          phone: "0123456789",
          img: "https://clipart.info/images/ccovers/1522855947cat-png-cartoon-kitty-cut-clipart.png",
        },
        {
          id: 7,
          name: "nhi7",
          password: "11111111",
          email: "vd@gm.com",
          admin: false,
          phone: "0123456789",
          img: "https://clipart.info/images/ccovers/1522855947cat-png-cartoon-kitty-cut-clipart.png",
        },
        {
          id: 8,
          name: "nhi8",
          password: "11111111",
          email: "vd@gm.com",
          admin: false,
          phone: "0123456789",
          img: "https://clipart.info/images/ccovers/1522855947cat-png-cartoon-kitty-cut-clipart.png",
        },
        {
          id: 9,
          name: "nhi9",
          password: "11111111",
          email: "vd@gm.com",
          admin: false,
          phone: "0123456789",
          img: "https://clipart.info/images/ccovers/1522855947cat-png-cartoon-kitty-cut-clipart.png",
        },
        {
          id: 10,
          name: "nhi10",
          password: "11111111",
          email: "vd@gm.com",
          admin: false,
          phone: "0123456789",
          img: "https://clipart.info/images/ccovers/1522855947cat-png-cartoon-kitty-cut-clipart.png",
        },
        {
          id: 11,
          name: "nhi11",
          password: "11111111",
          email: "vd@gm.com",
          admin: false,
          phone: "0123456789",
          img: "https://clipart.info/images/ccovers/1522855947cat-png-cartoon-kitty-cut-clipart.png",
        },
        {
          id: 12,
          name: "nhi12",
          password: "11111111",
          email: "vd@gm.com",
          admin: false,
          phone: "0123456789",
          img: "https://clipart.info/images/ccovers/1522855947cat-png-cartoon-kitty-cut-clipart.png",
        },
        {
          id: 13,
          name: "nhi13",
          password: "11111111",
          email: "vd@gm.com",
          admin: false,
          phone: "0123456789",
          img: "https://clipart.info/images/ccovers/1522855947cat-png-cartoon-kitty-cut-clipart.png",
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
    getUserAll: (state) => {
      console.log("get");
      return state.auth.user;
    },
    getIsAuth: (state) => state.auth.isAuth,
    getUserCurrent: (state) => state.auth.userCurent,
  },
  setters: {},
  mutations: {
    DELETEUSER(state, payload) {
      const newArray = state.auth.user.filter((item) => item.id !== payload);
      state.auth.user = newArray;
    },
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
