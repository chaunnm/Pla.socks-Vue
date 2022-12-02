<template>
    <div id="containerProducBlock" class="ProducBlock">
        <!-- {{ getImageProductSecond }} -->
        <!-- <div class="wrapDialog">
            <v-dialog v-model="showOverlay" transition="dialog-top-transition" max-width="900px" :opacity="0.6"
                style="z-index: 99999; position: fixed; overflow:hidden">

                <v-card>
                    <button class="btn-close" @click="showOverlay = !showOverlay">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-x">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    <div class="container-quick">
                        <div class="slider">
                            <SliderQuickView :slides='product' />
                        </div>
                        <div class="content">
                            <div class="description-container">
                                <h2>{{ getClickedProduct.itemTitle }}</h2>
                                <hr />
                                <p class="product-price">{{ formatOriginalPrice1(getProductItem[0].price) }}</p>
                                <p>{{ description }}</p>
                                <p>One size: 35-40</p>
                                <p>Height: 15cm</p>
                                <p>Thickness: Medium</p>
                                <p class="stock">
                                    <span>{{ getClickedProduct.stock }} </span> in stock
                                </p>
                                <p class="quantity">
                                    <button class="qtyminus" aria-hidden="true" @click="decreaseQuantity">
                                        &minus;
                                    </button>
                                    <input type="number" name="quantity" id="quantity" min="1"
                                        :max="getClickedProduct.stock" step="1" value="1" />
                                    <button class="qtyplus" aria-hidden="true" @click="increaseQuantity">
                                        &plus;
                                    </button>

                                    <button class="add-cart" @click="handleAddToCart">
                                        ADD TO CART
                                    </button>
                                </p>
                                <div class="product-meta">
                                    <span class="sku-wrapper">SKU: <span class="sku">HHS07-1300</span></span>

                                    <span class="posted-in">Category: <a href="" rel="tag">Socks For Summer</a></span>
                                    <br>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>

                </v-card>

            </v-dialog>

        </div> -->

        <div class="badge-circle">
            <span class="onsale"> -{{ product.sale }}% </span>
        </div>
        <div @mouseover="hover = true" @mouseout="hover = false" class="product-wrapper">
            <div class="box-image">
                <div class="image-zoom_in">
                    <router-link class="router-link" to="/product">
                        <img :src="product.image" :alt="product.itemTitle" />
                        <img :class="{ appear: hover }" class="imageZoom" :src="getProduct.image"
                            :alt="product.itemTitle" />
                    </router-link>
                </div>

                <router-link class="image-tool" :to="'/product/' + product.itemTitle" @click="showDiolog">
                    <p class="quick-view">Quick View</p>
                </router-link>
            </div>

            <div class="box-text-product">
                <div class="title-wrapper">
                    <p class="category">{{ product.category }}</p>
                    <router-link class="router-link" :to="'/product/' + product.itemTitle">
                        <p class="product-title">{{ product.itemTitle }}</p>
                    </router-link>
                </div>
                <div class="price-wrapper">
                    <div class="price">
                        <span class="price-current">
                            ₫{{ formatOriginalPrice1(product.price) }}
                        </span>
                        <span class="price-discount">
                            ₫{{
        formatOriginalPrice1(
            Math.round(
                product.price -
                (product.price * product.sale) / 100
            )
        )
                            }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { mapGetters } from 'vuex';
// import { mapGetters, mapMutations } from "vuex";
// import SliderQuickView from './SliderQuickView.vue'
export default {
    name: "ProductBlock",
    props: ["product"],
    components: {
        // SliderQuickView
    },
    data() {
        return {
            hover: false,
            showOverlay: false,
            selectedItem: 0,
            description:
                "The Socks only have one size, and are stretchy, suitable for shoes in the size range above according to EU size standards.",
        };
    },
    methods: {

        showDiolog() {
            this.showOverlay = !this.showOverlay
            // console.log("hi", this.showOverlay)
        },
        formatOriginalPrice1(number) {
            // let number = this.originalPrice;
            return new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "VND",
            }).format(number);
        },
        // decreaseQuantity() {
        //     var value = parseInt(document.getElementById("quantity").value, 10);
        //     value = isNaN(value) ? 0 : value;
        //     value < 1 ? (value = 1) : "";
        //     value--;
        //     document.getElementById("quantity").value = value;
        // },

        // increaseQuantity() {
        //     var value = parseInt(document.getElementById("quantity").value, 10);
        //     value = isNaN(value) ? 0 : value;
        //     value++;
        //     document.getElementById("quantity").value = value;
        // },
        // handleAddToCart() {
        //     var item = this.manipulateItemSelect;
        //     var value = parseInt(document.getElementById("quantity").value, 10);
        //     if (
        //         this.getClickedProduct.stock == 0 ||
        //         this.getClickedProduct.stock < value
        //     ) {
        //         this.$toast.open({
        //             message: "Not enough product items to add to cart! 😿",
        //             type: "error",
        //             duration: 2000,
        //             dismissible: true,
        //             position: "bottom",
        //         });
        //     } else {
        //         for (let index = 1; index <= value; index++) {
        //             this.$store.commit("ADD_CART_ITEM", item);
        //         }
        //         // this.ADD_CART_ITEM(item);
        //         this.getClickedProduct.stock -= value;
        //         this.$toast.open({
        //             message: "Product items added to cart successfully! 🐧",
        //             type: "success",
        //             duration: 2000,
        //             dismissible: true,
        //             position: "bottom",
        //         });
        //     }
        // },
        // onClickOutside() {
        //     this.showOverlay = false;

        // },
    },
    // watch: {
    //     showOverlay(a, b) {
    //         console.log("sau", a)
    //         console.log("truoc", b)
    //     }
    // },
    computed: {
        getProduct() {
            // console.log(this.product)
            return this.product
        },
        // getImageProductSecond() {
        //     console.log(this.product[1].image)
        //     return this.product
        // },
        // getProductItem() {
        //     return this.$store.state.productData;
        // },
        // formatOriginalPrice() {
        //     let number = this.originalPrice;
        //     return new Intl.NumberFormat("de-DE", {
        //         style: "currency",
        //         currency: "VND",
        //     }).format(number);
        // },
        // getClickedProduct() {
        //     let index = this.selectedItem;
        //     return this.getProductsSameName[index];
        // },
        // manipulateItemSelect() {
        //     var id = this.cartQuantity + 1;
        //     var itemSelect = {
        //         cardId: id,
        //         quantity: 1,
        //     };
        //     var { stock, height, thickness, ...newObj } = this.getClickedProduct;
        //     var b = { ...itemSelect, ...newObj };
        //     console.log(b);
        //     console.log("Here is " + stock + " " + height + " " + thickness);
        //     return b;
        // },
        // getProductsSameName() {
        //     return this.productItemsName("Happy High");
        // },
        // ...mapGetters({
        //     cartQuantity: "GET_CART_ITEMS",
        //     productItems: "GET_PRODUCT_ITEMS",
        //     productItemsId: "GET_PRODUCT_ITEM_BY_ID",
        //     productItemsName: "GET_PRODUCT_ITEM_BY_NAME",
        // }),
        // ...mapMutations(["ADD_CART_ITEM,"]),
    },
};
</script>

