<template>
  <div class="adminOrder-container">
    <div class="section">
      <div class="section-left">
        <h3>List</h3>
        <h2>
          Orders
          <i class="fa-solid fa-users"></i>
        </h2>
      </div>
      <!-- <div class="section-right">
        <router-link to="/admin-orders-update">
          <div class="text-box">
            <span class="btn btn-white btn-animated">+ Add New</span>
          </div>
        </router-link>
      </div> -->
    </div>
    <div class="table">
      <v-card>
        <v-card-title>
          <i class="fa-solid fa-trash"></i>
          Delete
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
          dense
          :search="search"
          v-model="selected"
          :headers="headers"
          :items="orderList"
          :single-select="singleSelect"
          item-key="orderId"
          show-select
          class="elevation-1"
          sort-by="calories"
        >
          <template v-slot:[`top`]> </template>
          <template v-slot:[`item.orderId`]="{ item }">
            <span style="color: blue; text-align: center">
              {{ item.orderId + 1 }}
            </span>
          </template>
          <template v-slot:[`item.orderInfo`]="{ item }">
            <span>{{ item.orderInfo.fullname }}</span>
          </template>
          <template v-slot:[`item.status`]="{ item }">
            <span
              :class="[
                Processing ? 'Processing' : '',
                Delivered ? 'Delivered' : '',
              ]"
              >{{ item.status }}</span
            >
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon class="mr-2 update" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <!-- <router-link to="/admin-orders-update">
              <v-icon class="mr-2 update" @click="editItem(item)">
                mdi-pencil
              </v-icon>
            </router-link> -->
          </template>
        </v-data-table>
      </v-card>
    </div>
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <h5 class="text-delete-adminUser">
          Are you sure you want to delete this user ?
        </h5>
        <div class="image-delete-adminUser">
          <img
            width="100px"
            height="100px"
            src="https://i1.wp.com/www.livestickers.com/wp-content/uploads/2020/10/LINE_QooBee_Agapi2.png?w=512&ssl=1"
            alt=""
          />
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <div class="btn">
            <div class="btn-cancel" @click="closeDelete">Cancel</div>
            <div class="btn-ok" @click="deleteItemConfirm">OK</div>
          </div>

          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AdminOrders",
  data: () => ({
    dialog: false,
    dialogDelete: false,
    singleSelect: false,
    Delivered: false,
    Processing: false,
    selected: [],
    search: "",
    headers: [
      { text: "ID", value: "orderId" },
      {
        text: "Owner",
        align: "start",
        value: "orderInfo.fullname",
      },
      { text: "Status", value: "status" },
      { text: "BookingDate", value: "createdAt" },
      { text: "Price", value: "totalPrice" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    orderList: [],
    editedIndex: -1,
  }),

  computed: {
    ...mapGetters[("GET_ORDERS_ITEMS", "GET_ORDER_ITEM_BY_ID")],
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {},

  created() {
    this.orderList = this.$store.getters.GET_ORDERS_ITEMS;
  },

  methods: {
    currentStatus() {
      if (this.orderList.status == "Processing") {
        console.log("Processing");
        return (this.Processing = true);
      } else if (this.orderList.status == "Delivered") {
        console.log("Delivered");
        return (this.Delivered = true);
      } else return "Canceled";
    },
    // currentStatus() {
    //     if (this.orderList.sutatus === 'Processing') {
    //         return 'Processing'
    //     } else if (this.orderList.sutatus === 'Delivered') {
    //         return 'Delivered'
    //     } else return 'Canceled'
    // },
    deleteItem(orderId) {
      this.dialogDelete = true;
      this.editedIndex = orderId;
    },
    closeDelete() {
      this.dialogDelete = false;
      // this.$nextTick(() => {
      //     this.editedItem = Object.assign({}, this.defaultItem)
      //     this.editedIndex = -1
      // })
    },
    deleteItemConfirm() {
      this.$store.commit("DELETEUSER", this.editedIndex);
      this.userList = this.$store.getters.getUserAll;
      this.closeDelete();
    },
    editItem() {
      this.$router.push(`/admin-orders-update`);
    },
  },
};
</script>

<style lang="scss" src="./AdminOrders.scss" scoped>
tr {
  padding: 10px !important;
}

.mdi:before,
.mdi-pencil::before,
.mdi-set {
  font-size: 40px;
}

.Processing {
  background-color: #0dd6b8 !important;
}

.Delivered {
  background-color: yellow;
}

.Canceled {
  background-color: #fe0000;
}

.image-delete-adminUser {
  width: 100%;
  display: flex;
  justify-content: center;
}

.text-delete-adminUser {
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
