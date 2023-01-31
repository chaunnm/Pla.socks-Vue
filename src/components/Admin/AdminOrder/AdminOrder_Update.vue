<template>
  <div class="Order-update-container">
    <div class="content">
      <h2 class="title">Order ID <span>BT0100101</span> Detail</h2>
      <div class="line"></div>
      <div class="row">
        <div class="col-left">
          <table>
            <tr>
              <td>Booking Date:</td>
              <td><input type="text" value="08/05/2022" /></td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>
                <div class="select">
                  <select>
                    <option value="Delivering">Delivering</option>
                    <option value="Processing">Processing</option>
                    <option value="Canceled">Canceled</option>
                  </select>
                  <v-icon class="icon-select"> fa-caret-down </v-icon>
                </div>
              </td>
            </tr>
            <tr>
              <td>Payment:</td>
              <td>Cash on delivery</td>
            </tr>
          </table>
        </div>
        <div class="col-right">
          <h3 class="shipping-infor">Shipping Information</h3>
          <div class="row-item">
            <v-icon class="row-item-icon"> fa-location-dot </v-icon>
            <span>Town 6, Linh Trung, Thu Duc</span>
          </div>
          <div class="row-item">
            <v-icon class="row-item-icon"> fa-phone-volume </v-icon>
            <span>0123.456.789</span>
          </div>
          <div class="row-item">
            <v-icon class="row-item-icon"> fa-envelope </v-icon>
            <span>aaaa@gmail.com</span>
          </div>
          <div class="row-item">
            <v-icon class="row-item-icon"> mdi-pencil </v-icon>
            <span>Edit</span>
          </div>
        </div>
      </div>

      <div class="product-list">
        <div class="product-item">
          <div class="product-item-intro">
            <img
              src="https://weetbix.com.au/wp-content/uploads/2021/09/WB_Socks-1.jpg"
              alt="socks"
            />
            <div class="item-infor">
              <h4 class="product-title">BOXES OF LOVE</h4>
              <div class="product-name">Happy Days</div>
              <div class="price">
                <span class="price-current">147.000đ</span>
                <span class="price-discount">139.000 đ</span>
              </div>
              <div>
                <v-icon> mdi-delete </v-icon>
              </div>
            </div>
          </div>
          <div class="product-item-number">
            <div class="product-item-number-icon">
              <v-icon class="item-number-icon"> fa-plus </v-icon>
            </div>

            <span>1</span>
            <div class="product-item-number-icon">
              <v-icon class="item-number-icon"> fa-minus </v-icon>
            </div>
          </div>
          <div class="product-item-price">
            <span class="price-discount">139.000 đ</span>
          </div>
        </div>
        <div class="product-item">
          <div class="product-item-intro">
            <img
              src="https://ih1.redbubble.net/image.1097303397.0166/ur,socks_flatlay_medium,square,600x600-bg,f8f8f8.1.jpg"
              alt="socks"
            />
            <div class="item-infor">
              <h4 class="product-title">BOXES OF LOVE</h4>
              <div class="product-name">Happy Days</div>
              <div class="price">
                <span class="price-current">147.000đ</span>
                <span class="price-discount">139.000 đ</span>
              </div>
              <div>
                <v-icon> mdi-delete </v-icon>
              </div>
            </div>
          </div>
          <div class="product-item-number">
            <div class="product-item-number-icon">
              <v-icon class="item-number-icon"> fa-plus </v-icon>
            </div>

            <span>1</span>
            <div class="product-item-number-icon">
              <v-icon class="item-number-icon"> fa-minus </v-icon>
            </div>
          </div>
          <div class="product-item-price">
            <span class="price-discount">139.000 đ</span>
          </div>
        </div>
      </div>

      <div class="product-bill">
        <table>
          <thead>
            <tr>
              <td>Total Amount</td>
              <td>2 items</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Price</td>
              <td>180.000 đ</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>40.000 đ</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total price</td>
              <td>120.000đ</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderUpdate",
};
</script>

<style lang="scss" src="./AdminOrder_Update.scss" scoped></style>
