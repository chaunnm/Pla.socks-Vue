<template>
  <div class="main-container">
    <div class="header-account">
      <img :src="image" />
      <div class="name-wrapper">
        <h4>Lê Thị Yến Nhi</h4>
        <div class="edit-wrapper">
          <label for="file-upload" class="custom-file-upload">
            <font-awesome-icon icon="fa-regular fa-pen-to-square" />
            <p>Edit display image</p>
          </label>
          <input
            id="file-upload"
            name="image"
            accept="image/*"
            type="file"
            @change="handleChangeImage"
          />
        </div>
      </div>
    </div>
    <div class="form">
      <div class="left">
        <div class="input-row">
          <label>First Name</label>
          <v-text-field v-model="firstName" outlined></v-text-field>
        </div>
        <div class="input-row">
          <label>Address</label>
          <v-text-field v-model="address" outlined></v-text-field>
        </div>
        <div class="input-row">
          <label>Date of Birth</label>
          <v-text-field v-model="dob" outlined></v-text-field>
        </div>
        <div class="input-row">
          <label>Gender</label>
          <v-select v-model="gender" :items="itemGender" outlined></v-select>
        </div>
      </div>
      <div class="right">
        <div class="input-row">
          <label>Last Name</label>
          <v-text-field v-model="lastName" outlined></v-text-field>
        </div>
        <div class="input-row">
          <label>Phone Number</label>
          <v-text-field
            v-model="phone"
            :error-messages="phoneErrors"
            @input="$v.phone.$touch()"
            @blur="$v.phone.$touch()"
            outlined
          ></v-text-field>
        </div>
        <div class="input-row">
          <label>Email</label>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            outlined
          ></v-text-field>
        </div>
        <div class="input-row">
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
      </div>
    </div>
    <div class="btn-group">
      <div class="btn-cancel btn"><span>Cancel</span></div>
      <div class="btn-submit btn">
        <span>Save changes</span>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { minLength, email, required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  name: "AccountInfor",
  data: () => ({
    show1: false,
    itemGender: ["Male", "Female"],
    email: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    phone: "",
    address: "",
    password: "",
    image:
      "https://preview.redd.it/5unn16axx1v81.jpg?width=640&crop=smart&auto=webp&s=19fcd170aadc63147c0a4492f43017a17f052a02",
  }),
  validations: {
    email: { required, email },
    phone: { required },
    password: { required, minLength: minLength(8) },
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Invalid e-mail."),
        !this.$v.email.required && errors.push("Email is required.");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.required && errors.push("Password is required.");
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
    handleChangeImage(e) {
      if (e.target.name === "image") {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            this.image = reader.result;
          }
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    },
  },
};
</script>

<style lang="scss" scoped src="./AccountInfor.scss"></style>
