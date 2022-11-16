<template>
    <div class="contactUs-container">
        <div class="banner">
            <div class="banner-content">
                <h2>
                    CONTACT US
                </h2>
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
                                <img src="https://plasocks.com/wp-content/uploads/2022/08/icons8-map-marker-100.png" alt="">
                                <h3>
                                    Address
                                </h3>
                                <span>
                                    64, Nguyen Hong Street, Ward 1, Go Vap District, Ho Chi Minh City
                                </span>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div>
                                <img src="https://plasocks.com/wp-content/uploads/2022/08/icons8-timer-100-1.png" alt="">
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
                                <img src="https://plasocks.com/wp-content/uploads/2022/08/icons8-email-96-1.png" alt="">
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
                                <img src="https://plasocks.com/wp-content/uploads/2022/08/icons8-phone-64-1.png" alt="">
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
                <div>
                    <h2>
                        BECOME OUR PARTNERS!
                    </h2>
                    <h3>
                        We offer products to retailers with unprecedented discounts
                    </h3>
                    <button>
                        CONTACT US
                    </button>
                </div>
            </div>
            <div class="map">
            
            </div>
            
            
        </div>
        

    </div>
</template>

<script>
export default {
    name: "ContactUs"
}
</script>

<style lang="scss" scoped>
.contactUs-container{
    .banner{
        background-image: url(../../assets/contac-us.jpg);
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        min-height: 30px;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
}
</style>