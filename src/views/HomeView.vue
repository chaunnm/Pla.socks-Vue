<template>
  <tr class="cart-item">
    <td class="item-remove">
      <div class="delete">
        <v-icon x-small class="icons-item">fa-x</v-icon>
      </div>
    </td>
    <td class="item-thumbnail">
      <img
        src="https://plasocks.com/wp-content/uploads/2022/07/z3571975985247_917b2be7dbea1cee4ce04094a34668ab-768x768.jpg"
        alt=""
      />
    </td>
    <td class="item-name">
      <router-link to="/">Tên sản phẩm</router-link>
      <p class="variance">Variance: 1</p>
      <p class="subtotal">100000đ</p>
    </td>
    <td class="item-price">20000đ</td>
    <td class="item-quantity">
      <div class="item-quantity-container">
        <button class="qtyminus" aria-hidden="true">&minus;</button>
        <input
          type="number"
          name="quantity"
          id="quantity"
          min="1"
          max="30"
          step="1"
          value="1"
        />
        <button class="qtyplus" aria-hidden="true">&plus;</button>
      </div>
    </td>
    <td class="item-subtotal">250000đ</td>
  </tr>
</template>

<script>
export default {
  title: "Pla.Socks",
  name: "HomeView",
  components: {},
};
</script>

<style lang="scss" scoped>
.cart-item {
  td {
    padding: 10px 0;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 15px;
  }
  .item-remove {
    width: 2%;
    padding-right: 0;
    .delete {
      cursor: pointer;
      svg {
        color: #9a9a9a;
        font-size: 8px !important;
        padding: 5px 7px;
        border-radius: 50%;
        border: 2px solid #9a9a9a;
        transition: 0.3s ease;

        &:hover {
          color: black;
          border-color: black;
        }
      }
    }
  }
  .item-thumbnail {
    margin: auto 0;
    width: 18%;
    img {
      width: 90px;
    }
  }
  .item-name {
    margin: auto;
    text-align: left;

    a {
      text-decoration: none;
      color: inherit;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    p {
      font-size: 14px;
    }
    .subtotal {
      display: none;
      font-weight: 700;
    }
  }
  .item-price {
    margin: auto;
    font-weight: 500;
  }
  .item-quantity {
    position: relative;
    .item-quantity-container {
      display: inline-flex;
      margin-top: auto;
      margin-bottom: auto;
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
  }
  .item-subtotal {
    margin: auto;
    text-align: right;
    font-weight: 600;
  }
}
</style>
