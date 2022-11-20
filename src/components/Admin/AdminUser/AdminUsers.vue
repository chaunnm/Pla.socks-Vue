<template>
  <div class="adminUser-container">
    <div class="section">
      <div class="section-left">
        <h3>List</h3>
        <h2>
          User
          <i class="fa-solid fa-users"></i>
        </h2>
      </div>
      <div class="section-right">
        <router-link to="/admin-users-add-new">
          <div class="text-box">
            <span class="btn btn-white btn-animated">+ Add New</span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="table">
      <v-card>
        <v-card-title>
          <i class="fa-solid fa-trash"></i>
          DELETE
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :search="search"
          v-model="selected"
          :headers="headers"
          :items="userList"
          :single-select="singleSelect"
          item-key="name"
          show-select
          class="elevation-1"
          sort-by="calories"
        >
          <template v-slot:[`top`]> </template>
          <template v-slot:[`item.img`]="{ item }">
            <img class="avatar" :src="item.img" alt="" />
          </template>
          <template v-slot:[`item.admin`]="{ item }">
            <span>{{ item.admin ? "Admin" : "User" }}</span>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2 update" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon class="delete" small @click="deleteItem(item.id)">
              mdi-delete
            </v-icon>
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
  name: "AdminUsers",
  data: () => ({
    dialog: false,
    dialogDelete: false,
    singleSelect: false,
    selected: [],
    search: "",
    headers: [
      { text: "ID", value: "id" },
      {
        text: "Name",
        align: "start",
        value: "name",
      },
      { text: "Avartar", value: "img" },
      { text: "Email", value: "email" },
      { text: "PhoneNumber", value: "phone" },
      { text: "Admin", value: "admin" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    userList: [],
    editedIndex: -1,
  }),

  computed: {
    ...mapGetters["getUserAll"],
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {},

  created() {
    this.userList = this.$store.getters.getUserAll;
    console.log("user ", this.userList);
  },

  methods: {
    deleteItem(id) {
      this.dialogDelete = true;
      this.editedIndex = id;
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
  },
};
</script>

<style lang="scss" src="./AdminUsers.scss" scoped>
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
