<template>
    <div class="container-recylces">
        <div data-aos="zoom-in" data-aos-duration="300" data-aos-delay="200" data-aos-easing="linear"
            data-aos-once="true" class="banner">
            PLA.SOCKS RECYCLES
        </div>
        <div class="content">

            <h3 class="title">Old socks can be repurposed or recycled</h3>
            <p class="text">
                Paper. plastic. aluminum cans. these items are top of mind when you think of waste headed for a
                landfill.
                They’re also
                among the most commonly recycled. But did you know that around 6 percent of landfill waste generated
                each
                year comes
                from textiles? This may not sound like a lot but it translates to millions of pounds of waste, most of
                which
                could be
                reused or recycled.
            </p>
            <div class="row">
                <div class="col-left">
                    <h3 class="title">We can make a difference</h3>
                    <p class="text">
                        We have been recycling our manufacturing waste for decades. The current overall waste here at
                        our mill is less than 2%.
                        Well below the industry norm, we couldn’t be more proud of our low output. However, waste
                        doesn’t stop with
                        manufacturing.
                        <br>
                        <br>
                        Textiles go out with the trash in American homes every day. Maybe that’s because we don’t think
                        of fabric as waste. with
                        the launch of Pla.socks recycles back in 2011, we hoped to inspire our friends and customers to
                        reshape their view of
                        recycling beyond what you put in your bin for weekly pick up. Here’s what you can do:
                    </p>

                </div>
                <!-- <p class="gap"></p> -->
                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" data-aos-easing="linear"
                    data-aos-once="true" class="col-right">
                    <img src="	https://plasocks.com/wp-content/uploads/2022/08/Recylcle-socks-icon_750x.webp"
                        alt="recycles">
                </div>
            </div>
            <h4 class="sub-title">Reduce</h4>
            <p class="text">
                Buy only high quality, sustainable items that you truly love. you’ll wear these things more frequently
                and, because
                better quality means increased durability, you won’t have to purchase replacements as often.
            </p>
            <h4 class="sub-title">Resuse</h4>
            <p class="text">
                Give your old things a new life. You can donate to charity or find ways to repurpose. As a family of
                sock makers, we’ve
                been getting creative with our leftovers for years. Here are a few of our tried-and-true favorite uses:
            <ul>
                <li><span>Dust rag:</span>slip a sock on your hand, dampen with cleaner and have at it. wash and reuse.
                </li>
                <li><span>Drink cozy:</span>want to insulate your drink? Put a sock on it. Cold stays cold and hot stays
                    hot.</li>
                <li><span>Heat packs:</span>fill a sock with rice, seal it and heat in the microwave for 1 minute.</li>
                <li><span>Draft protector:</span>in the winter, wedge stuffed socks in front of doors to keep cold air
                    out.</li>
                <li><span>Dog toy:</span>place a tennis ball inside a sock for an added layer of chewing fun.</li>

            </ul>
            </p>
            <h4 class="sub-title">
                Recycle
            </h4>
            <p class="text">
                Old fibers can be reworked and reused. here’s where we come in.
                <br>
                <br>
                We have the resources to take past-their-prime socks off your hands and have them recycled. Send your
                old socks* to us
                at this address: 42B, Street No 54, Thao Dien Ward, District 2, Ho Chi Minh City.
                <br>
                <br>
                That’s it, we’ll handle recycling from there. your old socks will be transformed into fiber called
                “shoddy” that will
                ultimately be used for carpet padding in the automotive industry.
                <br>
                <br>
                It’s little steps that make a big difference as we move towards a sustainable lifestyle. our family is
                proud that you’re
                taking a few of those steps in Pla.socks.
                <br>
                <br>
                *We’ll gladly take any of your old socks off your hands, regardless of what brand they are or what
                materials they are
                made of.
            </p>
            <h4 class="sub-title">Please keep it to socks, y’all. that’s all we’re able to recycle at this time.</h4>
        </div>

    </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
    name: "pla-socks-recylces",
    mounted() {
        AOS.init();
    },
};
</script>

<style lang="scss" scoped>
.container-recylces {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 80px;

    .banner {
        width: 100%;
        height: 300px;
        background-image: url(https://plasocks.com/wp-content/uploads/2022/07/banner-recycle-1024x683.png);
        background-size: cover;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        font-weight: 500;
    }

    .content {
        max-width: 1080px;
        margin: 0 auto;

        .title {
            margin: 30px 0 20px 0;
        }

        .sub-title {
            margin: 30px 0 20px 0;
        }

        .text {
            line-height: 1.6;
            text-align: justify;
            margin-bottom: 24px;
        }

        ul {
            margin-left: 15px;

            li span {
                font-weight: 500;
            }
        }

        .row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0;
            margin-top: 50px;
            margin-bottom: 30px;
            width: 100%;

            .col-left {
                flex: 1;
                margin-right: 40px;
            }

            // .gap {
            //     margin: 0 60px;
            // }

            .col-right {
                flex: 1;
                box-shadow: 0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);

                img {
                    width: 90%;
                }

                &:hover {
                    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
                    transition: transform .3s, box-shadow .3s, background-color .3s, color .3s, opacity .3s;
                }
            }
        }

    }
}

@media screen and (max-width: 1080px) {
    .container-recylces {
        .content {
            margin: 0 40px;
        }
    }
}

@media screen and (max-width: 650px) {
    .container-recylces {
        .content {
            .row {
                flex-direction: column;
            }
        }
    }
}
</style>