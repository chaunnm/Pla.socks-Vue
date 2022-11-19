<template>
  <div class="checkout-details-main-container">
    <div class="checkout-details-container">
      <div class="checkout-container">
        <div class="shipping-container">
          <form action="" method="post" target="temp">
            <div class="shipping-title">
              <h3>SHIPPING DETAILS</h3>
            </div>
            <div class="user-name">
              <div class="first-name-container">
                <label for="first-name">First name <span>*</span></label>
                <input
                  type="text"
                  name="first-name"
                  class="first-name-input"
                  placeholder="😎"
                  required
                />
              </div>
              <div class="last-name-container">
                <label for="last-name">Last name <span>*</span></label>
                <input
                  type="text"
                  name="last-name"
                  class="first-name-input"
                  placeholder="😎"
                  required
                />
              </div>
            </div>
            <div class="company-name">
              <div class="company-name-container">
                <label for="company-name">Company name (optional)</label>
                <input
                  type="text"
                  name="first-name"
                  class="first-name-input"
                  placeholder="🏫"
                />
              </div>
            </div>
            <div class="phone-number">
              <div class="phone-number-container">
                <label for="phone-number">Phone number <span>*</span></label>
                <input
                  type="phone"
                  name="phone-number"
                  class="phone-number-input"
                  placeholder="📲"
                  required
                />
              </div>
            </div>
            <div class="email">
              <div class="email-container">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  class="email-input"
                  placeholder="📧"
                  required
                />
              </div>
            </div>
            <div class="address-1">
              <div class="home-container">
                <label for="home-name">Apartment number <span>*</span></label>
                <input
                  type="text"
                  name="home-name"
                  class="home-name-input"
                  placeholder="🏠"
                  required
                />
              </div>
              <div class="street-container">
                <label for="street-name">Street name <span>*</span></label>
                <input
                  type="text"
                  name="street-name"
                  class="street-name-input"
                  placeholder="🚵‍♀️"
                  required
                />
              </div>
            </div>
            <div class="address-2">
              <div class="district-container">
                <label for="district-name">District <span>*</span></label>
                <input
                  type="text"
                  name="district-name"
                  class="streedistrictt-name-input"
                  placeholder="🏇"
                  required
                />
              </div>
              <div class="ward-container">
                <label for="ward-name">Ward / Commune <span>*</span></label>
                <input
                  type="text"
                  name="ward-name"
                  class="ward-name-input"
                  placeholder="🚣"
                  required
                />
              </div>
            </div>
            <div class="address-3">
              <div class="city-container">
                <label for="city-name">City / Province <span>*</span></label>
                <input
                  type="text"
                  name="city-name"
                  class="city-name-input"
                  placeholder="🏙️"
                  required
                />
              </div>
            </div>
            <div class="additional-title">
              <h4>ADDITIONAL INFORMATION</h4>
            </div>
            <div class="order-note">
              <div class="note-container">
                <label for="order-note">Order notes (optional) </label>
                <textarea
                  placeholder="Notes about your order, e.g. special notes for delivery"
                  rows="4"
                  name="order-note"
                  class="note-input"
                >
                </textarea>
              </div>
            </div>
          </form>
        </div>
        <div class="order-container">
          <div class="order-title">
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
            <div class="subtotal">
              <p>SUBTOTAL</p>
              <h5>339.000đ</h5>
            </div>
            <div class="total">
              <p>TOTAL</p>
              <h5><mark>339.000đ</mark></h5>
            </div>
          </div>
          <div class="payment-title">
            <h4>PAYMENT METHOD</h4>
          </div>
          <div class="payment-radio">
            <div class="bank-container">
              <input
                type="radio"
                id="bank"
                name="payment"
                value="Direct bank transfer"
              />
              <label for="bank">Direct bank transfer</label><br />
              <img
                src="https://drive.google.com/uc?id=1Us6lCgDx_bNgo06jOaJ7xN-R38c3OAjW"
                alt=""
              />
            </div>
            <p class="description">
              Make your payment directly into our bank account
            </p>
            <div class="cod-container">
              <input
                type="radio"
                id="cod"
                name="payment"
                value="Cash on delivery"
              />
              <label for="cod">Cash on delivery</label><br />
              <img
                src="https://drive.google.com/uc?id=1XnauZFLB37vuTW-UEMimvQh6Pq_pk0V5"
                alt=""
              />
            </div>
            <p class="description">
              Make your payment just after you received package
            </p>
            <div class="momo-container">
              <input
                type="radio"
                id="momo"
                name="payment"
                value="Scan QR MoMo"
              />
              <label for="momo">Scan QR MoMo</label>
              <img
                src="https://drive.google.com/uc?id=1EfaY77upAgQgRKcxk76k1x7ZN-621kbZ"
                alt=""
              />
            </div>
            <p class="description">
              Using Momo Mobile App to make your payment
            </p>
            <div class="shopee-container">
              <input
                type="radio"
                id="shopeepay"
                name="payment"
                value="Scan QR ShopeePay"
              />
              <label for="shopeepay">Scan QR ShopeePay</label>
              <img
                src="https://drive.google.com/uc?id=1HudiwSOX62x39o0d6mhPdNpPA0IeUbF7"
                alt=""
              />
            </div>
            <p class="description">
              Using Momo Mobile App to make your payment
            </p>
          </div>
          <div class="policy-title">
            <h4>POLICY</h4>
          </div>
          <div class="policy">
            <ul>
              <li>
                <router-link to="/"> Private Policy </router-link>
              </li>
              <li>
                <router-link to="/"> Return Policy </router-link>
              </li>
            </ul>
          </div>
          <div class="accept-policy">
            <input type="checkbox" id="accept" name="accept" value="true" />
            <label for="accept">
              I have read those policies and accept them</label
            >
          </div>
          <div class="place-order" @click="handleClickContinue()">
            <button type="submit">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutDetails",
  data: () => ({}),

  watch: {},
  methods: {
    handleClickContinue() {
      this.$emit("changeToComplete", 3);
    },
  },
};
</script>

