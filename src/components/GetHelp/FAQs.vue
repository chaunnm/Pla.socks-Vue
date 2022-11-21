<template>
    <div class="container">
        <div class="banner">
            <div class="background">
                FAQS
            </div>
        </div>
        <div class="content">
            <div class="intro">
                <div class="img-question">
                    <img src="https://plasocks.com/wp-content/uploads/2022/07/icons8-question-100.png"
                        alt="img-question">
                </div>
                <p>Questions are cool but answers are cooler.</p>
                <p>Good thing we have some for you below.</p>

            </div>
            <div class="wrapper">
                <div class="list-box">
                    <v-expansion-panels>
                        <v-expansion-panel class="block-question">
                            <v-expansion-panel-header class="block-heading">
                                <div class="heading-title">
                                    <v-icon class="icon">fa-regular fa-comments</v-icon>
                                    <span class="title">What’s the difference between the types of socks?</span>
                                </div>
                                <template v-slot:actions>
                                    <v-icon class="icon-close">
                                        fa-plus
                                    </v-icon>
                                </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="text">
                                The types of socks that Pla.Socks Shop offers differ based on the material used and how
                                the sock is built. Our Athletic
                                Socks are made with 80% Plastic and a 20% blend of nylon and elastic. They are knitted
                                specifically to have ribbing,
                                arch support, and be tighter around the leg. The only athletic sock we offer that
                                doesn’t follow that build is our
                                Knee-High Performance Socks. These are made with 100% plastic to offer more compression
                                than traditional athletic socks.
                                Our Standard Marketing or Promotional Socks are also made using the same material as
                                athletic socks. The difference is
                                that these are built using flat-knit construction, so the sock is the same thickness all
                                the way around (no ribbing,
                                arch support, etc.). They will be thinner than an athletic sock but thicker than a dress
                                sock. These are best for simple
                                giveaways, high school or college clubs, casual wear, and budget purchases. Our Dress
                                Socks are made with 80% plastic,
                                18% nylon, and 2% spandex. The high-quality material used allows this to be a
                                one-size-fits-most sock. Our dress socks
                                are also made using a higher gauge needle machine which allows for more complex logos
                                and a tighter knit. These are best
                                for corporate sponsors, high-end giveaways, and intricate designs.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                    <v-expansion-panels>
                        <v-expansion-panel class="block-question">
                            <v-expansion-panel-header class="block-heading">
                                <div class="heading-title">
                                    <v-icon class="icon">fa-regular fa-comments</v-icon>
                                    <span class="title">When will I receive my order?</span>
                                </div>
                                <template v-slot:actions>
                                    <v-icon class="icon-close">
                                        fa-plus
                                    </v-icon>
                                </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="text" style="text-align: center">
                                <p style="text-align: justify">
                                    Our standard shipment is within is 7-10 BUSINESS DAYS (weekends and holidays
                                    excluded)
                                    after art approval, plus transit
                                    time. Please also refer to the FedEx shipping map for days in transit. Most orders
                                    are
                                    shipped UPS or FedEx, however, we
                                    reserve the right to use other delivery services. Rush orders are available for
                                    shipment
                                    within 5 business days after
                                    art approval along with a one-time $100.00 rush fee. Please indicate the rush fee
                                    service under the notes section.
                                    Please call regarding international orders as well. Note: your order is not
                                    processed
                                    until all artwork is submitted and
                                    approved. One of our specialists will contact you for further verification before
                                    confirming and placing your order into production.
                                </p>
                                <img style="text-align: center" width="50%"
                                    src="https://www.customsockshop.com/wp-content/uploads/2011/11/p480u.jpg"
                                    alt="scope">
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                    <v-expansion-panels>
                        <v-expansion-panel class="block-question">
                            <v-expansion-panel-header class="block-heading">
                                <div class="heading-title">
                                    <v-icon class="icon">fa-regular fa-comments</v-icon>
                                    <span class="title">Is there a minimum amount I must order?</span>
                                </div>
                                <template v-slot:actions>
                                    <v-icon class="icon-close">
                                        fa-plus
                                    </v-icon>
                                </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="text">
                                For orders of custom socks, the minimum order is 15 pairs of the same color(s) and same
                                size. However, you do not have
                                to order in increments of 15 pairs, i.e. you can order 21 pairs if needed.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                    <v-expansion-panels>
                        <v-expansion-panel class="block-question">
                            <v-expansion-panel-header class="block-heading">
                                <div class="heading-title">
                                    <v-icon class="icon">fa-regular fa-comments</v-icon>
                                    <span class="title">Can you do printed socks with faces/dogs/etc.?</span>
                                </div>
                                <template v-slot:actions>
                                    <v-icon class="icon-close">
                                        fa-plus
                                    </v-icon>
                                </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="text">
                                No, Custom Sock Shop does not do any sock printing or sublimation. We use knitting
                                machines to produce all our socks
                                because it offers the best quality and durability.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                    <v-expansion-panels>
                        <v-expansion-panel class="block-question">
                            <v-expansion-panel-header class="block-heading">
                                <div class="heading-title">
                                    <v-icon class="icon">fa-regular fa-comments</v-icon>
                                    <span class="title">Is there a set-up fee?</span>
                                </div>
                                <template v-slot:actions>
                                    <v-icon class="icon-close">
                                        fa-plus
                                    </v-icon>
                                </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="text">
                                No, Custom Sock Shop does not charge any fees for set-up or custom logos on any sock
                                order. You will be able to work
                                with our design team for no extra cost.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                    <v-expansion-panels>
                        <v-expansion-panel class="block-question">
                            <v-expansion-panel-header class="block-heading">
                                <div class="heading-title">
                                    <v-icon class="icon">fa-regular fa-comments</v-icon>
                                    <span class="title">Can I have a sample before I place my order?</span>
                                </div>
                                <template v-slot:actions>
                                    <v-icon class="icon-close">
                                        fa-plus
                                    </v-icon>
                                </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="text">
                                If you are looking for a sample of our custom socks, we can provide you with one in most
                                scenarios. Please add any logo,
                                striping, size, and coloring requests with your sample order so we can do our best to
                                find a previously designed sock
                                that best fits your specifications. Samples are provided from overruns of previous
                                orders that were created. <strong>
                                    orders that were created. Please note
                                    the sock you will receive will not be your design – only a sock that is similar.
                                    orders that were created. </strong> A
                                $10.00 fee and shipping costs will be
                                incurred.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                    <v-expansion-panels>
                        <v-expansion-panel class="block-question">
                            <v-expansion-panel-header class="block-heading">
                                <div class="heading-title">
                                    <v-icon class="icon">fa-regular fa-comments</v-icon>
                                    <span class="title">Can I have a free mockup of my sock?</span>
                                </div>
                                <template v-slot:actions>
                                    <v-icon class="icon-close">
                                        fa-plus
                                    </v-icon>
                                </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="text">
                                While we charge a $10.00 fee for a physical sample of your sock to be sent to you, we
                                are more than happy to create a
                                free digital mockup of your sock for free. Simply contact us with your design and our
                                team will get to work on your free
                                prototype.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                    <v-expansion-panels>
                        <v-expansion-panel class="block-question">
                            <v-expansion-panel-header class="block-heading">
                                <div class="heading-title">
                                    <v-icon class="icon">fa-regular fa-comments</v-icon>
                                    <span class="title">How do I know what size to order? *</span>
                                </div>
                                <template v-slot:actions>
                                    <v-icon class="icon-close">
                                        fa-plus
                                    </v-icon>
                                </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="text">
                                Table and search
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                    <v-expansion-panels>
                        <v-expansion-panel class="block-question">
                            <v-expansion-panel-header class="block-heading">
                                <div class="heading-title">
                                    <v-icon class="icon">fa-regular fa-comments</v-icon>
                                    <span class="title">How can I get help if I have any questions about my
                                        design?</span>
                                </div>
                                <template v-slot:actions>
                                    <v-icon class="icon-close">
                                        fa-plus
                                    </v-icon>
                                </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="text">
                                Call one of our sock specialists at 0388103967 Monday-Sunday, 10am-10pm EST or email us
                                at sales@plasocksshop.com and we
                                will respond within the same day.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                    <v-expansion-panels>
                        <v-expansion-panel class="block-question">
                            <v-expansion-panel-header class="block-heading">
                                <div class="heading-title">
                                    <v-icon class="icon">fa-regular fa-comments</v-icon>
                                    <span class="title">What kind of logos can I put on my sock?</span>
                                </div>
                                <template v-slot:actions>
                                    <v-icon class="icon-close">
                                        fa-plus
                                    </v-icon>
                                </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="text">
                                Email us a .jpg or .pdf file of the logo you desire for review by our sock specialists.
                                Please provide the style and
                                size of sock on which you would like your logo. NOTE – We do not screen print or
                                embroidery logos on socks. The sock
                                knitting process uses larger needles than embroidery that results in a pixelated stitch
                                pattern. This process makes for
                                durable custom socks but comes with its limitations. Designs are knit into the sock
                                itself not applied on, so simple
                                logos and text work best. Please view our logo library for examples and ideas.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                    <v-expansion-panels>
                        <v-expansion-panel class="block-question">
                            <v-expansion-panel-header class="block-heading">
                                <div class="heading-title">
                                    <v-icon class="icon">fa-regular fa-comments</v-icon>
                                    <span class="title">What are my size options for the text on customized
                                        socks?</span>
                                </div>
                                <template v-slot:actions>
                                    <v-icon class="icon-close">
                                        fa-plus
                                    </v-icon>
                                </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="text">
                                <img width="100%"
                                    src="https://www.customsockshop.com/wp-content/uploads/2012/02/text-size-image.png"
                                    alt="ABCD">
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                    <v-expansion-panels>
                        <v-expansion-panel class="block-question">
                            <v-expansion-panel-header class="block-heading">
                                <div class="heading-title">
                                    <v-icon class="icon">fa-regular fa-comments</v-icon>
                                    <span class="title">What are the methods of payment Pla.socks accepts?</span>
                                </div>
                                <template v-slot:actions>
                                    <v-icon class="icon-close">
                                        fa-plus
                                    </v-icon>
                                </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="text">
                                Accepted payments such as Napas, VN Pay, Zalo Pay or ewallet Mo - mo Most major credit
                                cards such as Visa, Mastercard,
                                and PayPal.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                    <v-expansion-panels>
                        <v-expansion-panel class="block-question">
                            <v-expansion-panel-header class="block-heading">
                                <div class="heading-title">
                                    <v-icon class="icon">fa-regular fa-comments</v-icon>
                                    <span class="title">What is the Return Policy?</span>
                                </div>
                                <template v-slot:actions>
                                    <v-icon class="icon-close">
                                        fa-plus
                                    </v-icon>
                                </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="text">
                                If you are not satisfied with your order, please call a sock specialist at 0388103967.
                                Each case is different; however,
                                we do not accept returns on socks that have been customized after artwork approval and
                                order confirmation. All orders
                                returned will be charged a 20% restocking fee, unless the error was done by us. Please
                                ship returns with a valid RA
                                number written on the box to 12423 Brougham, Sterling Heights MI 48312.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                    <v-expansion-panels>
                        <v-expansion-panel class="block-question">
                            <v-expansion-panel-header class="block-heading">
                                <div class="heading-title">
                                    <v-icon class="icon">fa-regular fa-comments</v-icon>
                                    <span class="title">Do you have any sock templates I can use?</span>
                                </div>
                                <template v-slot:actions>
                                    <v-icon class="icon-close">
                                        fa-plus
                                    </v-icon>
                                </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="text">
                                Yes, we do. Below are six Illustrator files of basic sock template for you to use. We
                                have also included an artwork
                                proof template for you to use as well. Full Crew Elite Sock Template Crew Sock Front &
                                Back Template I Crew Sock
                                Template II Full Anklet Sock Template Knee High Sock Template Multiple Sock Template
                                Artwork Proof Template
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                    <v-expansion-panels>
                        <v-expansion-panel class="block-question">
                            <v-expansion-panel-header class="block-heading">
                                <div class="heading-title">
                                    <v-icon class="icon">fa-regular fa-comments</v-icon>
                                    <span class="title">Is there a limit to the number of colors I can put on my
                                        sock?</span>
                                </div>
                                <template v-slot:actions>
                                    <v-icon class="icon-close">
                                        fa-plus
                                    </v-icon>
                                </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="text">
                                Logos can have a maximum of four colors per sock. If you have a special request, contact
                                our team at
                                sales@plasockshop.comand we will try our best to assist you.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                    <v-expansion-panels>
                        <v-expansion-panel class="block-question">
                            <v-expansion-panel-header class="block-heading">
                                <div class="heading-title">
                                    <v-icon class="icon">fa-regular fa-comments</v-icon>
                                    <span class="title">Do you do rush orders?</span>
                                </div>
                                <template v-slot:actions>
                                    <v-icon class="icon-close">
                                        fa-plus
                                    </v-icon>
                                </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="text">
                                Rush orders are available for shipment within 5 business days after art approval along
                                with a one-time $100.00 rush fee.
                                Please indicate the rush fee service under the notes section when completing your order.
                                It is important to note that
                                rush orders are seasonal. We will have a hard time accommodating you during certain
                                holidays.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                    <v-expansion-panels>
                        <v-expansion-panel class="block-question">
                            <v-expansion-panel-header class="block-heading">
                                <div class="heading-title">
                                    <v-icon class="icon">fa-regular fa-comments</v-icon>
                                    <span class="title">Can I track my order shipment?</span>
                                </div>
                                <template v-slot:actions>
                                    <v-icon class="icon-close">
                                        fa-plus
                                    </v-icon>
                                </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="text">
                                Once the artwork is approved and the order is shipped, Pla.Socks Shop will send you a
                                tracking number so you can follow
                                your order.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                    <v-expansion-panels>
                        <v-expansion-panel class="block-question">
                            <v-expansion-panel-header class="block-heading">
                                <div class="heading-title">
                                    <v-icon class="icon">fa-regular fa-comments</v-icon>
                                    <span class="title">Do the socks shrink or fade after being washed?</span>
                                </div>
                                <template v-slot:actions>
                                    <v-icon class="icon-close">
                                        fa-plus
                                    </v-icon>
                                </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="text">
                                Pla.Socks Shop prides itself on creating quality socks that are durable. While the socks
                                will shrink slightly, our
                                acrylic blend ensures that no logos or colors will fade, and your socks will stand the
                                test of time (and laundry).
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                    <v-expansion-panels>
                        <v-expansion-panel class="block-question">
                            <v-expansion-panel-header class="block-heading">
                                <div class="heading-title">
                                    <v-icon class="icon">fa-regular fa-comments</v-icon>
                                    <span class="title">Do you ship internationally?</span>
                                </div>
                                <template v-slot:actions>
                                    <v-icon class="icon-close">
                                        fa-plus
                                    </v-icon>
                                </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="text">
                                Yes. For all international orders, please contact sales@plasocksshop.comfor our
                                processes and more information.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    name: "FAQs",
    data() {
        return {
            toggle: false,
        };
    }

}
</script>

