<template>
  <div class="admin-product-container">
    <div class="section">
      <div class="section-left">
        <h3>List</h3>
        <h2>
          Products
          <i class="fa-solid fa-socks"></i>
        </h2>
      </div>
      <div class="section-right">
        <router-link to="/admin/product/add">
          <div class="text-box">
            <span class="btn btn-white btn-animated">+ Add New</span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="table">
      <v-card>
        <v-card-title>
          <div @click="deleteSelected">
            <i class="fa-solid fa-trash"></i>
          </div>
          DELETE
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          >
          </v-text-field>
        </v-card-title>
        <v-data-table
          checkbox-color="#4DB7B3"
          :search="search"
          v-model="selected"
          :headers="headers"
          :items="productList"
          :single-select="singleSelect"
          item-key="productId"
          show-select
          class="elevation-1"
          sort-by="calories"
        >
          <template v-slot:[`top`]> </template>
          <template v-slot:[`item.image`]="{ item }">
            <img class="image" :src="item.image" alt="" />
          </template>
          <template v-slot:[`item.price`]="{ item }">
            <span>{{ formatOriginalPrice(item.price) }}</span>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <!-- <router :to="'/admin/product/update/' + item.productId"> -->
            <v-icon size="25" class="pr-2 mr-2 update" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <!-- </router> -->
            <v-icon
              class="delete"
              size="25"
              @click="deleteItem(item.productId)"
            >
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
    </div>
    <v-dialog v-model="dialogDelete" persistent max-width="520">
      <v-card>
        <v-card-title class="text-h5">
          Are you sure want to delete this product?
        </v-card-title>
        <v-card-text class="text-content">
          Delete product will permanently remove this product information. 😲
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="closeDelete">
            Cancel
          </v-btn>
          <v-btn color="error darken-1" text @click="deleteItemConfirm">
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogSelected" persistent max-width="520">
      <v-card>
        <v-card-title class="text-h5">
          Are you sure want to delete these products?
        </v-card-title>
        <v-card-text class="text-content">
          Delete products will permanently remove these product information. 😲
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="closeDelete">
            Cancel
          </v-btn>
          <v-btn color="error darken-1" text @click="deleteSelectedConfirm">
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "AdminProduct",
  data: () => ({
    dialogSelected: false,
    dialogDelete: false,
    singleSelect: false,
    selected: [],
    search: "",
    headers: [
      { text: "ID", value: "productId" },
      {
        text: "Product name",
        align: "start",
        value: "itemTitle",
      },
      { text: "Variance", value: "variance" },
      { text: "Category", value: "category" },
      { text: "Image", value: "image", sortable: false },
      { text: "Stock", value: "stock" },
      { text: "Sold", value: "sold" },
      { text: "Price", value: "price" },
      { text: "Sale", value: "sale" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    productList: [],
    editedIndex: -1,
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {},

  created() {
    this.productList = this.$store.getters.GET_PRODUCT_ITEMS;
  },

  methods: {
    editItem(item) {
      this.$router.push("/admin/product/update/" + item.productId);
    },
    deleteItem(id) {
      this.dialogDelete = true;
      this.editedIndex = id;
    },
    deleteSelected() {
      if (this.selected.length !== 0) {
        this.dialogSelected = true;
      } else {
        this.$toast.open({
          message: "Please select item(s) before going on! 😳",
          type: "error",
          duration: 2000,
          dismissible: true,
          position: "bottom",
        });
      }
    },
    deleteSelectedConfirm() {
      this.$store.commit(
        "DELETE_PRODUCTS_ID",
        this.selected.map((item) => item.productId)
      );
      this.productList = this.$store.getters.GET_PRODUCT_ITEMS;
      this.closeDelete();
    },
    closeDelete() {
      this.dialogDelete = false;
      this.dialogSelected = false;
    },
    formatOriginalPrice(value) {
      let number = value;
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(number);
    },
    deleteItemConfirm() {
      this.$store.commit("DELETE_PRODUCT_ID", this.editedIndex);
      this.productList = this.$store.getters.GET_PRODUCT_ITEMS;
      this.closeDelete();
    },
  },
};
</script>

<style lang="scss" src="./AdminProduct.scss" scoped>
.image-delete-admin-product {
  width: 100%;
  display: flex;
  justify-content: center;
}

.text-delete-admin-product {
  text-align: center;
  color: #616060;
  font-size: 15px;
  padding: 20px;
}

.btn {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;

  .btn-cancel {
    border: 2px solid #0dd6b8;
    color: #0dd6b8;
    margin-right: 20px;
    padding: 5px 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 700;
  }

  .btn-cancel:hover {
    background-color: #0dd6b8;
    color: white;
  }

  .btn-ok {
    border: 2px solid #fe0000;
    color: #fe0000;
    padding: 5px 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 700;
  }

  .btn-ok:hover {
    background-color: #fe0000;
    color: white;
  }
}
</style>
