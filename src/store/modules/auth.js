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
          img: "https://kynguyenlamdep.com/wp-content/uploads/2022/07/hinh-ve-sticker-sieu-cute.jpg",
        },
        {
          id: 3,
          name: "Minh Châu",
          password: "33333333",
          email: "vd@gm.com",
          admin: true,
          phone: "0123456789",
          img: "https://phunugioi.com/wp-content/uploads/2020/10/hinh-ve-de-thuong-cute-dang-yeu-don-gian.jpg",
        },
        {
          id: 4,
          name: "An Nguyễn",
          password: "44444444",
          email: "vd@gm.com",
          admin: true,
          phone: "0123456789",
          img: "https://demoda.vn/wp-content/uploads/2022/04/hinh-cute-anh-cute.jpg",
        },
        {
          id: 5,
          name: "nhi5",
          password: "11111111",
          email: "vd@gm.com",
          admin: false,
          phone: "0123456789",
          img: "https://img.freepik.com/premium-vector/cute-kawaii-rabbit-bunny-say-hello-cute-doodle_432921-70.jpg?w=360",
        },
        {
          id: 6,
          name: "nhi6",
          password: "11111111",
          email: "vd@gm.com",
          admin: false,
          phone: "0123456789",
          img: "https://img.freepik.com/free-vector/cute-panda-eating-popcorn-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2562.jpg?w=2000",
        },
        {
          id: 7,
          name: "nhi7",
          password: "11111111",
          email: "vd@gm.com",
          admin: false,
          phone: "0123456789",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcJAXdJqMvHcJezreDAi5hS7thtO1VAyH8Ug&usqp=CAU",
        },
        {
          id: 8,
          name: "nhi8",
          password: "11111111",
          email: "vd@gm.com",
          admin: false,
          phone: "0123456789",
          img: "https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat.jpg",
        },
        {
          id: 9,
          name: "nhi9",
          password: "11111111",
          email: "vd@gm.com",
          admin: false,
          phone: "0123456789",
          img: "https://media.istockphoto.com/id/1195743934/vector/cute-panda-character-vector-design.jpg?s=170667a&w=0&k=20&c=p-yYbgnagyjV22MPfdtksu0GelU_VnMLnWYg9v5Br8U=",
        },
        {
          id: 10,
          name: "nhi10",
          password: "11111111",
          email: "vd@gm.com",
          admin: false,
          phone: "0123456789",
          img: "https://i.pinimg.com/564x/ce/8d/f5/ce8df5da16f93a33081888c20bb33f7f.jpg",
        },
        {
          id: 11,
          name: "nhi11",
          password: "11111111",
          email: "vd@gm.com",
          admin: false,
          phone: "0123456789",
          img: "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/09/anh-anime-chibi.jpg?resize=560%2C560&ssl=1",
        },
        {
          id: 12,
          name: "nhi12",
          password: "11111111",
          email: "vd@gm.com",
          admin: false,
          phone: "0123456789",
          img: "https://img.meta.com.vn/Data/image/2022/03/15/anh-anime-chibi-3.jpg",
        },
        {
          id: 13,
          name: "nhi13",
          password: "11111111",
          email: "vd@gm.com",
          admin: false,
          phone: "0123456789",
          img: "https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-chibi-buon-dep-nhat.jpg",
        },
      ],
      isAuth: false,
      userCurent: {
        id: "",
        name: "",
        password: "",
        email: "",
        admin: false,
        img: "",
      },
      getShowAdmin: false,
    },
  },
  getters: {
    getUserQuantity: (state) => state.auth.user.length,
    getCurrentUser: (state) => state.auth.userCurent,
    getUserAll: (state) => {
      return state.auth.user;
    },
    getIsAuth: (state) => state.auth.isAuth,
    getUserCurrent: (state) => state.auth.userCurent,
    getShowAdmin: (state) => state.auth.getShowAdmin,
    getUserCurrentAdmin: (state) => state.auth.userCurent.admin,
    getUserById: (state) => (payload) => {
      return state.auth.user.find((item) => item.id == payload);
    },
  },
  setters: {},
  mutations: {
    DELETEUSER(state, payload) {
      const newArray = state.auth.user.filter((item) => item.id !== payload);
      state.auth.user = newArray;
    },
    DELETE_USERS_ID: (state, payload) => {
      state.auth.user = state.auth.user.filter(
        (item) => !payload.includes(item.id)
      );
    },
    SIGNUP(state, payload) {
      state.auth.user.push(payload);
    },
    SIGNIN(state, payload) {
      //   state.auth.isAuth = true;
      state.auth.user.map((u) => {
        if (u.name == payload.name && u.password == payload.password) {
          state.auth.isAuth = true;
          state.auth.userCurent = u;
        }
      });
    },
    CHANGEPASSWORD(state, payload) {
      state.auth.user.map((u) => {
        if (u.email == payload.email && u.password == payload.password) {
          const oldUser = u;
          const newUser = {
            ...oldUser,
            password: payload.newPassword,
          };
          const lisetfilter = state.auth.user.filter((u) => {
            return u != oldUser;
          });
          lisetfilter.push(newUser);
          state.auth.user = lisetfilter;
        }
      });
    },
    SIGNOUT(state) {
      if (state.auth.isAuth === true) {
        state.auth.isAuth = false;
        state.auth.userCurent = {
          id: "",
          name: "",
          password: "",
          email: "",
          admin: false,
        };
      }
    },
    CHANGELAYOUT(state) {
      state.auth.getShowAdmin = !state.auth.getShowAdmin;
    },
    updateUser(state, payload) {
      const index = state.auth.user.findIndex((item) => {
        return item.id == payload.id;
      });
      state.auth.user[index] = payload;
    },
  },
};
// const a =[]
// a.filter

export default auth;
