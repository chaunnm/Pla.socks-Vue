<template>
  <div class="main-container">
    <div class="header-title">
      <v-icon class="icon-title">mdi-cube</v-icon>
      Order History
    </div>
    <v-divider class="mb-6 mt-2"></v-divider>
    <div v-for="item in orderData" :key="item.id">
      <div class="container-item mb-4">
        <div class="order-item-container">
          <div class="order-item-header">
            <div class="order-item-header-left">Order {{ item.id }}</div>
            <div class="order-item-header-right">
              <span>Total: {{ item.price }} vnđ </span>
              <!-- <div></div> -->
              <span>Mangage Order</span>
            </div>
          </div>
          <div class="order-item-body">
            <div class="order-item-body-left">
              <div class="title-top">Product</div>
              <div class="left-content">
                <img :src="item.images" alt="product" />
                <div>
                  <span>{{ item.name }}</span>
                  <span>Quantity: {{ item.amount }}</span>
                </div>
              </div>
            </div>
            <div class="order-item-body-middle">
              <div class="title-top">Shipping Info</div>
              <div class="middle-content">
                {{ item.address }} <br />
                {{ item.phone }}
              </div>
            </div>
            <div class="order-item-body-right">
              <div class="title-top">Package Status</div>
              <div class="middle-order">
                <div class="middle-order-item">
                  <span> Confirmed </span>
                  <img src="https://i.imgur.com/rcc0rRi.png" alt="Confirm" />
                </div>
                <div class="middle-order-item">
                  <span> Shipped </span>
                  <img src="https://i.imgur.com/QQY8n8Z.png" alt="Shipped" />
                </div>
                <div class="middle-order-item">
                  <span> Delivered </span>
                  <img src="https://i.imgur.com/vsQVae9.png" alt="Delivered" />
                </div>
              </div>
              <div class="right-content">
                <div class="tranking-order font-weight-bold">Tracking Order</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrdersComponents",
  data: () => ({
    orderData: [
      {
        id: "#123wertrty",
        images:
          "https://cdn.shopify.com/s/files/1/1781/5821/products/Hands_across_calves_1.jpg?v=1633433719&width=1445",
        name: "Hight Knee",
        amount: 1,
        address: "Phường Linh Trung Thủ Đức , TP HCM",
        phone: "05455645",
        price: 99000,
      },
      {
        id: "#456wertrty",
        images:
          "https://cdn.shopify.com/s/files/1/0187/0608/products/01_tL_wfsRedStripe_1600x.jpg?v=1662055077",
        name: "Great Horns",
        amount: 2,
        address: "Phường Linh Trung Thủ Đức , TP HCM",
        phone: "054566745",
        price: 25000,
      },
      {
        id: "#789wertrty",
        images:
          "https://cdn.shopify.com/s/files/1/0979/3104/products/MultiColorFootAlignmentSocks_b2e466f6-517f-4809-916e-1faa58b026d4.jpg?v=1628533087",
        name: "Short Sock",
        amount: 2,
        address: "Phường Linh Trung Thủ Đức , TP HCM",
        phone: "054566745",
        price: 65000,
      },
    ],
  }),
};
</script>

<style lang="scss" scoped src="./Orders.scss"></style>
