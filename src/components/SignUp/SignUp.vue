<template>
    <div class="signUp-container">
        <div class="form glow-on-hover">
            <h1>Sign Up</h1>
            <form>
                <v-text-field v-model="name" prepend-icon="fa-solid fa-user" :error-messages="nameErrors" :counter="10" label="User Name" required
                    @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
                <v-text-field v-model="email" prepend-icon="fa-solid fa-envelope" :error-messages="emailErrors"  label="E-mail" @input="$v.email.$touch()" @blur="$v.email.$touch()">
                </v-text-field>
                <!-- <v-text-field v-model="email" prepend-icon="fa-solid fa-envelope" :rules="[rules.required, rules.email]" label="E-mail"></v-text-field> -->
                <!-- <v-text-field prepend-icon="fa-solid fa-key" v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1"
                    label="Your password" hint="At least 8 characters" counter @click:append="show1 = !show1">
                </v-text-field> -->
                <v-text-field prepend-icon="fa-solid fa-key" v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                     :type="show1 ? 'text' : 'password'" name="input-10-1" label="Your password" :error-messages="passwordErrors" @input="$v.password.$touch()" @blur="$v.password.$touch()"
                    hint="At least 8 characters" counter @click:append="show1 = !show1">
                </v-text-field>
                <v-text-field prepend-icon="fa-solid fa-key" v-model="confirmPassword" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :error-messages="ConfirmPasswordErrors" @input="$v.confirmPassword.$touch()" @blur="$v.confirmPassword.$touch()"
                    :type="show2 ? 'text' : 'password'" name="input-10-1" label="Confirm Password" hint="At least 8 characters" counter
                    @click:append="show2 = !show2">
                </v-text-field>
                <div class="raw">
                    <router-link to="/signIn">Do you already have an account ?</router-link>
                   
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
import { v4 as uuidv4 } from 'uuid'
import { validationMixin } from 'vuelidate'
import { required, maxLength, sameAs, minLength, email } from 'vuelidate/lib/validators'
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: "SignUp.vue",
    mixins: [validationMixin],

    validations: {
        email: { required , email},
        name: { required, maxLength: maxLength(10)},
        password: { required, minLength: minLength(8) },
        confirmPassword: { sameAs: sameAs("password"), required, minLength: minLength(8)},
    },

    data: () => ({
        show1: false,
        show2: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: "", 
        rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.'
            },
            
            
        },
    }),

    computed: {

        nameErrors() {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
            !this.$v.name.required && errors.push('Name is required.')
            return errors
        },
        emailErrors(){
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push("Invalid e-mail."),
            !this.$v.email.required && errors.push('Email is required.')
            return errors
        },
        ConfirmPasswordErrors() {
            const errors = []
            if (!this.$v.confirmPassword.$dirty) return errors
            !this.$v.confirmPassword.minLength && errors.push('Min 8 characters')
            !this.$v.confirmPassword.sameAs && errors.push('Passwords must be identical.')
            !this.$v.confirmPassword.required && errors.push('Password is required.')
            
            return errors
        },
        passwordErrors(){
            const errors = []
            if (!this.$v.password.$dirty) return errors
            !this.$v.password.minLength && errors.push('Min 8 characters')
            !this.$v.password.required && errors.push('Password is required.')
            return errors
        }
    },

    methods: {
        ...mapMutations(["SIGNUP"]),
        ...mapGetters(["getUserAll"]),
        submit() {
            // e.preventDefault();
            this.$v.$touch()
            console.log(this.$v.$invalid)
            if(this.$v.$invalid){
                this.$toast.open({
                    message: "Bạn đã đăng kí không thành công vui lòng thử lại!!",
                    type: "warning",
                    duration: 2000,
                    dismissible: true,
                    position: "bottom",
                });

            }else{
                const newUser = {
                    id: uuidv4(),
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    admin: false,
                }
                this.$store.commit("SIGNUP",newUser)
                this.$toast.open({
                    message: "Bạn đã đăng kí thành công vui lòng đăng nhập lại sau 2s!!",
                    type: "success",
                    duration: 2000,
                    dismissible: true,
                    position: "bottom",
                });
                this.clear();
                
                setTimeout(() => {
                    this.$router.push("/signIn")
                }, 2000);
                

            }
        },
        clear() {
            this.$v.$reset()
            this.name = ''
            this.password = ""
            this.email=""
            this.confirmPassword=""
        },
    },
}
</script>

