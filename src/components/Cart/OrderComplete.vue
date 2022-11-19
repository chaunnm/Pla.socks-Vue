<template>
  <div class="order-complete-main-container">
    <div class="order-complete-container">
      <div class="complete-container">
        <div class="payment-section">
          <div class="payment-title">
            <h3>Scan QR to make payment</h3>
          </div>
          <div class="payment-img">
            <img
              src="https://drive.google.com/uc?id=1EfaY77upAgQgRKcxk76k1x7ZN-621kbZ"
              alt=""
            />
          </div>
          <div class="receiver-infor">
            <p>Receiver: <span>Nguyen Van An</span></p>
            <p>Phone number: <span>0123456789</span></p>
            <p>Payment amount: <span class="price">51.000đ</span></p>
            <p>
              Money transfer notes (order number):
              <span class="order-no">1346</span>
            </p>
          </div>
          <div class="qr-code">
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
              <p>Using <span>Momo</span> App to scan this above QR</p>
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
            <div class="table-item">
              <div class="left">
                <p>Great Horns Think Alike Junior Socks <span>x 1</span></p>
              </div>
              <div class="right">
                <h5>39.000đ</h5>
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
              <h5>339.000đ</h5>
            </div>
            <div class="total">
              <p>Total</p>
              <h5><mark>339.000đ</mark></h5>
            </div>
            <div class="total">
              <p>Payment method:</p>
              <h5>Scan QR MoMo</h5>
            </div>
          </div>
          <div class="details-title">
            <h3>SHIPPING INFORMATION</h3>
          </div>
          <div class="ship-content">
            <div class="ship-item">
              <p>Chau Dien</p>
              <p>0987654321</p>
              <p>chaudien@gmail.com</p>
              <p>KTX khu A DHQG, Linh Trung, Thu Duc</p>
              <p>TP.HCM</p>
              <p>
                <span>Order notes:</span> Lam on giao hang dung co hoi ra lay
                hang!
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
              <li>Order number: <span>1346</span></li>
              <li>Date: <span>November 30, 2022</span></li>
              <li>Email: <span>19521185@gm.uit.edu.vn</span></li>
              <li>Total: <span>51.000đ</span></li>
              <li>Payment method: <span>Scan QR MoMo</span></li>
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
export default {
  name: "OrderComplete",
  data: () => ({}),

  watch: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.order-complete-main-container {
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
