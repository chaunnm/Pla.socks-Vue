<template>
    <div class="forgot">
        <div class="form glow-on-hover">
            <h1>Forgot Password</h1>
            <form>
                
                <v-text-field v-model="email" prepend-icon="fa-solid fa-envelope" :rules="[rules.required, rules.email]" label="E-mail"></v-text-field>
                
                <div class="raw">
                    <span>Lost your password? Please enter exacly your email address.
                    You will receive a link to create a new password via email.</span>
        
                </div>
                
                <div class="text-box" @click="submit">
                    <span class="btn btn-white btn-animated">SUBMIT</span>
                </div>
            </form>
        </div>
        
      
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import './ForgotPassword.scss'

export default {
    name: "ForgotPassword",
    mixins: [validationMixin],

    data: () => ({
        email: '',

        rules: {
            required: value => !!value || 'Required.',
            email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.'
            },


        },
    }),


    methods: {
        submit(e) {
            e.preventDefault();
            this.$v.$touch()
        },
        clear() {
            this.$v.$reset()
            this.name = ''
            this.password = ""
        },
    },
}

</script>
