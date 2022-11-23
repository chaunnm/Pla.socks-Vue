<template>
  <div class="AdminProductUpdate">
    <div class="content">
      <h3>Update</h3>
      <h2>
        Product
        <i class="fa-solid fa-socks"></i>
      </h2>

      <div class="form">
        <div class="left">
          <div class="admin-update-row">
            <label>Product Name</label>
            <v-text-field
              v-model="productName"
              :error-messages="productNameErrors"
              @input="$v.productName.$touch()"
              @blur="$v.productName.$touch()"
              outlined
            ></v-text-field>
          </div>
          <div class="admin-update-row">
            <label>Variance</label>
            <v-text-field
              v-model="variance"
              :error-messages="varianceErrors"
              @input="$v.variance.$touch()"
              @blur="$v.variance.$touch()"
              outlined
            ></v-text-field>
          </div>
          <div class="admin-update-row">
            <label>Price</label>
            <v-text-field
              v-model="price"
              :error-messages="priceErrors"
              @input="$v.price.$touch()"
              @blur="$v.price.$touch()"
              outlined
            ></v-text-field>
          </div>
          <div class="admin-update-row">
            <label>Stock</label>
            <v-text-field
              v-model="stock"
              :error-messages="stockErrors"
              @input="$v.stock.$touch()"
              @blur="$v.stock.$touch()"
              outlined
            ></v-text-field>
          </div>
          <div class="admin-update-row">
            <label>Sold</label>
            <v-text-field v-model="sold" outlined></v-text-field>
          </div>
        </div>
        <div class="right">
          <div class="admin-update-row">
            <label>Height</label>
            <v-text-field v-model="height" outlined></v-text-field>
          </div>
          <div class="admin-update-row">
            <label>Category</label>
            <v-select
              v-model="category"
              :error-messages="categoryErrors"
              @input="$v.category.$touch()"
              @blur="$v.category.$touch()"
              :items="productCategory"
              outlined
            ></v-select>
          </div>
          <div class="admin-update-row">
            <label>Thickness</label>
            <v-text-field v-model="thickness" outlined></v-text-field>
          </div>
          <div class="admin-update-row">
            <label>Sale</label>
            <v-text-field v-model="sale" outlined></v-text-field>
          </div>

          <div class="admin-update-row">
            <label>Image</label>
            <div class="admin-update-row-group">
              <div class="admin-update-row-group-left">
                <label for="file-upload" class="custom-file-upload">
                  <i class="fa-solid fa-folder-open"></i>
                </label>
                <input
                  id="file-upload"
                  name="image"
                  accept="image/*"
                  type="file"
                  @change="handleChangeImage"
                />
              </div>
              <div class="admin-update-row-group-right">
                <img class="image" :src="image" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-group">
        <div class="btn-update" @click="submit"><span>UPDATE</span></div>
        <div class="btn-clear" @click="clear"><span>CLEAR</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
import { mapGetters, mapMutations } from "vuex";

