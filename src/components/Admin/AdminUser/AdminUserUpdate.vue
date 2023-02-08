<template>
  <div class="AdminUserUpdate">
    <div class="content">
      <h3>Update</h3>
      <h2>
        User
        <i class="fa-solid fa-user-astronaut"></i>
      </h2>

      <div class="form">
        <div class="left">
          <div class="admin-update-new-row">
            <label>Full Name</label>
            <v-text-field v-model="fullName" outlined></v-text-field>
          </div>
          <div class="admin-update-new-row">
            <label>Email</label>
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
              outlined
            ></v-text-field>
          </div>
          <div class="admin-update-new-row">
            <label>Number Phone</label>
            <v-text-field
              v-model="phone"
              :error-messages="phoneErrors"
              @input="$v.phone.$touch()"
              @blur="$v.phone.$touch()"
              outlined
            ></v-text-field>
          </div>
          <div class="admin-update-new-row">
            <label>Address</label>
            <v-text-field v-model="address" outlined></v-text-field>
          </div>
        </div>
        <div class="right">
          <div class="admin-update-new-row">
            <label>User Name</label>
            <v-text-field
              v-model="userName"
              :error-messages="userNameErrors"
              @input="$v.userName.$touch()"
              @blur="$v.userName.$touch()"
              outlined
            ></v-text-field>
          </div>
          <div class="admin-update-new-row">
            <label>Password</label>
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              :error-messages="passwordErrors"
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
              outlined
            ></v-text-field>
          </div>
          <div class="admin-update-new-row">
            <label>Role</label>
            <v-select
              v-model="role"
              :error-messages="roleErrors"
              @input="$v.role.$touch()"
              @blur="$v.role.$touch()"
              :items="itemRole"
              outlined
            ></v-select>
          </div>
          <div class="admin-update-new-row">
            <label>Avartar</label>
            <div class="admin-update-new-row-group">
              <div class="admin-update-new-row-group-left">
                <label for="file-upload" class="custom-file-upload">
                  <i class="fa-solid fa-folder-open"></i>
                </label>
                <input
                  id="file-upload"
                  name="avatar"
                  accept="image/*"
                  type="file"
                  @change="handleChangeAvartar"
                />
              </div>
              <div class="admin-update-new-row-group-right">
                <img class="avatar" :src="avartar" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-group">
        <div class="btn-update" @click="submit"><span>UPDATE</span></div>
        <div class="btn-clear" @click="clear"><span>CLEAR</span></div>
      </div>
    </div>
  </div>
</template>

<script>
// import { v4 as uuidv4 } from "uuid";
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  minLength,
  email,
} from "vuelidate/lib/validators";
import { mapGetters } from "vuex";