<style lang="scss" scoped>
.container {
    margin: 0 auto;
    margin-bottom: 50px;

    .banner {
        background-image: url(https://plasocks.com/wp-content/uploads/2022/07/faq-banner.jpg);
        background-size: cover;
        font-size: 42px;
        color: #fff;
        font-weight: 500;
        height: 250px;

        .background {
            background-color: rgba(0, 0, 0, 0.2);
            width: 100%;
            height: 100%;

            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .content {
        // max-width: 1080px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        // margin: 0 100px;
        .intro {
            text-align: center;

            .img-question {
                margin-top: 30px;
            }

            p {
                font-size: 1.3em;
                line-height: 1.3;
                color: #555;
                margin: 10px;
                font-weight: 500;
            }
        }

        .wrapper {
            margin: 0 100px;
            background-color: #fff;

            .list-box {
                margin: 20px auto;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                max-width: 900px;

                .block-question {
                    margin: 0 auto;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: center;
                    border: #4db7b3 1.2px solid;
                    border-collapse: collapse;
                    margin-bottom: 6px;
                    width: 100%;
                    border-radius: 0 !important;

                    .block-heading {
                        border-radius: 0 !important;
                        width: 100%;
                        background-color: #4db7b3;
                        color: #fff;
                        padding: 10px 20px;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;

                        .heading-title {
                            display: flex;
                            align-items: center;

                            .icon {
                                font-size: 16px;
                                color: #fff;

                            }

                            .title {
                                font-size: 16px !important;
                                margin-left: 6px;
                            }
                        }

                        .icon-close {
                            color: #fff !important;
                            font-size: 20px !important;
                        }
                    }

                    .text {
                        padding-top: 10px;
                        font-size: 12px !important;
                        text-align: justify;
                    }


                }
            }
        }


    }
}
</style>