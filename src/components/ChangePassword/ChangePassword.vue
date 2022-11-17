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
import './ChangePassword.scss'

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
