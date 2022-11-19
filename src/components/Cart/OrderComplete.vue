<template>
  <div class="order-complete-main-container">
    <div class="order-complete-container">
      <div class="complete-container">
        <div class="payment-section">
          <div class="payment-title">
            <h3>{{ getOrderById(orderQuantity - 1).paidMethod }}</h3>
          </div>
          <div class="payment-img">
            <img
              v-if="method === 'Direct bank transfer'"
              src="https://drive.google.com/uc?id=1Us6lCgDx_bNgo06jOaJ7xN-R38c3OAjW"
              alt=""
            />
            <img
              v-else-if="method === 'Cash on delivery'"
              src="https://drive.google.com/uc?id=1XnauZFLB37vuTW-UEMimvQh6Pq_pk0V5"
              alt=""
            />
            <img
              v-else-if="method === 'Scan QR MoMo'"
              src="https://drive.google.com/uc?id=1EfaY77upAgQgRKcxk76k1x7ZN-621kbZ"
              alt=""
            />
            <img
              v-else-if="method === 'Scan QR ShopeePay'"
              src="https://drive.google.com/uc?id=1HudiwSOX62x39o0d6mhPdNpPA0IeUbF7"
              alt=""
            />
          </div>
          <div class="receiver-infor">
            <p v-if="method === 'Cash on delivery'">
              Sender: <span>Nguyen Van An</span>
            </p>
            <p v-else-if="method === 'Direct bank transfer'">
              Account owner: <span>Nguyen Van An</span>
            </p>
            <p v-else>Receiver: <span>Nguyen Van An</span></p>
            <p v-if="method === 'Direct bank transfer'">
              Bank account: <span>ACB 5102897</span>
            </p>
            <p v-else>Phone number: <span>0123456789</span></p>
            <p>
              Payment amount:
              <span class="price">{{
                formatOriginalPrice(getOrderById(orderQuantity - 1).totalPrice)
              }}</span>
            </p>
            <p v-if="method === 'Cash on delivery'">
              Please check your phone usually after 2-3 days
            </p>
            <p v-else>
              Money transfer notes (order number):
              <span class="order-no">{{ orderQuantity - 1 }}</span>
            </p>
          </div>
          <div
            class="qr-code"
            v-if="method in ['Scan QR MoMo', 'Scan QR ShopeePay']"
          >
            <img
              src="https://drive.google.com/uc?id=1jhliXs8dGwyHzCbbVddQUHlpYfgA3nix"
              alt=""
            />
          </div>
          <div class="guide">
            <div>
              <div class="qr-icon">
                <i class="fa-solid fa-qrcode"></i>
              </div>
              <p>
                Using <span v-if="method === 'Scan QR MoMo'">Momo</span>
                <span v-else-if="(method = 'Scan QR ShopeePay')"
                  >ShopeePay</span
                >
                App to scan this above QR
              </p>
            </div>
            <div>
              <div class="qr-icon">
                <i class="fa-solid fa-chalkboard-user"></i>
              </div>
              <p>Orders will be approved and processed <span>ASAP</span></p>
            </div>
          </div>
          <div class="details-title">
            <h3>ORDER DETAILS</h3>
          </div>
          <div class="table-header">
            <h4>PRODUCT</h4>
            <h4>SUBTOTAL</h4>
          </div>
          <div class="table-content">
            <div
              class="table-item"
              v-for="(item, index) in getOrderById(orderQuantity - 1).itemList"
              :key="index"
            >
              <div class="left">
                <p>
                  {{ item.itemTitle }} <span>x {{ item.quantity }}</span>
                </p>
              </div>
              <div class="right">
                <h5>{{ formatOriginalPrice(item.price) }}</h5>
              </div>
            </div>
            <div class="table-item">
              <div class="left">
                <p>Happy Hight <span>x 1</span></p>
              </div>
              <div class="right">
                <h5>339.000đ</h5>
              </div>
            </div>
            <div class="total">
              <p>Subtotal</p>
              <h5>
                {{
                  formatOriginalPrice(
                    getOrderById(orderQuantity - 1).totalPrice + 30000
                  )
                }}
              </h5>
            </div>
            <div class="total">
              <p>Total</p>
              <h5>
                <mark>{{
                  formatOriginalPrice(
                    getOrderById(orderQuantity - 1).totalPrice
                  )
                }}</mark>
              </h5>
            </div>
            <div class="total">
              <p>Payment method:</p>
              <h5>{{ getOrderById(orderQuantity - 1).paidMethod }}</h5>
            </div>
          </div>
          <div class="details-title">
            <h3>SHIPPING INFORMATION</h3>
          </div>
          <div class="ship-content">
            <div class="ship-item">
              <p>{{ getOrderById(orderQuantity - 1).orderInfo.fullname }}</p>
              <p>{{ getOrderById(orderQuantity - 1).orderInfo.phoneNo }}</p>
              <p>{{ getOrderById(orderQuantity - 1).orderInfo.email }}</p>
              <p>
                {{
                  getOrderById(orderQuantity - 1).orderInfo.apartmentNo +
                  ", " +
                  getOrderById(orderQuantity - 1).orderInfo.street +
                  ", " +
                  getOrderById(orderQuantity - 1).orderInfo.district +
                  ", " +
                  getOrderById(orderQuantity - 1).orderInfo.ward +
                  ","
                }}
              </p>
              <p>{{ getOrderById(orderQuantity - 1).orderInfo.city }}</p>
              <p>
                <span>Order notes: </span>
                {{ getOrderById(orderQuantity - 1).orderInfo.note }}
              </p>
            </div>
          </div>
        </div>
        <div class="congra-section">
          <div class="congra-container">
            <video
              src="https://drive.google.com/uc?id=1L--1ZxYiYtmbJ3_EAMJeBYGb7pi5F9IA"
              width="130"
              height="130"
              autoplay
              muted
              preload="auto"
            ></video>
            <h4>Thank you. Your order has been received</h4>
            <ul>
              <li>
                Order number:
                <span>{{ orderQuantity - 1 }}</span>
              </li>
              <li>
                Date:
                <span>{{
                  formatISODate(getOrderById(orderQuantity - 1).createdAt)
                }}</span>
              </li>
              <li>
                Email:
                <span>{{
                  getOrderById(orderQuantity - 1).orderInfo.email
                }}</span>
              </li>
              <li>
                Total:
                <span>{{
                  formatOriginalPrice(
                    getOrderById(orderQuantity - 1).totalPrice
                  )
                }}</span>
              </li>
              <li>
                Payment method:
                <span>{{ getOrderById(orderQuantity - 1).paidMethod }}</span>
              </li>
            </ul>
            <router-link to="/">
              <button>BACK TO HOME</button>
            </router-link>
            <router-link to="/account">
              <button class="order-btn">GO TO MY ORDERS</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "OrderComplete",
  data: () => ({
    method: "",
  }),
  computed: {
    ...mapGetters({
      orderQuantity: "GET_ORDERS_QUANTITY",
      getOrderById: "GET_ORDER_ITEM_BY_ID",
      getCurrentUser: "getCurrentUser",
    }),
  },
  mounted() {
    this.method = this.getOrderById(this.orderQuantity - 1).paidMethod;
  },
  watch: {},
  methods: {
    formatOriginalPrice(value) {
      let number = value;
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(number);
    },
    formatISODate(value) {
      var d = new Date(value);
      return d.toLocaleDateString("en-GB");
    },
  },
};
</script>

