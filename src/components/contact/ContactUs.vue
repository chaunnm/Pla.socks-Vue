<template>
    <div class="contactUs-container">
        <div class="banner">
            <div class="banner-content">
                <!-- <h2>
                    CONTACT US
                </h2> -->
                <h3>
                    If you need some help or questions, please contact us!
                </h3>
            </div>
            
        </div>
        <div class="main">
            <div class="section">
                <div class="main-left">
                    <h2>
                        Contact information
                    </h2>
                    <div class="list-contact">
                        <div class="contact-item">
                            <div>
                                <img src="../../assets/12587-delivery-address.gif" alt="">
                                <h3>
                                    Address
                                </h3>
                                <span>
                                    64, Nguyen Hong Street, <br> Ward 1, Go Vap District, <br> Ho Chi Minh City
                                </span>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div>
                                <img src="../../assets/92069-clock.gif" alt="">
                                <h3>
                                    Open – Close
                                </h3>
                                <span>
                                    All day: 10:00 – 22:00
                                </span>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div>
                                <img src="../../assets/95247-email.gif" alt="">
                                <h3>
                                    Email
                                </h3>
                                <span>
                                    plasocks@gmail.com
                                </span>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div>
                                <img src="../../assets/83684-phone.gif" alt="">
                                <h3>
                                    Phone
                                </h3>
                                <span>
                                    0834577251
                                </span>
                            </div>
                        </div>
                    </div>
                
                </div>
                <div class="main-right">
                
                    <h3>
                        Contact form
                    </h3>
                    <div class="form">
                        <label>Your name (required)</label>
                        <v-text-field solo></v-text-field>
                
                        <label>Your email (required)</label>
                        <v-text-field solo></v-text-field>
                
                        <label>Your message (required)</label>
                        <v-textarea solo name="input-7-4" label="Solo textarea"></v-textarea>
                
                        <div class="text-box">
                            <span class="btn btn-white btn-animated">SUBMIT</span>
                        </div>
                    </div>
                
                </div>
            </div>
            <div class="section">
                <div class="partners">
                    <div class="left" :class="{ animation: animation }">
                        <img src="../../assets/73195-business-partnership-contract-handshake.gif" alt="">
                    </div>
                    <div class="right" :class="{ animation: animation }">
                        <h2>
                            BECOME OUR PARTNERS!
                        </h2>
                        <h3>
                            We offer products to retailers with unprecedented discounts
                        </h3>
                        <button class="btn-partners">
                            CONTACT US
                        </button>
                    </div>
                </div>
            </div>
            <div class="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.898253528862!2d106.6906769139761!3d10.819097961365031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529a475566011%3A0x8f5b852463203cdf!2zNjQgTmd1ecOqbiBI4buTbmcsIFBoxrDhu51uZyAxLCBHw7IgVuG6pXAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MTAwMDQsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1668428690095!5m2!1sen!2s"
                width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>        
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactUs",
    data: () =>({
        scY: 0,
        animation: false,
        scTimer: 0,
    }),
    mounted() {
        window.addEventListener('scroll', this.handleScroll);

    },
    
    methods: {
        handleScroll: function () {
            if (this.scTimer) return;
            this.scTimer = setTimeout(() => {
                this.scY = window.scrollY;
                
                if (window.scrollY >= 1000) {
                    this.animation = true
                }
                if (window.scrollY == 0){
                    this.animation = false
                }
                clearTimeout(this.scTimer);
                this.scTimer = 0;
            }, 100);
            
        },
        
    }
}
</script>

<style lang="scss" src="./ContactUs.scss" scoped>
</style>