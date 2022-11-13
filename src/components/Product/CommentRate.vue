<template>
  <div class="container-comment">
    <div class="title">
      <span>Review ({{listReview.length}})</span>
    </div>
    <div class="comment-main" :class="{ noreview: !haveReview }">
            <div v-show="!haveReview" class ="no-review">
                <h2>Reviews</h2>
                <span>There are no reviews yet.</span>
            </div>
            
            <div v-show="haveReview" class="comment-view">
                <h2>1 review for Custom Crew Socks</h2>
                <div v-for="(comment, index) in listReview" :key="index">
                    <div class="comment-raw">
                        <div class="avatar">
                            <img src="https://secure.gravatar.com/avatar/c2698e76dfd047d1fdc02843452674ff?s=60&d=mm&r=g" alt="avatar" />
                    
                        </div>
                    
                        <div class="comment-raw-content">
                            <v-rating :value="comment.rating"  background-color="pink lighten-3" color="#f299c2"></v-rating>
                            <div class="info-comment">
                                <strong>{{comment.name}}</strong> -
                                <span>{{comment.time}}</span>
                                <div>{{comment.review}}</div>
                            </div>
                    
                        </div>
                    </div>

                </div>
                
            </div>
            <div class="comment-add">
                <h2>ADD VIEW </h2>
                <div class="separate">
                    <hr>
                    <i class="fa-solid fa-fan"></i>
                    <hr>

                </div>
                <div class="rating">
                    <h3>Your rating *</h3>
                    <v-rating v-model="rating" background-color="orange lighten-3" color="orange"></v-rating>
                </div>
                <div class="form">
                    <h3 class="margin-review">Your review *</h3>
                    <!-- <v-textarea filled name="input-7-4" label="Enter your review" solo v-model="review" :error-messages="reviewErorr" required @input="$v.review.$touch()" @blur="$v.review.$touch()"
                       >
                    </v-textarea> -->
                    <v-textarea v-model="review" :error-messages="reviewErorr" required solo name="input-7-4" label="Enter your review" @input="$v.review.$touch()" @blur="$v.review.$touch()"></v-textarea>
                    <div :class="{ reviewGroup: haveReview }">
                        <div class="review-group-item">
                            <h3>Your Name *</h3>
                            <v-text-field v-model="name" :error-messages="nameErrors" :counter="10" required @input="$v.name.$touch()"
                                @blur="$v.name.$touch()"></v-text-field>
                        </div>
                        <div class="review-group-item">
                            <h3>Your E-mail *</h3>
                            <v-text-field v-model="email" :error-messages="emailErrors" required @input="$v.email.$touch()"
                                @blur="$v.email.$touch()"></v-text-field>
                        </div>
                        
                    </div>
                    
                    
                    <button class="btn-add" @click="submit">
                        SUBMIT
                    </button> 
                    <button class="btn-clear" @click="clear">
                        CLEAR
                    </button>
                </div>
            
            </div>

    </div>

  </div>
</template>

<script>

import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

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
    
  methods:{
      submit() {
          this.$v.$touch()
          if (this.rating && this.review && this.name && this.email) {
              var today = new Date();
              var tg = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear() + "  " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
              console.log("Today: ", tg)
              this.listReview.push({
                  rating: this.rating,
                  review: this.review,
                  name: this.name,
                  email: this.email,
                  time: tg,
              })
              console.log(this.listReview)
              this.haveReview = true
              this.$v.$reset()
              this.name = ''
              this.email = ''
              this.review = ""
              this.rating = 0
          }
          
          
      },
      clear() {
          this.$v.$reset()
          this.name = ''
          this.email = ''
          this.review=""
          this.rating=0
      },
    
  },
    computed: {
        nameErrors() {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
            !this.$v.name.required && errors.push('Name is required.')
            return errors
        },
        emailErrors() {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Must be valid e-mail')
            !this.$v.email.required && errors.push('E-mail is required')
            return errors
        },
        reviewErorr(){
            const errors = []
            if (!this.$v.review.$dirty) return errors
            !this.$v.review.required && errors.push('Review is required.')
            return errors

        }
    },
};
</script>