export default {
  mixins: [validationMixin],
  props: ["prodId"],
  data() {
    return {
      productCategory: [],
      productName: "",
      variance: 0,
      image:
        "https://1.bp.blogspot.com/-ZpujRR4C2mE/U2WpXLpFETI/AAAAAAAAPSc/I2YshWDsjRA/s1600/Yondaime+Chibi.png",
      stock: 0,
      sold: 0,
      price: 0,
      height: 0,
      category: "",
      thickness: "",
      sale: 0,
      review: [],
      createdAt: "",
    };
  },
  validations: {
    productName: { required, minLength: minLength(8) },
    image: { required },
    stock: { required },
    variance: { required },
    category: { required },
    price: { required },
  },
  computed: {
    productNameErrors() {
      const errors = [];
      if (!this.$v.productName.$dirty) return errors;
      !this.$v.productName.minLength && errors.push("Minimum 8 characters");
      !this.$v.productName.required && errors.push("Product name is required");
      return errors;
    },
    imageErrors() {
      const errors = [];
      if (!this.$v.image.$dirty) return errors;
      !this.$v.image.required && errors.push("Product image is required");
      return errors;
    },
    categoryErrors() {
      const errors = [];
      if (!this.$v.category.$dirty) return errors;
      !this.$v.category.required &&
        errors.push("Select an appropriate category for this product");
      return errors;
    },
    stockErrors() {
      const errors = [];
      if (!this.$v.stock.$dirty) return errors;
      !this.$v.stock.required && errors.push("Aren't we having something?");
      return errors;
    },
    varianceErrors() {
      const errors = [];
      if (!this.$v.variance.$dirty) return errors;
      !this.$v.variance.required &&
        errors.push("Please set a variance title for this product");
      return errors;
    },
    priceErrors() {
      const errors = [];
      if (!this.$v.price.$dirty) return errors;
      !this.$v.price.required && errors.push("A product must have a price");
      return errors;
    },
    ...mapGetters({
      productItemById: "GET_PRODUCT_ITEM_BY_ID",
    }),
    ...mapMutations(["ADD_PRODUCT_ITEM"]),
  },
  created() {
    this.productName = this.productItemById(parseInt(this.prodId)).itemTitle;
    this.variance = this.productItemById(parseInt(this.prodId)).variance;
    this.image = this.productItemById(parseInt(this.prodId)).image;
    this.stock = this.productItemById(parseInt(this.prodId)).stock;
    this.sold = this.productItemById(parseInt(this.prodId)).sold;
    this.price = this.productItemById(parseInt(this.prodId)).price;
    this.sold = this.productItemById(parseInt(this.prodId)).sold;
    this.height = this.productItemById(parseInt(this.prodId)).height;
    this.category = this.productItemById(parseInt(this.prodId)).category;
    this.thickness = this.productItemById(parseInt(this.prodId)).thickness;
    this.sale = this.productItemById(parseInt(this.prodId)).sale;
    this.productCategory = this.$store.getters.GET_CATEGORY;
  },
  methods: {
    handleChangeImage(e) {
      if (e.target.name === "image") {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            this.image = reader.result;
          }
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$toast.open({
          message:
            "There is some problems while updating product, please try again! ☹️",
          type: "error",
          duration: 2000,
          dismissible: true,
          position: "bottom",
        });
      } else {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        const temp = today.toISOString();
        const updatedProduct = {
          productId: parseInt(this.prodId),
          itemTitle: this.productName,
          variance: this.variance,
          image: this.image,
          stock: this.stock,
          sold: this.sold,
          price: this.price,
          height: this.height,
          category: this.category,
          thickness: this.thickness,
          sale: this.sale,
          review: [],
          createdAt: this.productItemById(parseInt(this.prodId)).createdAt,
          updatedAt: temp,
        };
        this.$store.commit("CHANGE_PRODUCT_ITEM", updatedProduct);
        this.$toast.open({
          message: "Update product successfully! 🎆",
          type: "success",
          duration: 2000,
          dismissible: true,
          position: "bottom",
        });
        this.$router.push("/admin/product");
        this.clear();
      }
    },
    clear() {
      this.$v.$reset();
      this.productName = "";
      this.variance = 0;
      this.image =
        "https://1.bp.blogspot.com/-ZpujRR4C2mE/U2WpXLpFETI/AAAAAAAAPSc/I2YshWDsjRA/s1600/Yondaime+Chibi.png";
      this.stock = 0;
      this.sold = 0;
      this.price = 0;
      this.height = 0;
      this.category = "";
      this.thickness = "";
      this.sale = 0;
      this.review = [];
      this.createdAt = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.AdminProductUpdate {
  // height: 100vh;
  // width: 100%;
  height: auto;
  padding: 20px;
  animation: toLeft 0.3s backwards;
  @keyframes toLeft {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(0);
    }
  }

  .content {
    // width: 90%;
    // margin: 20px auto;
    // border: 2px solid #4db7b3;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

    border-radius: 7px;
    padding: 20px;

    h3 {
      color: #9c9c9c;
      font-weight: 500;
    }

    h2 {
      margin-top: 10px;
      color: #616060;
      margin-bottom: 30px;
      padding-bottom: 5px;
      border-bottom: 1px solid #4db7b3;

      .fa-socks {
        color: #4db7b3;
        // background-color: #4DB7B3;
        margin-left: 20px;
        // font-size: 15px;
        // animation: spinaround 5s infinite linear;
      }
    }
  }

  .form {
    display: flex;

    label {
      display: block !important;
      font-weight: 600;
    }

    .left {
      flex: 1;
      margin-right: 30px;
    }

    .right {
      flex: 1;
      margin-left: 30px;

      .image {
        width: 70px;
        height: 70px;
      }

      .image {
        margin-top: 10px;
        border-radius: 50%;
      }

      .form-control-file {
        width: 100px;
      }

      input[type="file"] {
        display: none;
      }

      .custom-file-upload {
        width: fit-content;
        border: 1px solid #ccc;
        display: inline-block;
        padding: 6px 12px;
        cursor: pointer;
      }

      .admin-update-row {
        &-group {
          display: flex;
          align-items: center;

          &-left {
            margin-right: 20px;
          }
        }
      }
    }
  }

  .btn-group {
    display: flex;
    width: 100%;
    margin-bottom: 10px;
  }

  .btn-update {
    margin-right: 20px;
    // box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    //   rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    //   rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    display: block;
    width: 150px;
    height: 40px;
    font-size: 18px;
    text-decoration: none;
    color: #4db7b3;
    border: 2px solid #4db7b3;
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    transition: all 0.35s;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .btn-update span {
    position: relative;
    margin: auto;
    z-index: 2;
    font-weight: 600;
  }

  .btn-update:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    background: #4db7b3;
    transition: all 0.35s;
  }

  .btn-update:hover {
    border: none;
    color: #fff;
  }

  .btn-update:hover:after {
    width: 100%;
  }

  .btn-clear {
    display: block;
    width: 150px;
    height: 40px;
    font-size: 18px;
    text-decoration: none;
    color: #333;
    border: 2px solid #979b9b;
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    transition: all 0.35s;
    // background-color: #979b9b;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .btn-clear span {
    position: relative;
    margin: auto;
    z-index: 2;
    font-weight: 600;
  }

  .btn-clear:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    background: #979b9b;
    transition: all 0.35s;
  }

  .btn-clear:hover {
    border: none;
    color: #fff;
  }

  .btn-clear:hover:after {
    width: 100%;
  }

  .form::v-deep .v-input input {
    padding: 0 !important;
  }

  .form::v-deep .v-input__slot {
    min-height: 40px;
  }

  .form::v-deep .v-input__append-inner {
    margin: 0;
    height: 40px;
    align-items: center;
  }
}

@media screen and (max-width: 500px) {
  .AdminProductUpdate {
    .form {
      margin-bottom: 15px;
      flex-direction: column;

      .left {
        margin-right: 0;
      }

      .right {
        margin-left: 0;
      }
    }

    .btn-group {
      margin-bottom: 20px;
    }
  }
}
</style>