<style lang="scss" scoped>
.order-complete-main-container {
  animation: fadeIn 1s ease-out;
  animation-fill-mode: backwards;
  .order-complete-container {
    max-width: 1080px;
    padding: 15px;
    padding-top: 2rem;
    margin: auto;
    box-sizing: border-box;

    .complete-container {
      display: flex;
      height: max-content;
      max-width: 1080px;
      .payment-section {
        flex: 60%;
        padding: 10px;
        display: flex;
        box-sizing: border-box;
        background-color: white;
        flex-direction: column;
        margin-right: 5px;
        box-shadow: 1px 0 5px 5px rgb(0 0 0 / 5%), 1px 2px 3px rgb(0 0 0 / 7%);
        .payment-title {
          margin: auto;
          h3 {
            font-size: 18px;
            font-weight: 600;
            margin-top: 10px;
          }
        }
        .payment-img {
          margin: auto;
          padding: 7px;
          img {
            width: 45px;
          }
        }
        .receiver-infor {
          background-color: #feefb3;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          font-size: 15px;
          p {
            margin: 10px;
            text-align: center;
            color: #ab763f;
            span {
              font-weight: 600;
            }
            .price {
              color: black;
            }
            .order-no {
              color: #f61515;
            }
          }
        }
        .qr-code {
          display: flex;
          margin: auto;
          img {
            width: 200px;
          }
        }
        .guide {
          margin: auto;
          div {
            display: flex;
            margin: auto;
            color: black;
            font-size: 15px;
            margin-bottom: 5px;
            .qr-icon {
              margin-right: 3px;
              margin-top: auto;
              margin-bottom: auto;
              svg {
                margin: auto;
                width: 15px;
              }
            }
            p {
              margin: 0 auto 0 3px;
              text-align: center;
              span {
                font-weight: 500;
              }
            }
          }
        }
        .details-title {
          margin: 20px 0 5px;
          h3 {
            font-weight: 500;
          }
        }
        .table-header {
          display: flex;
          margin-bottom: 3px;
          border-bottom: 3px solid#ececec;
          justify-content: space-between;
          h4 {
            font-size: 16;
          }
        }
        .table-content {
          border-bottom: 3px solid#ececec;
          .table-item {
            display: grid;
            grid-template-columns: 70% 30%;
            border-bottom: 1px solid #ddd;
            margin-top: 12px;

            .left {
              p {
                font-size: 14px;
                text-align: left;
                margin-bottom: 12px;
                span {
                  color: black;
                  font-weight: 500;
                }
              }
            }
            .right {
              h5 {
                color: black;
                font-size: 14px;
                font-weight: 500;
                text-align: right;
              }
            }
          }
        }
        .total {
          display: flex;
          justify-content: space-between;
          margin-top: 5px;
          p {
            margin-bottom: 0;
            font-size: 15px;
            font-weight: 500;
            color: black;
          }
          h5 {
            font-size: 15px;
            font-weight: 600;
          }
          &:last-of-type {
            h5 {
              font-weight: 500;
            }
          }
        }
        .ship-content {
          .ship-item {
            font-size: 15px;
            color: black;
          }
        }
      }
      .congra-section {
        flex: 40%;
        .congra-container {
          padding: 10px;
          display: flex;
          box-sizing: border-box;
          flex-direction: column;
          justify-content: center;
          background-color: white;
          margin-left: 5px;
          box-shadow: 1px 0 5px 5px rgb(0 0 0 / 5%), 1px 2px 3px rgb(0 0 0 / 7%);
          video {
            margin: 0 auto;
          }
          h4 {
            color: #7a9c59;
            text-align: center;
          }
          ul {
            margin: 5px 0 13px;
            position: relative;
            background-color: transparent;
            z-index: 1;
            li {
              list-style-type: "🧦";
              margin-top: 7px;
              font-size: 15px;
              span {
                font-weight: 600;
              }
            }
            &:after {
              content: "";
              z-index: -1;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-image: url("https://drive.google.com/uc?id=160_Qg0yixTCFhCi0kpJwnhYN4XNmZxlh");
              background-size: cover;

              opacity: 0.8;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            button {
              display: flex;
              justify-content: center;
              font-weight: 600;
              width: 100%;
              padding: 7px 10px;
              color: white;
              background-color: #40e0d0;
              cursor: pointer;
              transition: 0.3s ease;
              &:hover {
                box-shadow: 1px 0 5px 5px rgb(0 0 0 / 5%);
                background-color: #37c1b3;
              }
            }
            .order-btn {
              margin: 15px 0;
              background-color: #f299c2;
              &:hover {
                background-color: #fb68ac;
              }
            }
          }
        }
      }
    }
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    // transform: translateX(-150px);
  }

  100% {
    opacity: 1;
    // transform: translateX(0px);
  }
}

@media screen and (max-width: 750px) {
  .order-complete-main-container {
    .order-complete-container {
      .complete-container {
        display: flex;
        flex-direction: column-reverse;
        .payment-section {
          margin-right: 0;
        }
        .congra-section {
          margin-left: 0;
          .congra-container {
            margin-left: 0;
          }
        }
      }
    }
  }
}
</style>
