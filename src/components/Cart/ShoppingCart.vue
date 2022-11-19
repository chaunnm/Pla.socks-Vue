<template>
  <div class="shopping-cart-main-container">
    <div class="shopping-cart-container" v-if="quantity > 0">
      <div class="cart-container">
        <div class="products-container">
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th class="product-name" colspan="3">Product</th>
                  <th class="product-price">Price</th>
                  <th class="product-quantity">Quantity</th>
                  <th class="product-subtotal">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <ShoppingCartItemVue
                  v-for="(item, index) in cartItems"
                  :key="index"
                  :cartItem="item"
                />
              </tbody>
            </table>
          </div>
        </div>
        <div class="cart-total-container">
          <div class="total-container">
            <div class="cart-total-title">
              <i class="fa-solid fa-basket-shopping"></i>
              <h3>CART TOTALS</h3>
            </div>
            <div class="sub-total-container price-container">
              <div class="sub-total-title left">Subtotal:</div>
              <div class="sub-total-price right">
                {{ formatOriginalPrice(totalPrice) }}
              </div>
            </div>
            <div class="shipment-fee-container price-container">
              <div class="shipment-fee-title left">Shipment fee:</div>
              <div class="shipment-fee-price right">
                {{ formatOriginalPrice(fee) }}
              </div>
            </div>
            <div class="coupon-title">
              <i class="fa-solid fa-ticket"></i>
              <h3>Coupon</h3>
            </div>
            <input
              type="text"
              v-model.lazy="enteredCoupon"
              class="coupon-enter"
              placeholder="Enter coupon 🎫 (optional)"
            />
            <v-btn tile class="coupon-apply" @click="handleApplyCoupon()"
              >Apply</v-btn
            >
            <div class="minus-container price-container">
              <div class="minus-title left">Minus</div>
              <div class="minus-price right">
                -{{
                  formatOriginalPrice(totalPrice * sale + totalPrice * shipping)
                }}
              </div>
            </div>
            <div class="total-price-container price-container">
              <div class="total-price-title left">Total fee:</div>
              <div class="total-price-price right">
                {{
                  formatOriginalPrice(
                    totalPrice -
                      (totalPrice * sale + totalPrice * shipping) +
                      fee
                  )
                }}
              </div>
            </div>
            <div class="proceed-btn-container" @click="handleClickContinue()">
              <button class="proceed-btn">PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="empty-cart-container" v-else>
      <div class="empty-img">
        <img
          src="https://drive.google.com/uc?id=1fSAX37sRXof2KFwFhxw5dBNvb3GJu3aa"
          alt=""
        />
      </div>
      <div class="epmty-text">
        <h3>Oops...! Thers is nothing in your cart.</h3>
        <div>
          <router-link to="/shop" class="shop-link">
            <button>VISIT SHOP</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ShoppingCartItemVue from "./ShoppingCartItem.vue";

export default {
  name: "ShoppingCart",
  components: {
    ShoppingCartItemVue,
  },
  data: () => ({
    sale: 0,
    shipping: 0,
    fee: 30000,
    subtotal: 0,
    total: 0,
    isValid: false,
    enteredCoupon: "",
    temp: "",
  }),
  methods: {
    formatOriginalPrice(value) {
      let number = value;
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(number);
    },
    handleClickContinue() {
      this.$emit("changeToDetail", 2);
    },
    handleApplyCoupon() {
      if (this.checkCoupon(this.enteredCoupon).length === 0) {
        this.$toast.open({
          message:
            "🤔 Hmm. Seems like your coupon is not available in Pla.Socks 😶",
          type: "error",
          duration: 2000,
          dismissible: true,
          position: "bottom",
        });
      } else {
        const temp = this.checkCoupon(this.enteredCoupon)[0];
        const timeElapsed = Date.now();
        const temp1 = new Date(timeElapsed);
        const temp2 = new Date(temp.expiredAt);
        if (temp2 - temp1 >= 0) {
          this.shipping = temp.ship;
          this.sale = temp.sale;
          this.isValid = true;
          this.$toast.open({
            message: "🎉 Yay, you applied sale coupon successfully 🎆",
            type: "success",
            duration: 2000,
            dismissible: true,
            position: "bottom",
          });
        } else {
          this.$toast.open({
            message: "🥺 Sorry. Your coupon is invalid at the moment 🤒",
            type: "error",
            duration: 2000,
            dismissible: true,
            position: "bottom",
          });
        }
      }
    },
  },
  watch: {
    isValid(value) {
      if (value === true) {
        this.$store.commit(
          "SET_CURRENT_COUPON",
          this.checkCoupon(this.enteredCoupon)[0]
        );
      }
    },
  },
  computed: {
    ...mapGetters({
      quantity: "GET_CART_QUANTITY",
      cartItems: "GET_CART_ITEMS",
      totalPrice: "GET_CART_PRICE",
      checkCoupon: "GET_COUPON_ITEM_BY_CODE",
    }),
    ...mapMutations(["SET_CURRENT_COUPON"]),
  },
};
</script>