<style lang="scss" scoped>
.appear {
    display: block !important;
    animation: zoom 0.4s ease;
    //     transform: scale(1);
}

#containerProducBlock {
    .wrapDialog::v-deep .v-dialog {
        overflow: hidden;
    }


    width: 245px;
    // margin-right: 20px !important;
    position: relative;

    .badge-circle {
        position: absolute;
        left: -6px;
        top: 0;
        margin: 30px 0 0 0;
        z-index: 10000;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 40px;
        height: 40px;

        background-color: rgb(242, 153, 194);
        border-radius: 50%;
        text-align: center;

        color: #fff;
        font-weight: 550;
    }

    .product-wrapper {
        .box-image {
            position: relative;
            overflow: hidden;

            .image-zoom_in {
                position: relative;

                .router-link {
                    img {
                        width: 100%;
                    }

                    .imageZoom {
                        display: none;
                        position: absolute;
                        height: 100%;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        z-index: 99;
                    }
                }
            }

            .image-tool {
                visibility: hidden;
                z-index: 0;
                position: absolute;
                bottom: -30px;
                left: 0;
                // bottom: 0px;
                text-align: center;
                background-color: rgba(51, 167, 181, 0.8);
                width: 100%;
                font-size: 16px;
                font-weight: 500;
                padding: 4px 0;
                z-index: 100000;
                text-decoration: none;

                .quick-view {
                    color: #fff;
                    padding: 0;
                    margin: 0;
                }
            }
        }

        .box-text-product {
            z-index: 9999;
            background-color: #fff;

            .title-wrapper {
                .category {
                    color: #777;
                    font-size: 12px;
                    line-height: 1.2;
                    text-transform: uppercase;
                    margin-top: 0.1em;
                    margin-bottom: 0.1em;
                    opacity: 0.7;
                }

                .router-link {
                    text-decoration: none;
                }

                .product-title {
                    color: #919191;
                    line-height: 1.3;
                    margin-top: 0.1em;
                    margin-bottom: 0.3em;
                    font-size: 14px;

                    &:hover {
                        color: #000;
                    }
                }
            }

            .price-wrapper {
                .price {
                    line-height: 1;
                    color: #111;
                    font-size: 14px;

                    .price-current {
                        text-decoration: line-through;
                        opacity: 0.6;
                        margin-right: 0.3em;
                    }

                    .price-discount {
                        font-weight: 500;
                    }
                }
            }
        }

        &:hover .image-tool {
            cursor: pointer;
            visibility: visible;
            animation: up 0.2s linear;
            z-index: auto;
            z-index: 100000;
            bottom: 0px;
        }

        // &:hover .imageZoom {
        //     display: block;
        // }
    }

    @keyframes up {
        from {
            bottom: -20px;
            opacity: 0;
        }

        to {
            bottom: 0px;
            // opacity: 100%   ;
        }
    }

    @keyframes zoom {
        from {
            //   width: 90%;
            transform: scale(1.1);
            opacity: 0;
        }

        to {
            //   width: 100%;
            transform: scale(1);
            opacity: 1;
        }
    }
}