<style lang="scss" scoped>
.signUp-container {
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../../assets/bg-signIn.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    animation: moveInBottom 2s ease-out;
    animation-fill-mode: backwards;

    h1 {
        font-size: 25px;
        font-weight: 900;
        color: #4DB7B3;
        text-align: center;
    }

    .form {
        background-color: #FFFFFF;
        box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 22%);
        border-radius: 10px;
        width: 40%;
        padding: 15px 35px;

        .raw {
            margin: 20px 0;
            display: flex;
            justify-content: space-between;

            a {
                color: #4DB7B3;
                text-decoration: none;
                font-size: 13px;
            }
        }

        .btn-submit {
            background-color: #4DB7B3;
            border: 1px solid #FFFFFF;
            padding: 5px 15px;
            margin: 0 auto;
            width: fit-content;
            color: #FFFFFF;
            font-weight: bold;
        }
    }

        .text-box {
            cursor: pointer;
            width: fit-content;
            margin: 0 auto;
            position: relative;
    
            .btn:link,
            .btn {
                text-transform: uppercase;
                text-decoration: none;
                padding: 5px 15px;
                display: inline-block;
                border-radius: 5px;
                border: 1px solid #FFFFFF;
                transition: all .2s;
            }
    
            .btn:hover {
                transform: translateY(-3px);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            }
    
            // .btn:active {
            //     transform: translateY(-1px);
            //     box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
            // }
    
            .btn-white {
                width: fit-content;
                background-color: #4DB7B3;
                color: #FFFFFF;
                font-weight: bold;
            }
    
            .btn::after {
                content: "";
                display: inline-block;
                height: 100%;
                width: 100%;
                border-radius: 5px;
                border: 1px solid #FFFFFF;
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
                transition: all .4s;
            }
    
            .btn-white::after {
                background-color: #4DB7B3;
            }
    
            .btn:hover::after {
                transform: scaleX(1.4) scaleY(1.6);
                opacity: 0;
            }
    
            .btn-animated {
                animation: moveInBottom 2s ease-out;
                animation-fill-mode: backwards;
            }
        }
    
    
        .glow-on-hover {
    
            border: none;
            outline: none;
            // color: #fff;
            // background: #111;
            // cursor: pointer;
            position: relative;
            z-index: 0;
            border-radius: 10px;
        }
    
        .glow-on-hover:before {
            content: '';
            background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
            position: absolute;
            top: -2px;
            left: -2px;
            background-size: 400%;
            z-index: -1;
            filter: blur(10px);
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            animation: glowing 20s linear infinite;
            opacity: 0;
            transition: opacity .3s ease-in-out;
            border-radius: 10px;
        }
    
        .glow-on-hover:active {
            color: #000
        }
    
        .glow-on-hover:active:after {
            background: #FFFFFF;
        }
    
        .glow-on-hover:hover:before {
            opacity: 1;
        }
    
        .glow-on-hover:after {
            z-index: -1;
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: #FFFFFF;
            left: 0;
            top: 0;
            border-radius: 10px;
        }

    .btn:hover::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
    }

    .btn-animated {
        animation: moveInBottom 2s ease-out;
        animation-fill-mode: backwards;
    }


}
@keyframes glowing {
    0% {
        background-position: 0 0;
    }

    50% {
        background-position: 400% 0;
    }

    100% {
        background-position: 0 0;
    }
}

@keyframes moveInBottom {
    0% {
        opacity: 0;
        transform: translateX(-40px);
    }

    100% {
        opacity: 1;
        transform: translateX(0px);
    }
}
</style>