<style lang="scss" scoped>
.shopping-cart-main-container {
  animation: moveInright 1s ease-out;
  animation-fill-mode: backwards;
  .shopping-cart-container {
    max-width: 1080px;
    padding: 15px;
    padding-top: 2rem;
    margin: auto;
    box-sizing: border-box;

    .cart-container {
      display: flex;
      // grid-template-columns: 67.5% 33.5%;
      height: max-content;
      max-width: 1080px;
      .products-container {
        flex: 67.5%;
        box-shadow: 1px 0 5px 5px rgb(0 0 0 / 5%), 1px 2px 3px rgb(0 0 0 / 7%);
        .table-wrapper {
          display: flex;
          width: 100%;
          table {
            border-collapse: collapse;
            width: 100%;
            margin: 15px;
            box-sizing: border-box;
            table-layout: auto;

            thead {
              tr {
                th {
                  padding: 10px 0 15px;
                  text-align: center;
                  font-weight: 700;
                  border-bottom: 1px solid #666;
                }
                .product-name {
                  text-align: left;
                  width: 52%;
                }
                .product-price {
                  width: 12%;
                }
                .product-quantity {
                  width: 19%;
                }
                .product-subtotal {
                  width: 17%;
                  text-align: right;
                }
              }
            }
          }
        }
      }
      .cart-total-container {
        flex: 33.5%;
        box-shadow: 1px 0 5px 5px rgb(0 0 0 / 5%), 1px 2px 3px rgb(0 0 0 / 7%);
        margin-left: 10px;
        .total-container {
          padding: 15px;
          box-sizing: border-box;
          .cart-total-title {
            padding: 0.3rem 0;
            background-color: #4db7b3;
            display: flex;
            color: white;
            svg {
              font-size: 18px;
              margin-top: auto;
              margin-bottom: auto;
              color: white;
              padding-left: 10px;
            }
            h3 {
              margin-top: auto;
              margin-bottom: auto;
              margin-left: 10px;
              text-align: left;
              color: white;
              font-weight: 600;
            }
          }
          .price-container {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            margin-top: 10px;
            border-bottom: 1px dashed black;
            .right {
              color: rgb(8, 8, 8);
              font-weight: 500;
            }
          }
          .coupon-title {
            padding: 0.2rem 0;
            display: flex;
            background-color: #4db7b4d8;
            margin-top: 15px;
            svg {
              font-size: 14px;
              margin-top: auto;
              margin-bottom: auto;
              color: white;
              padding-left: 10px;
            }
            h3 {
              margin-top: auto;
              margin-bottom: auto;
              margin-left: 10px;
              text-align: left;
              color: white;
              font-size: 16px;
              font-weight: 500;
            }
          }
          .coupon-enter {
            border-radius: 5px;
            width: 100%;
            background-color: white;
            box-shadow: 1px 0 5px 5px rgb(0 0 0 / 5%),
              1px 2px 3px rgb(0 0 0 / 7%);
            padding: 10px 10px;
            outline: none;
            font-family: inherit;
            margin: 10px 0;
            font-size: 15px;
            font-weight: 600;
            &::placeholder {
              font-size: 14px;
              font-weight: 500;
              opacity: 0.5;
              font-family: "Trebuchet MS", "Lucida Sans Unicode",
                "Lucida Grande", "Lucida Sans", Arial, sans-serif;
            }
          }
          .coupon-apply {
            border: none;
            color: white;
            font-size: 14px;
            // border-radius: 3px;
            background-color: #4db7b4d8;
            display: flex;
            margin: auto;
            padding: 0px 10px;
            height: 30px;
          }
          .minus-container {
            margin-top: 0;
          }
          .total-price-container {
            color: black;
            .total-price-title {
              font-weight: 500;
            }
            .total-price-price {
              font-weight: 700;
            }
          }

          .proceed-btn-container {
            .proceed-btn {
              border: none;
              box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
                0px 2px 2px 0px rgb(0 0 0 / 14%),
                0px 1px 5px 0px rgb(0 0 0 / 12%);
              color: white;
              width: 100%;
              text-align: center;
              padding: 7px 0;
              background-color: #f29dc4;
              font-weight: 600;
              margin-top: 15px;
              transition: 0.3s ease;
              &:hover {
                opacity: 0.9;
              }
            }
          }
        }
      }
    }
  }
  .empty-cart-container {
    max-width: 1080px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;

    .empty-img {
      margin: auto;
      img {
        width: 25vw;
        margin: auto;
      }
    }
    .epmty-text {
      h3 {
        text-align: center;
        font-size: 20px;
      }
      div {
        display: flex;
        margin: 10px 0;
        .shop-link {
          text-decoration: none;
          margin: auto;
          button {
            text-align: center;
            background-color: #4db7b3;
            color: #333;
            font-weight: 700;
            padding: 7px 10px;
            box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
              0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
            transition: 0.3s ease;
            &:hover {
              background-color: #4db7b4dc;
              color: rgb(72, 72, 72);
            }
          }
        }
      }
    }
  }
}

@keyframes moveInright {
  0% {
    opacity: 0;
    transform: translateX(-150px);
  }

  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

@media screen and (max-width: 825px) {
  .shopping-cart-main-container {
    .shopping-cart-container {
      .cart-container {
        display: block;
        .cart-total-container {
          margin-left: 0;
          .total-container {
            .proceed-btn-container {
              display: flex;
              .proceed-btn {
                width: fit-content;
                padding-left: 12px;
                padding-right: 12px;
                margin: 15px auto;
              }
            }
          }
        }
      }
    }
    .empty-cart-container {
      .empty-img {
        img {
          width: 40vw;
        }
      }
    }
  }
}
@media screen and (max-width: 555px) {
  .shopping-cart-main-container {
    .shopping-cart-container {
      .breadscrumb-container {
        display: none;
      }

      .cart-container {
        .products-container {
          .table-wrapper {
            table {
              thead {
                tr {
                  .product-name {
                    width: 75%;
                  }
                  .product-price {
                    display: none;
                  }
                  .product-quantity {
                    width: 25%;
                    text-align: right;
                  }
                  .product-subtotal {
                    display: none;
                  }
                }
              }
            }
          }
        }
      }
    }
    .empty-cart-container {
      .empty-img {
        img {
          width: 60vw;
        }
      }
    }
  }
}
</style>