// Quick view
.v-overlay {
    position: relative;
}

.btn-close {
    width: 50px;
    height: 50px;

    position: absolute;
    text-align: center;
    z-index: 99;
    top: 10px;
    right: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0;
    outline: none !important;
    background-color: rgba(81, 183, 179, 1);
    color: #fff;
}

.container-quick {
    background-color: #fff;

    width: 880px;
    //   height: 500px;

    display: flex;
    justify-content: center;
    flex: row;

    .slider {
        position: relative;
        flex: 1;
    }

    .content {
        flex: 1;
        padding: 20px;
        color: #555555;

        .description-container {
            flex: 1;
            font-size: 1em !important;

            h2 {
                font-size: 1.6em !important;
                color: #555555;
                font-weight: 600;
                margin: 10px 0 15px 0;
            }

            hr {
                position: relative;
                margin: 0;
                left: 0;
                border: none;
                height: 3px;
                width: 100px;
                background-color: rgba(0, 0, 0, 0.1);
            }

            .product-price {
                font-weight: 600;
                font-size: 1.3em;
                color: black;

                span {
                    font-size: smaller !important;
                    position: relative;
                    bottom: 3px;
                    margin-right: 3px;
                }
            }

            .stock {
                font-size: 0.9em !important;
                font-weight: 500;
                color: #7a9c59;
            }

            .quantity {
                display: flex;
                flex-wrap: wrap;
                font-size: 16px;
                justify-content: left;

                label {
                    flex: 1 0 100%;
                    margin-bottom: 7px;
                }

                input {
                    width: 34px;
                    height: 40px;
                    text-align: center;
                    border: 1px solid #ddd;
                    font-family: "Montserrat", sans-serif;

                    &::-webkit-outer-spin-button,
                    &::-webkit-inner-spin-button {
                        appearance: none;
                        margin: 0;
                    }

                    &:focus {
                        box-shadow: 0 0 5px #ccc;
                    }

                    &:focus-visible {
                        outline: none;
                    }
                }

                button {
                    font-family: "Montserrat", sans-serif;
                    width: 1.8rem;
                    height: 40px;
                    color: #666;
                    background: #f9f9f9;
                    border: 1px solid #ddd;
                    cursor: pointer;
                    transition: 0.3s;

                    &:hover {
                        background-color: #c1c1c1;
                    }

                    &.qtyminus,
                    &.qtyplus {
                        z-index: 9;
                    }

                    &.add-cart {
                        margin-left: 20px;
                        width: fit-content;
                        padding: 5px 22px;
                        font-weight: 600;
                        font-size: 16px;
                        background-color: #f299c2;
                        color: white;

                        &:hover {
                            background-color: #c27a9b;
                            transition: 0.3s;
                        }
                    }
                }
            }

            .product-meta {
                display: flex;
                flex-direction: column;
                font-size: 12px;

                span {
                    padding: 5px 0px;
                    border-top: 1px dotted #ddd;
                }

                a {
                    text-decoration: none;
                    color: #777777;

                    &:hover {
                        color: #111;
                    }
                }
            }

            .social-icons {
                margin-top: 10px;
                max-width: fit-content;
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                column-gap: 10px;

                .round-circle {
                    width: 28px;
                    height: 28px;
                    border: 2px solid #919191;
                    border-radius: 50%;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: 0.3s ease-in;
                    cursor: pointer;
                    position: relative;

                    &:before {
                        content: attr(data-hover);
                        visibility: hidden;
                        opacity: 0;
                        width: max-content;
                        background-color: black;
                        font-size: 12px;
                        color: #fff;
                        text-align: center;
                        border-radius: 3px;
                        padding: 7px 7px;
                        transition: opacity 0.8s ease-in-out;
                        transition-delay: 0.2s;
                        position: absolute;
                        z-index: 1;
                        left: 50%;
                        bottom: 120%;
                        transform: translate(-50%, 0);
                    }
                }

                svg {
                    color: #919191;
                    transition: 0.3s;
                    cursor: pointer;
                }

                .facebook-share {
                    &:hover {
                        background-color: #3a589d;
                        border-color: transparent;

                        &:before {
                            opacity: 1;
                            visibility: visible;
                        }
                    }

                    &:hover svg {
                        color: white;
                    }
                }

                .twitter-share {
                    &:hover {
                        background-color: #2478ba;
                        border-color: transparent;

                        &:before {
                            opacity: 1;
                            visibility: visible;
                        }
                    }

                    &:hover svg {
                        color: white;
                    }
                }

                .email-share {
                    &:hover {
                        background-color: black;
                        border-color: transparent;

                        &:before {
                            opacity: 1;
                            visibility: visible;
                        }
                    }

                    &:hover svg {
                        color: white;
                    }
                }

                .pinterest-share {
                    &:hover {
                        background-color: #cb2320;
                        border-color: transparent;

                        &:before {
                            opacity: 1;
                            visibility: visible;
                        }
                    }

                    &:hover svg {
                        color: white;
                    }
                }

                .linkedin-share {
                    &:hover {
                        background-color: #0072b7;
                        border-color: transparent;

                        &:before {
                            opacity: 1;
                            visibility: visible;
                        }
                    }

                    &:hover svg {
                        color: white;
                    }
                }
            }
        }
    }
}
</style>
