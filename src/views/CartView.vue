<template>
  <div class="cart-container">
    <div class="breadscrumb-container">
      <div class="text-breadscrumb-container">
        <h2
          class="shopping-cart"
          :class="currentPage === 1 ? 'here' : 'nothere'"
        >
          Shopping Cart
        </h2>
        <i class="fa-solid fa-angles-right"></i>
        <h2
          class="checkout-details"
          :class="currentPage === 2 ? 'here' : 'nothere'"
        >
          Checkout Details
        </h2>
        <i class="fa-solid fa-angles-right"></i>
        <h2
          class="order-complete"
          :class="currentPage === 3 ? 'here' : 'nothere'"
        >
          Order Complete
        </h2>
      </div>
      <div class="step-progress-bar-container">
        <div id="progress"></div>
        <div class="circle">
          <img
            id="cart-status"
            src="https://drive.google.com/uc?id=1kLApJzJIcOmnSnn7QPc0cl6i61yTI1PY"
            alt=""
          />
        </div>
        <div class="circle">
          <img
            id="detail-status"
            src="https://drive.google.com/uc?id=1TNJYKNuwjf1dop-UWyMS6aglByfHrETz"
            alt=""
          />
        </div>
        <div class="circle">
          <img
            id="complete-status"
            src="https://drive.google.com/uc?id=1t97f7RBq2yiPSZTwTRhecln3clMieYJ7"
            alt=""
          />
        </div>
      </div>
    </div>
    <ShoppingCart
      v-if="currentPage === 1"
      @changeToDetail="continueTo($event)"
    />
    <CheckoutDetailsVue
      v-else-if="currentPage === 2"
      @changeToComplete="continueTo($event)"
    />
    <OrderCompleteVue v-else-if="currentPage === 3" />
  </div>
</template>

<script>
import ShoppingCart from "@/components/Cart/ShoppingCart.vue";
import CheckoutDetailsVue from "@/components/Cart/CheckoutDetails.vue";
import OrderCompleteVue from "@/components/Cart/OrderComplete.vue";

export default {
  name: "CartView",
  data: () => ({
    cart: false,
    detail: false,
    complete: false,
    currentPage: 1,
  }),
  components: {
    ShoppingCart,
    CheckoutDetailsVue,
    OrderCompleteVue,
  },
  methods: {
    handleClick1() {
      this.cart = true;
      this.detail = false;
      this.complete = false;
    },
    continueTo(value) {
      this.currentPage = value;
    },
  },
  mounted() {
    if (this.currentPage === 1) {
      this.cart = true;
    }
    // else if (this.currentPage === 2) {
    //   this.cart = true;
    //   this.detail = true;
    //   this.complete === true;
    // } else if (this.currentPage === 3) {
    //   this.cart = true;
    //   this.detail = true;
    //   this.complete === true;
    // }
  },
  watch: {
    currentPage(value) {
      if (value === 1) {
        this.cart = true;
        this.complete = false;
        this.detail = false;
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (value === 2) {
        this.cart = true;
        this.complete = false;
        this.detail = true;
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        this.cart = true;
        this.complete = true;
        this.detail = true;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    cart(value) {
      if (value === true) {
        document.querySelectorAll(".circle")[0].classList.add("active");
        document.getElementById("cart-status").style.filter = "grayscale(0%)";
      } else {
        document.querySelectorAll(".circle")[0].classList.remove("active");
        document.getElementById("cart-status").style.filter = "grayscale(100%)";
      }
    },
    detail(value) {
      if (value === true) {
        document.querySelectorAll(".circle")[1].classList.add("active");
        document.getElementById("progress").style.width = "50%";
        document.getElementById("detail-status").style.filter = "grayscale(0%)";
      } else {
        document.querySelectorAll(".circle")[1].classList.remove("active");
        document.getElementById("progress").style.width = "10%";
        document.getElementById("detail-status").style.filter =
          "grayscale(100%)";
      }
    },
    complete(value) {
      if (value === true) {
        document.querySelectorAll(".circle")[2].classList.add("active");
        document.getElementById("progress").style.width = "98%";
        document.getElementById("complete-status").style.filter =
          "grayscale(0%)";
      } else {
        document.getElementById("progress").style.width = "50%";
        document.querySelectorAll(".circle")[2].classList.remove("active");
        document.getElementById("complete-status").style.filter =
          "grayscale(100%)";
      }
    },
    $route(to) {
      console.log(to);
      this.currentPage = 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-container {
  .breadscrumb-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .text-breadscrumb-container {
      display: flex;
      justify-content: center;
      margin-top: 10px;
      svg {
        color: #777;
        width: 12px;
        margin: auto 0.7rem;
        font-weight: 300;
      }
      h2 {
        font-weight: 400;
        font-size: 22px;
      }
      .here {
        color: black !important;
        font-weight: 600;
      }
      .nothere {
        color: #777;
        font-weight: 400;
      }
      .shopping-cart {
        color: #777;
      }
      .checkout-details {
        color: #777;
      }
      .order-complete {
        color: #777;
      }
    }
    .step-progress-bar-container {
      text-align: center;
      display: flex;
      justify-content: space-between;
      position: relative;
      max-width: 1080px;
      width: 680px;
      z-index: 2;
      margin: 20px auto;

      img {
        width: 50px;
        transition: 0.4s ease;
        filter: grayscale(100%);
      }
      &::before {
        content: "";
        background-color: #666;
        position: absolute;
        top: 50%;
        left: 1%;
        right: 2%;
        transform: translateY(-50%);
        height: 3px;
        width: 98%;
        z-index: 0;
        transition: 0.4s ease;
      }
      #progress {
        background-color: #4db7b3;
        position: absolute;
        top: 50%;
        left: 1%;
        right: 2%;
        transform: translateY(-50%);
        height: 3px;
        width: 0%;
        z-index: 0;
        transition: 0.4s ease;
      }
      .circle {
        background-color: white;
        color: #999;
        border-radius: 50%;
        height: 70px;
        width: 70px;
        border: 3px solid #666;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.6s ease;
        z-index: 2;
        &.active {
          border-color: #4db7b3;
        }
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .breadscrumb-container {
    zoom: 0.8;
  }
}

@media screen and (max-width: 560px) {
  .breadscrumb-container {
    .step-progress-bar-container {
      zoom: 0.5;
    }
  }
}
</style>
