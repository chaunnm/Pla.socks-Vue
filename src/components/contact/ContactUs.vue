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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.9101190579645!2d106.68886101425673!3d10.81819016138096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529260f4f7081%3A0xc10d439da929a07c!2zQ1QgUGxhemEgTmd1ecOqbiBI4buTbmc!5e0!3m2!1svi!2s!4v1668631804820!5m2!1svi!2s"
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

<style lang="scss" scoped>
.contactUs-container{
    .banner{
        background-image: url(../../assets/contact4.png);
        // background-image: url("https: //www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fcontact-us-contacts&psig=AOvVaw3oRTGrtsSw-m2AlvNinmoX&ust=1668712838894000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLjS4fy1s_sCFQAAAAAdAAAAABAD");
        // background-attachment: fixed;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        min-height: 30px;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: moveInBottom 2s ease-out;
        animation-fill-mode: backwards;
        h3{
            color: white;
            margin-top: 40%;
            animation: moveRightLeft 2s ease-out;
            animation-delay: .5s;
            animation-fill-mode: backwards;
        }
    }
    .main{
        max-width: 1080px;
        width: 80%;
        margin: 0 auto;
        margin-top: 30px;
        .section{
            display: flex;
            
            .main-left{
                flex: 50%;
                padding: 10px 15px;
                h2{
                    color: #555555;
                    font-size: 1.6em;
                    line-height: 1.3;
                    margin-bottom: 0.5em;
                    text-rendering: optimizeSpeed;
                }
                .list-contact{
                    display: grid;
                    grid-template-columns: 50% 50%;
                    .contact-item{
                        display: flex;
                        justify-content: center;
                        text-align: center;
                        // width: 100%;
                        // height: 300px;
                        padding: 20px;

                        margin-bottom: 20px;
                        img{
                            width: 70px;
                            height: 75px;
                            margin-bottom: 15px;
                        }
                        h3{
                            font-size: 1.25em;
                            color: #555;
                            width: 100%;
                            margin-top: 0;
                            margin-bottom: 0.5em;
                            text-rendering: optimizeSpeed;
                        }
                        span{
                            
                        }
                    }
                    .contact-item:hover{
                        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                    }
                }
            }
            .main-right{
                flex: 50%;
                padding: 10px 15px;
                h3{
                    color: #555555;
                    font-size: 1.6em;
                    line-height: 1.3;
                    margin-bottom: 0.5em;
                    text-rendering: optimizeSpeed;
                    label{
                        color: #222;
                    }
                }
                .text-box {
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
                        padding: 5px 20px;
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
            }
            .partners{
                width: 100%;
                display: flex;
                align-items: center;
                .left{
                    flex: 50%;
                    img{
                        width: 90%;

                    }
                    &.animation{
                        animation: moveInBottom 3s ease-out;
                        animation-fill-mode: backwards;
                        // visibility: visiblen !important;
                    }
                }
                .right{
                    flex: 50%;
                    text-align: center;
                    // visibility: hidden;
                    h2{
                        font-weight: 500;
                        font-size: 30px;
                        letter-spacing: 2px;
                        color: #4DB7B3;
                    }
                    h3{
                        color: #f299c2;
                        text-align: center;
                        font-size: 15px;
                    }
                    .btn-partners{
                        border: 2px solid #4DB7B3;
                        margin-top: 20px;
                        padding: 5px 20px;
                        color: #4DB7B3;
                        outline: none;
                        transition: all .3s ease;
                        box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 22%);
                    }
                    .btn-partners:hover{
                        background-color: #4DB7B3;
                        color: #FFFFFF;
                        box-shadow: none;
                    }
                    &.animation{
                        animation: moveRightLeft 3s ease-out;
                        animation-fill-mode: backwards;
                        // visibility: visiblen !important;
                    }
                }
            }
        }
        .map {
            width: 100%;
            padding-bottom: 30px;
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
        @keyframes moveRightLeft {
            0% {
                opacity: 0;
                transform: translateX(100px);
            }
        
            100% {
                opacity: 1;
                transform: translateX(0px);
            }
        }
    }
}
</style>