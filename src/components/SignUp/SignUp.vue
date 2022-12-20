<template>
  <div class="signUp-container">
    <div class="form glow-on-hover">
      <h1>Sign Up</h1>
      <form>
        <v-text-field
          v-model="name"
          prepend-icon="fa-solid fa-user"
          :error-messages="nameErrors"
          :counter="10"
          label="User Name"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="email"
          prepend-icon="fa-solid fa-envelope"
          :error-messages="emailErrors"
          label="E-mail"
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        >
        </v-text-field>
        <v-text-field
          prepend-icon="fa-solid fa-key"
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Your password"
          :error-messages="passwordErrors"
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
        >
        </v-text-field>
        <v-text-field
          prepend-icon="fa-solid fa-key"
          v-model="confirmPassword"
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          :error-messages="ConfirmPasswordErrors"
          @input="$v.confirmPassword.$touch()"
          @blur="$v.confirmPassword.$touch()"
          :type="show2 ? 'text' : 'password'"
          name="input-10-1"
          label="Confirm Password"
          hint="At least 8 characters"
          counter
          @click:append="show2 = !show2"
        >
        </v-text-field>
        <div class="raw">
          <router-link to="/sign-in"
            >Do you already have an account ?</router-link
          >
        </div>
        <div class="text-box" @click="submit">
          <span class="btn btn-white btn-animated">SUBMIT</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  sameAs,
  minLength,
  email,
} from "vuelidate/lib/validators";
import { mapGetters, mapMutations } from "vuex";
import "./SignUp.scss";
export default {
  name: "SignUp.vue",
  mixins: [validationMixin],

  validations: {
    email: { required, email },
    name: { required, maxLength: maxLength(10) },
    password: { required, minLength: minLength(8) },
    confirmPassword: {
      sameAs: sameAs("password"),
      required,
      minLength: minLength(8),
    },
  },

  data: () => ({
    show1: false,
    show2: false,
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Invalid e-mail."),
        !this.$v.email.required && errors.push("Email is required.");
      return errors;
    },
    ConfirmPasswordErrors() {
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      !this.$v.confirmPassword.minLength && errors.push("Min 8 characters");
      !this.$v.confirmPassword.sameAs &&
        errors.push("Passwords must be identical.");
      !this.$v.confirmPassword.required && errors.push("Password is required.");

      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength && errors.push("Min 8 characters");
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
  },

  methods: {
    ...mapMutations(["SIGNUP"]),
    ...mapGetters(["getUserAll"]),
    submit() {
      // e.preventDefault();
      this.$v.$touch();
      console.log(this.$v.$invalid);
      if (this.$v.$invalid) {
        this.$toast.open({
          message: "Bạn đã đăng kí không thành công vui lòng thử lại!!",
          type: "error",
          duration: 2000,
          dismissible: true,
          position: "bottom",
        });
      } else {
        const newUser = {
          id: uuidv4(),
          name: this.name,
          email: this.email,
          password: this.password,
          admin: false,
          phone: "",
          img: "https://1.bp.blogspot.com/-ZpujRR4C2mE/U2WpXLpFETI/AAAAAAAAPSc/I2YshWDsjRA/s1600/Yondaime+Chibi.png",
        };
        this.$store.commit("SIGNUP", newUser);
        this.$toast.open({
          message: "Bạn đã đăng kí thành công vui lòng đăng nhập lại sau 2s!!",
          type: "success",
          duration: 2000,
          dismissible: true,
          position: "bottom",
        });
        this.clear();

        setTimeout(() => {
          this.$router.push("/sign-in");
        }, 2000);
      }
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.password = "";
      this.email = "";
      this.confirmPassword = "";
    },
  },
};
</script>
