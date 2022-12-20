<template>
  <div class="container-comment">
    <div class="title">
      <span>Review ({{ listReview.length }})</span>
    </div>
    <div class="comment-main" :class="{ noreview: !haveReview }">
      <div v-show="!haveReview" class="no-review">
        <h2>Reviews</h2>
        <span>There are no reviews yet.</span>
      </div>

      <div v-show="haveReview" class="comment-view">
        <h2>1 review for Custom Crew Socks</h2>
        <div v-for="(comment, index) in listReview" :key="index">
          <div class="comment-raw">
            <div class="avatar">
              <img
                src="https://secure.gravatar.com/avatar/c2698e76dfd047d1fdc02843452674ff?s=60&d=mm&r=g"
                alt="avatar"
              />
            </div>

            <div class="comment-raw-content">
              <v-rating
                :value="comment.rating"
                readonly
                background-color="pink lighten-3"
                color="#f299c2"
              ></v-rating>
              <div class="info-comment">
                <strong>{{ comment.name }}</strong> -
                <span>{{ comment.time }}</span>
                <div>{{ comment.review }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="comment-add">
        <h2>ADD VIEW</h2>
        <div class="separate">
          <hr />
          <i class="fa-solid fa-fan"></i>
          <hr />
        </div>
        <div class="rating">
          <h3>Your rating *</h3>
          <v-rating
            v-model="rating"
            background-color="orange lighten-3"
            color="orange"
          ></v-rating>
        </div>
        <div class="form">
          <h3 class="margin-review">Your review *</h3>
          <!-- <v-textarea filled name="input-7-4" label="Enter your review" solo v-model="review" :error-messages="reviewErorr" required @input="$v.review.$touch()" @blur="$v.review.$touch()"
                       >
                    </v-textarea> -->
          <v-textarea
            v-model="review"
            :error-messages="reviewErorr"
            required
            solo
            name="input-7-4"
            placeholder="Enter your review"
            @input="$v.review.$touch()"
            @blur="$v.review.$touch()"
          ></v-textarea>
          <div :class="{ reviewGroup: haveReview }">
            <div class="review-group-item">
              <h3>Your Name *</h3>
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
            </div>
            <div class="review-group-item">
              <h3>Your E-mail *</h3>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
            </div>
          </div>

          <button class="btn-add" @click="submit">SUBMIT</button>
          <button class="btn-clear" @click="clear">CLEAR</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import "./CommentRate.scss";

export default {
  name: "CommentRate",
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    review: { required },
  },
  data: () => ({
    select: null,
    name: "",
    email: "",
    review: "",
    time: "",
    rating: 0,
    haveReview: false,
    listReview: [],
  }),

  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        if (this.rating == 0) {
          this.$toast.open({
            message: "Bạn chưa đáng giá sản phẳm !!",
            type: "warning",
            duration: 2000,
            dismissible: true,
            position: "bottom",
          });
        } else {
          var today = new Date();
          var tg =
            today.getDate() +
            "/" +
            today.getMonth() +
            "/" +
            today.getFullYear() +
            "  " +
            today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds();
          console.log("Today: ", tg);
          this.listReview.push({
            rating: this.rating,
            review: this.review,
            name: this.name,
            email: this.email,
            time: tg,
          });
          console.log(this.listReview);
          this.haveReview = true;
          this.$v.$reset();
          this.name = "";
          this.email = "";
          this.review = "";
          this.rating = 0;
        }
      }
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.review = "";
      this.rating = 0;
    },
  },
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
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    reviewErorr() {
      const errors = [];
      if (!this.$v.review.$dirty) return errors;
      !this.$v.review.required && errors.push("Review is required.");
      return errors;
    },
  },
};
</script>