<style lang="scss" scoped>
.container-comment {
    color: #7b7777;
  max-width: 1080px;
  margin: 0 auto;
  padding: 30px 0;
  .title {
    text-align: center;
    span {
      padding: 10px 15px;
      border-radius: 32px;
      border: 2px solid #4db7b3;
      line-height: 2.4em;
      font-size: 0.8em;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }
  }
  @media screen and (max-width: 850px) {
      .comment-main {
          display: block !important;
          padding: 20px;
      }
  }
  .comment-main{
    display: flex;
    width: 100%;
    padding-top: 1em;
    .no-review{
        h2{
            font-size: 1.25em;
                color: #555;
                width: 100%;
                margin-top: 0;
                margin-bottom: 0.5em;
                text-rendering: optimizeSpeed;
                margin-bottom: 10px;

        }
        
        span{
            display: inline-block;
            margin-bottom: 1.3rem;
        }

    }

    .comment-view {
        flex: 60%;
        padding: 15px;
        h2{
            font-size: 1.25em;
            color: #555;
            width: 100%;
            margin-top: 0;
            margin-bottom: 0.5em;
            text-rendering: optimizeSpeed;
            margin-bottom: 10px;
        }
        

        .comment-raw {
            margin-left: 1.3rem;
            margin-bottom: 0.6rem;
            padding-top: 10px;
            display: flex;
            // border-top: 1px dashed #ddd;
            // align-items: center;
            .avatar{
                
                img {
                        border-radius: 100%;
                
                }

            }
 
            .comment-raw-content{
                padding: 0 10px;
                .info-comment{
                    padding-left: 0.5rem;
                    strong{
                        font-weight: bold;
                        color: #7b7777;
                        font-size: 18px;
                    }
                    div{
                        margin-bottom: 1.3rem;
                    }
                }
            }

        }
     
    }
    .comment-view > div:not(:first-child){
        border-bottom: 1px dashed #ddd;
    }
    .comment-add{
        padding: 15px 30px 30px;
        border: 2px solid #4db7b3;
        flex: 40%;
        width: 100%;
        .separate{
            margin-bottom: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            hr{
                width: 30%;
            }
            .fa-fan{
                color: #4db7b3;
                margin: 0 10px;
                font-size: 25px;
                animation: animation360 2s infinite linear;
            }
        }
        h2{
            font-size: 1.25em;
            color: #555;
            width: 100%;
            margin-top: 0;
            margin-bottom: 0.5em;
            text-rendering: optimizeSpeed;
            text-align: center;
        }
        .rating{
            h3{
                font-weight: bold;
                    display: block;
                    font-size: .9em;
                    margin-bottom: 0.4em;
                    color: #222;
            }
            .error-text{
                display: none;
            }

        }
        .review{
            
        }
        
        .btn-add{
            outline: none;
                border: none;
                background-color: #4db7b3;
                color: #fff;
                padding: 5px 15px;
                margin-top: 20px;
                font-weight: bold;
            margin-bottom: 30px;
            margin-right: 20px;
            transition: all .3s ease;
        }
        .btn-clear{
            outline: none;
                border: none;
                background-color: #c5c4c4;
                color: #7b7777;
                padding: 5px 15px;
                margin-top: 20px;
                font-weight: bold;
                margin-bottom: 30px;
                margin-right: 20px;
                transition: all .3s ease;
        }
        .btn-add:hover, .btn-clear:hover{
            box-shadow: 0 0 5px rgb(155, 155, 155);
            transform: scale(1.05);
        }
        .form{
            .reviewGroup {
                    display: flex;
                    width: 100%;
                    justify-content: center;
            
                    .review-group-item {
                        flex: 50%;
            
                    }
            
                    .review-group-item:nth-child(1) {
                        margin-right: 20px;
                    }
                }
            h3{
            font-weight: bold;
                display: block;
                font-size: .9em;
                // margin-bottom: 0.4em;
                color: #222;
            }
            .margin-review{
                margin-bottom: 20px;
            }
            
            .v-text-field__slot{
                label{
                    font-weight: bold;
                        display: block;
                        font-size: .9em;
                        margin-bottom: 0.4em;
                        color: #222;
                }
            }
                        .theme--light.v-label{
                            color: #222 !important;
                        }
        }

    }
        .theme--light.v-input input{
            border: 1px solid #222;
        }
    
    

  }
  .noreview{
    display: block !important;
  }
  
}
.v-text-field{
    padding: 0 !important;
    margin: 0 !important;
}

.v-text-field.v-text-field--enclosed .v-text-field__details {
    padding: 0px !important;
    margin-bottom: 8px;
}

@keyframes animation360 {
    from {
        // transform: rotate(0deg);
        transform: rotate(0deg);
    }

    to {
        transform: rotate(359deg);
    }
}
</style>