export default {
  mixins: [validationMixin],
  name: "AdminUserUpdate",

  data() {
    return {
      user: {},
      show1: false,
      itemRole: ["Admin", "User"],
      email: "",
      fullName: "",
      userName: "",
      phone: "",
      address: "",
      password: "",
      role: [],
      avartar:
        "https://1.bp.blogspot.com/-ZpujRR4C2mE/U2WpXLpFETI/AAAAAAAAPSc/I2YshWDsjRA/s1600/Yondaime+Chibi.png",
    };
  },
  validations: {
    email: { required, email },
    userName: { required, maxLength: maxLength(10) },
    password: { required, minLength: minLength(8) },
    phone: { required },
    role: { required },
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Invalid e-mail."),
        !this.$v.email.required && errors.push("Email is required.");
      return errors;
    },
    userNameErrors() {
      const errors = [];
      if (!this.$v.userName.$dirty) return errors;
      !this.$v.userName.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.userName.required && errors.push("Name is required.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength && errors.push("Min 8 characters");
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.required && errors.push("Password is required.");
      return errors;
    },
    roleErrors() {
      const errors = [];
      if (!this.$v.role.$dirty) return errors;
      !this.$v.role.required && errors.push("Role is required.");
      return errors;
    },
  },
  ...mapGetters({
    getUserById: "getUserById",
  }),
  created() {
    this.user = this.$store.getters.getUserById(this.$route.params.userId);
    this.fullName = this.user.name;
    this.email = this.user.email;
    this.userName = this.user.name;
    this.phone = this.user.phone;
    this.password = this.user.password;
    this.role = this.user.admin == true ? "Admin" : "User";
    this.avartar = this.user.img;
  },
  methods: {
    handleChangeAvartar(e) {
      if (e.target.name === "avatar") {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            this.avartar = reader.result;
          }
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    },

    submit() {
      this.$v.$touch();
      console.log(this.$v.$invalid);
      if (this.$v.$invalid) {
        this.$toast.open({
          message: "Thêm người dùng mới không thành công vui lòng thử lại!!",
          type: "warning",
          duration: 2000,
          dismissible: true,
          position: "bottom",
        });
      } else {
        const isAdmin = this.role == "Admin" ? true : false;
        const newUser = {
          id: this.$route.params.userId,
          name: this.userName,
          email: this.email,
          password: this.password,
          admin: isAdmin,
          img: this.avartar,
          phone: this.phone,
        };
        console.log(newUser);
        this.$store.commit("updateUser", newUser);
        this.$toast.open({
          message: "Update user successfully !! 🎆",
          type: "success",
          duration: 2000,
          dismissible: true,
          position: "bottom",
        });
        this.$router.push("/admin/user");
        this.clear();
      }
    },
    clear() {
      this.$v.$reset();
      this.phone = "";
      this.avartar =
        "https://1.bp.blogspot.com/-ZpujRR4C2mE/U2WpXLpFETI/AAAAAAAAPSc/I2YshWDsjRA/s1600/Yondaime+Chibi.png";
      this.password = "";
      this.email = "";
      this.userName = "";
      this.fullName = "";
      this.address = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.AdminUserUpdate {
  // height: 100vh;
  // width: 100%;
  height: auto;
  padding: 20px;
  animation: toLeft 0.3s backwards;
  @keyframes toLeft {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(0);
    }
  }

  .content {
    // width: 90%;
    // margin: 20px auto;
    // border: 2px solid #4db7b3;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

    border-radius: 7px;
    padding: 20px;
    h3 {
      color: #9c9c9c;
      font-weight: 500;
    }
    h2 {
      margin-top: 10px;
      color: #616060;
      margin-bottom: 30px;
      padding-bottom: 5px;
      border-bottom: 1px solid #4db7b3;
      .fa-user-astronaut {
        color: #4db7b3;
        // background-color: #4DB7B3;
        margin-left: 20px;
        // font-size: 15px;
        // animation: spinaround 5s infinite linear;
      }
    }
  }
  .form {
    display: flex;
    label {
      display: block !important;
      font-weight: 600;
    }
    .left {
      flex: 1;
      margin-right: 30px;
    }
    .right {
      flex: 1;
      margin-left: 30px;
      .avatar {
        width: 70px;
        height: 70px;
      }
      .avatar {
        margin-top: 10px;
        border-radius: 50%;
      }
      .form-control-file {
        width: 100px;
      }
      input[type="file"] {
        display: none;
      }
      .custom-file-upload {
        width: fit-content;
        border: 1px solid #ccc;
        display: inline-block;
        padding: 6px 12px;
        cursor: pointer;
      }
      .admin-update-new-row {
        &-group {
          display: flex;
          align-items: center;
          &-left {
            margin-right: 20px;
          }
        }
      }
    }
  }
  .btn-group {
    display: flex;
    width: 100%;
    margin-bottom: 10px;
  }
  .btn-update {
    margin-right: 20px;
    // box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    //   rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    //   rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    display: block;
    width: 150px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-family: sans-serif;
    text-decoration: none;
    color: #4db7b3;
    border: 2px solid #4db7b3;
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    transition: all 0.35s;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .btn-update span {
    position: relative;
    z-index: 2;
    font-weight: 600;
  }

  .btn-update:after {
    position: absolute;
    content: "";
    top: -1;
    left: -1;
    width: 0;
    height: 100%;
    background: #4db7b3;
    transition: all 0.35s;
  }

  .btn-update:hover {
    border: none;
    color: #fff;
    transform: translateX(5px);
  }

  .btn-update:hover:after {
    width: 100%;
  }
  .btn-clear {
    display: block;
    width: 150px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-family: sans-serif;
    text-decoration: none;
    color: #333;
    border: 2px solid #979b9b;
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    transition: all 0.35s;
    // background-color: #979b9b;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .btn-clear span {
    position: relative;
    z-index: 2;
    font-weight: 600;
  }

  .btn-clear:after {
    position: absolute;
    content: "";
    top: -1;
    left: -1;
    width: 0;
    height: 100%;
    background: #979b9b;
    transition: all 0.35s;
  }

  .btn-clear:hover {
    border: none;
    color: #fff;
    transform: translateX(5px);
  }

  .btn-clear:hover:after {
    width: 100%;
  }
  .form::v-deep .v-input input {
    padding: 0 !important;
  }
  .form::v-deep .v-input__slot {
    min-height: 40px;
  }
  .form::v-deep .v-input__append-inner {
    margin: 0;
    height: 40px;
    align-items: center;
  }
}
@media screen and (max-width: 500px) {
  .AdminUserUpdate {
    .form {
      margin-bottom: 15px;
      flex-direction: column;
      .left {
        margin-right: 0;
      }
      .right {
        margin-left: 0;
      }
    }
    .btn-group {
      margin-bottom: 20px;
    }
  }
}
</style>
