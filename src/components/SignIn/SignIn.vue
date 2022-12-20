<template>
  <div class="signIn-container">
    <div class="form glow-on-hover">
      <h1>Sign In</h1>
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
        <!-- <v-text-field v-model="password" prepend-icon="fa-solid fa-key" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'" name="input-10-1" label="Your password" hint="At least 8 characters"
                    counter @click:append="show1 = !show1" ></v-text-field> -->
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
        <div class="raw">
          <router-link to="/sign-up">Don’t have an account?</router-link>
          <router-link to="/forgot-password">Forgot password?</router-link>
        </div>
        <!-- <div class="btn-submit" @click="submit">
                    SUBMIT
                </div> -->
        <div class="text-box" @click="submit">
          <span class="btn btn-white btn-animated">SUBMIT</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, minLength } from "vuelidate/lib/validators";
import "./SignIn.scss";

export default {
  name: "SignIn",
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    password: { required, minLength: minLength(8) },
  },

  data: () => ({
    show1: false,
    name: "",
    email: "",
    password: "",
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
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
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength && errors.push("Min 8 characters");
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
  },

  methods: {
    submit() {
      // e.preventDefault();
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$toast.open({
          message: "Please fill out the information completely",
          type: "error",
          duration: 2000,
          dismissible: true,
          position: "bottom",
        });
      } else {
        const newUser = {
          name: this.name,
          password: this.password,
        };
        this.$store.commit("SIGNIN", newUser);
        const userCurrent = this.$store.getters.getUserCurrent;
        if (userCurrent.id) {
          this.$toast.open({
            message: "You have successfully logged in, continue shopping",
            type: "success",
            duration: 2000,
            dismissible: true,
            position: "bottom",
          });
          setTimeout(() => {
            this.$router.push("/");
          }, 2000);
        } else {
          this.$toast.open({
            message: "This account is Invalid",
            type: "error",
            duration: 2000,
            dismissible: true,
            position: "bottom",
          });
        }
        this.clear();
      }
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.password = "";
    },
  },
};
</script>