<style lang="scss" scoped>
.checkout-details-main-container {
  .checkout-details-container {
    max-width: 1080px;
    padding: 15px;
    padding-top: 2rem;
    margin: auto;
    box-sizing: border-box;

    .checkout-container {
      display: flex;
      height: max-content;
      max-width: 1080px;
      .shipping-container {
        flex: 67.5%;
        padding: 10px;
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        box-shadow: 1px 0 5px 5px rgb(0 0 0 / 5%), 1px 2px 3px rgb(0 0 0 / 7%);
        .shipping-title {
          padding: 10px;
          padding-left: 0;
          h3 {
            text-align: left;
            color: #555;
            font-weight: 500;
          }
        }

        label {
          color: black;
          font-weight: 500;
          font-size: 14px;
          padding-bottom: 2px;
          span {
            color: rgb(179, 0, 0);
          }
        }

        input,
        textarea {
          background-color: white;
          padding: 6px;
          padding-left: 8px;
          border: 1px solid #ddd;
          outline: none;
          border-radius: 2px;
          transition: 0.5s ease;
          color: #265b59;
          font-weight: 600;
          font-size: 15.5px;
          &:focus {
            border-color: rgb(173, 173, 173);
            box-shadow: 1px 0 5px 5px rgb(0 0 0 / 5%);
          }
          &:hover {
            &::placeholder {
              color: transparent;
            }
          }
          &::placeholder {
            font-weight: 400;
            opacity: 0.8;
            font-size: 16px;
            transition: 0.6s ease;
          }
        }
        textarea {
          font-style: italic;
          font-weight: 500;
          &::placeholder {
            font-size: 14px;
          }
        }
        .user-name {
          // display: flex;
          display: grid;
          grid-template-columns: auto auto;
          column-gap: 10px;
          margin-top: 5px;

          .first-name-container {
            // flex: 1;
            display: flex;
            flex-direction: column;
          }
          .last-name-container {
            // flex: 1;
            display: flex;
            flex-direction: column;
          }
        }
        .company-name {
          display: flex;
          // display: grid;
          // grid-template-columns: auto auto;
          // column-gap: 10px;
          margin-top: 8px;
          .company-name-container {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
        }
        .phone-number {
          display: flex;
          // display: grid;
          // grid-template-columns: auto auto;
          // column-gap: 10px;
          margin-top: 8px;
          input {
            color: #3a3a3a;
          }
          .phone-number-container {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
        }
        .email {
          display: flex;
          // display: grid;
          // grid-template-columns: auto auto;
          // column-gap: 10px;
          margin-top: 8px;
          input {
            color: #3a3a3a;
          }
          .email-container {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
        }

        .address-1 {
          // display: flex;
          display: grid;
          grid-template-columns: 35% auto;
          column-gap: 10px;
          margin-top: 8px;
          input {
            color: #f299c2;
          }
          .home-container {
            // flex: 1;
            display: flex;
            flex-direction: column;
          }
          .street-container {
            // flex: 1;
            display: flex;
            flex-direction: column;
          }
        }
        .address-2 {
          // display: flex;
          display: grid;
          grid-template-columns: auto auto;
          column-gap: 10px;
          margin-top: 8px;
          input {
            color: #f299c2;
          }
          .district-container {
            // flex: 1;
            display: flex;
            flex-direction: column;
          }
          .ward-container {
            // flex: 1;
            display: flex;
            flex-direction: column;
          }
        }
        .address-3 {
          display: flex;
          // display: grid;
          // grid-template-columns: auto auto;
          // column-gap: 10px;
          margin-top: 8px;
          input {
            color: #f299c2;
          }
          .city-container {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
        }
        .additional-title {
          margin-top: 5px;
          h4 {
            font-weight: 500;
          }
        }
        .order-note {
          display: flex;
          // display: grid;
          // grid-template-columns: auto auto;
          // column-gap: 10px;
          margin-top: 8px;
          input {
            color: #7a9c59;
          }
          .note-container {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
        }
      }
      .order-container {
        border: 2px solid #4db7b3;
        padding: 10px;
        flex: 33.5%;
        box-shadow: 1px 0 5px 5px rgb(0 0 0 / 5%), 1px 2px 3px rgb(0 0 0 / 7%);
        margin-left: 10px;
        .order-title {
          padding: 10px;
          padding-left: 0;
          h3 {
            text-align: left;
            color: #555;
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
                text-align: right;
              }
            }
          }
          .subtotal {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            color: rgb(77, 77, 77);
            p {
              font-size: 17px;
            }
            h5 {
              font-weight: 500;
              font-size: 17px;
            }
          }
          .total {
            display: flex;
            justify-content: space-between;
            color: rgb(77, 77, 77);
            p {
              font-size: 17px;
              font-weight: 500;
            }
            h5 {
              font-weight: 700;
              font-size: 17px;
            }
          }
        }
        .payment-title {
          h4 {
            padding: 10px 0;
          }
        }
        .payment-radio {
          display: flex;
          flex-direction: column;

          input[name="payment"] {
            border-radius: 50%;
            appearance: none;
            position: relative;
            top: 5px;
            right: 0;
            bottom: 0;
            left: 0;
            height: 18px;
            width: 18px;
            transition: all 0.3s ease-out 0s;
            background: #cbd1d8;
            border: none;
            color: #fff;
            cursor: pointer;
            display: inline-block;
            margin-right: 0.5rem;
            outline: none;
            position: relative;
            z-index: 1000;
            transition: 0.5 ease;
            &:after {
              border-radius: 50%;
            }
            &:hover {
              background: #9faab7;
            }
            &:checked {
              background: #40e0d0;
              &:before {
                width: 18px;
                height: 18px;
                display: flex;
                content: "✓";
                font-size: 10px;
                line-height: 15px;
                font-weight: bold;
                position: absolute;
                align-items: center;
                justify-content: center;
              }
              &:after {
                animation: click-wave 0.65s;
                background: #40e0d0;
                content: "";
                display: block;
                position: relative;
                z-index: 100;
              }
            }
            @keyframes click-wave {
              0% {
                height: 18px;
                width: 18px;
                opacity: 0.35;
                position: relative;
              }
              100% {
                height: 50px;
                width: 50px;
                margin-left: -15px;
                margin-top: -15px;
                opacity: 0;
              }
            }
          }
          label {
            font-weight: 500;
            color: black;
            font-size: 15px;
            margin: auto 0;
            cursor: pointer;
            display: block;
          }
          img {
            width: 40px;
            margin-left: 10px;
          }
          .description {
            font-size: 12px;
            margin-left: 27px;
            padding: 5px 0;
            margin-bottom: 10px;
            position: relative;
            &::before {
              content: "";
              position: absolute;
              height: 2px;
              background-color: #4db7b3;
              width: 30%;
              bottom: 0;
              left: 0;
            }
            &:last-of-type {
              &::before {
                height: 2.5px;
              }
            }
          }
          .bank-container {
            display: flex;
          }
          .cod-container {
            display: flex;
          }
          .momo-container {
            display: flex;
            input {
              top: 8px;
            }
            img {
              width: 35px;
            }
          }
          .shopee-container {
            display: flex;
            input {
              top: 8px;
            }
            img {
              width: 35px;
            }
          }
        }
        .policy-title {
          h4 {
            padding-bottom: 7px;
          }
        }
        .policy {
          margin-bottom: 7px;
          ul {
            display: flex;
            justify-content: space-evenly;
            list-style: none;
            list-style-type: none;
            padding: 0;
            a {
              text-decoration: none;
              color: normal;
              font-size: 15px;
            }
          }
        }
        .accept-policy {
          // input {
          //   accent-color: pink;
          //   font-size: 20px;
          //   &:hover {
          //     cursor: pointer;
          //   }
          // }
          input {
            appearance: none;
            position: relative;
            top: 5px;
            right: 0;
            bottom: 0;
            left: 0;
            height: 18px;
            width: 18px;
            transition: all 0.3s ease-out 0s;
            background: #cbd1d8;
            border: none;
            color: #fff;
            cursor: pointer;
            display: inline-block;
            margin-right: 0.5rem;
            outline: none;
            position: relative;
            z-index: 1000;
            &:hover {
              background: #9faab7;
            }
            &:checked {
              background: #40e0d0;
              &:before {
                width: 18px;
                height: 18px;
                display: flex;
                content: "✓";
                font-size: 15px;
                line-height: 15px;
                font-weight: bold;
                position: absolute;
                align-items: center;
                justify-content: center;
                font-family: "Font Awesome 5 Free";
              }
              &:after {
                animation: click-wave 0.65s;
                background: #40e0d0;
                content: "";
                display: block;
                position: relative;
                z-index: 100;
              }
            }
          }
          @keyframes click-wave {
            0% {
              height: 18px;
              width: 18px;
              opacity: 0.35;
              position: relative;
            }
            100% {
              height: 50px;
              width: 50px;
              margin-left: -15px;
              margin-top: -15px;
              opacity: 0;
            }
          }
        }
        label {
          font-size: 14px;
          font-style: italic;
          cursor: pointer;
        }
      }
      .place-order {
        margin-top: 3px;
        button {
          width: 100%;
          padding: 7px 10px;
          color: white;
          font-size: 17px;
          font-weight: 600;
          background-color: #f299c2;
          transition: 0.3s ease;
          &:hover {
            box-shadow: 1px 0 5px 5px rgb(0 0 0 / 5%);
            background-color: #fb68ac;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .checkout-details-main-container {
    .checkout-details-container {
      .checkout-container {
        flex-direction: column;
        .order-container {
          margin-left: 0;
          margin-top: 16px;
        }
      }
    }
  }
}
@media screen and (max-width: 481px) {
  .checkout-details-main-container {
    .checkout-details-container {
      .checkout-container {
        .shipping-container {
          .user-name {
            display: flex;
            flex-direction: column;
          }
          .address-1 {
            display: flex;
            flex-direction: column;
          }
          .address-2 {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
}
</style>
