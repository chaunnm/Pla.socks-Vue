<template>
    <div class="container">
        <template>
            <div>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut
                            aliquip ex ea commodo consequat.
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut
                            aliquip ex ea commodo consequat.
                        </v-expansion-panel-content>
                    </v-expansion-panel>

                </v-expansion-panels>



                <div class="block-question" @click='toggle = !toggle'>
                    <div class="block-heading">
                        <div class="heading-title">
                            <v-icon class="icon">fa-regular fa-comments</v-icon>
                            <span class="title">What’s the difference between the types of socks?</span>
                        </div>
                        <div v-if="toggle" class="close">
                            <span class="close-item">-</span>
                            <!-- <v-icon class="close-item">fa-plus</v-icon> -->
                        </div>
                        <div v-else class="close">
                            <span class="close-item">+</span>
                            <!-- <v-icon class="close-item">fa-minus</v-icon> -->
                        </div>
                    </div>
                    <div :class="{ appear: toggle }" class="text">
                        The types of socks that Pla.Socks Shop offers differ based on the material used and how the
                        sock is built. Our
                        Athletic
                        Socks are made with 80% Plastic and a 20% blend of nylon and elastic. They are knitted
                        specifically to have
                        ribbing,
                        arch support, and be tighter around the leg. The only athletic sock we offer that doesn’t
                        follow that build is
                        our
                        Knee-High Performance Socks. These are made with 100% plastic to offer more compression than
                        traditional
                        athletic socks.
                        Our Standard Marketing or Promotional Socks are also made using the same material as
                        athletic socks. The
                        difference is
                        that these are built using flat-knit construction, so the sock is the same thickness all the
                        way around (no
                        ribbing,
                        arch support, etc.). They will be thinner than an athletic sock but thicker than a dress
                        sock. These are best
                        for simple
                        giveaways, high school or college clubs, casual wear, and budget purchases. Our Dress Socks
                        are made with 80%
                        plastic,
                        18% nylon, and 2% spandex. The high-quality material used allows this to be a
                        one-size-fits-most sock. Our dress
                        socks
                        are also made using a higher gauge needle machine which allows for more complex logos and a
                        tighter knit. These
                        are best
                        for corporate sponsors, high-end giveaways, and intricate designs.
                    </div>
                </div>
                <div class="block-question" @click='toggle = !toggle'>
                    <div class="block-heading">
                        <div class="heading-title">
                            <v-icon class="icon">fa-regular fa-comments</v-icon>
                            <span class="title">What’s the difference between the types of socks?</span>
                        </div>
                        <div v-if="toggle" class="close">
                            <span class="close-item">-</span>
                            <!-- <v-icon class="close-item">fa-plus</v-icon> -->
                        </div>
                        <div v-else class="close">
                            <span class="close-item">+</span>
                            <!-- <v-icon class="close-item">fa-minus</v-icon> -->
                        </div>
                    </div>
                    <div :class="{ appear: toggle }" class="text">
                        The types of socks that Pla.Socks Shop offers differ based on the material used and how the
                        sock is built. Our
                        Athletic
                        Socks are made with 80% Plastic and a 20% blend of nylon and elastic. They are knitted
                        specifically to have
                        ribbing,
                        arch support, and be tighter around the leg. The only athletic sock we offer that doesn’t
                        follow that build is
                        our
                        Knee-High Performance Socks. These are made with 100% plastic to offer more compression than
                        traditional
                        athletic socks.
                        Our Standard Marketing or Promotional Socks are also made using the same material as
                        athletic socks. The
                        difference is
                        that these are built using flat-knit construction, so the sock is the same thickness all the
                        way around (no
                        ribbing,
                        arch support, etc.). They will be thinner than an athletic sock but thicker than a dress
                        sock. These are best
                        for simple
                        giveaways, high school or college clubs, casual wear, and budget purchases. Our Dress Socks
                        are made with 80%
                        plastic,
                        18% nylon, and 2% spandex. The high-quality material used allows this to be a
                        one-size-fits-most sock. Our dress
                        socks
                        are also made using a higher gauge needle machine which allows for more complex logos and a
                        tighter knit. These
                        are best
                        for corporate sponsors, high-end giveaways, and intricate designs.
                    </div>
                </div>
            </div>
        </template>

    </div>
</template>

<script>
export default {
    name: "test_",
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
    max-width: 1080px;

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
        }


    }

}

.container {
    margin: 0 auto;

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
                margin: 0 auto;
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

                    .block-heading {
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

                        .close {
                            color: #fff;
                            font-size: 20px;

                            .close-item {
                                color: #fff;
                                font-size: 20px;
                            }
                        }

                        &:hover {
                            cursor: pointer;
                        }
                    }

                    .text {
                        width: 100%;
                        text-align: justify;
                        font-size: 12px;
                        color: #777777;
                        font-weight: 400;
                        padding: 10px;

                        display: none;
                    }
                }
            }
        }


    }
}
</style>