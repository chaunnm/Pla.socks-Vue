<template>
    <div class="changePasword">
        <div class="form glow-on-hover">
            <h1>Change Password</h1>
            <form>
                <v-text-field v-model="email" prepend-icon="fa-solid fa-envelope" :error-messages="emailErrors" label="E-mail"
                    @input="$v.email.$touch()" @blur="$v.email.$touch()">
                </v-text-field>
                <!-- <v-text-field v-model="password" prepend-icon="fa-solid fa-key"  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1"
                    label="Your password" hint="At least 8 characters" counter @click:append="show1 = !show1">
                </v-text-field> -->
                <v-text-field prepend-icon="fa-solid fa-key" v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'" name="input-10-1" label="Your password" :error-messages="passwordErrors"
                    @input="$v.password.$touch()" @blur="$v.password.$touch()" hint="At least 8 characters" counter
                    @click:append="show1 = !show1">
                </v-text-field>
                <v-text-field v-model="newPassword" prepend-icon="fa-solid fa-key" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    :error-messages="newPasswordErrors" @input="$v.newPassword.$touch()"
                    @blur="$v.newPassword.$touch()" :type="show2 ? 'text' : 'password'" name="input-10-1"
                    label="New Password" hint="At least 8 characters" counter @click:append="show2 = !show2">
                </v-text-field>
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
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
    name: "ChangePassword",
    mixins: [validationMixin],

    validations: {
        email: { required, email },
        password: { required, minLength: minLength(8) },
        newPassword: { required, minLength: minLength(8) },
    },

    data: () => ({
        show1: false,
        show2: false,
        email: '',
        password: '',
        newPassword: "",

    }),

    computed: {
        emailErrors() {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push("Invalid e-mail."),
                !this.$v.email.required && errors.push('Email is required.')
            return errors
        },
        passwordErrors() {
            const errors = []
            if (!this.$v.password.$dirty) return errors
            !this.$v.password.minLength && errors.push('Min 8 characters')
            !this.$v.password.required && errors.push('Password is required.')
            return errors
        },
        newPasswordErrors() {
            const errors = []
            if (!this.$v.newPassword.$dirty) return errors
            !this.$v.newPassword.minLength && errors.push('Min 8 characters')
            !this.$v.newPassword.required && errors.push('Password is required.')
            return errors
        },
    },

    methods: {
        submit() {
            // e.preventDefault();
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.$toast.open({
                    message: "Đổi mật khẩu thất bại vui lòng thử lại",
                    type: "warning",
                    duration: 2000,
                    dismissible: true,
                    position: "bottom",
                });
            }else{
                const newpassword = {
                    email: this.email,
                    password: this.password,
                    newPassword: this.newPassword
                }
                this.$store.commit("CHANGEPASSWORD", newpassword)
                this.$toast.open({
                    message: "Đổi mật khẩu thành công vui lòng đăng nhập lại !!!",
                    type: "success",
                    duration: 2000,
                    dismissible: true,
                    position: "bottom",
                });

            }
        },
        
        clear() {
            this.$v.$reset()
            this.name = ''
            this.password = ""
            
        },
    },

}
</script>

<style lang="scss" scoped>
.changePasword{
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
        border-radius: 10px;
        width: 40%;
        padding: 15px;
        background-color: #FFFFFF;
            box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 22%);

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