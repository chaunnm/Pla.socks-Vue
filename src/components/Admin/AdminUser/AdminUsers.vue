<template>
  <div class="adminUser-container">
    <div class="section">
      <div class="section-left">
        <h3>List</h3>
        <h2>
          Users
          <i class="fa-solid fa-user-astronaut"></i>
        </h2>
      </div>
      <div class="section-right">
        <router-link to="/admin/user/add">
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
            <v-icon size="25" class="pr-2 mr-2 update" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon class="delete" size="25" @click="deleteItem(item.id)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
    </div>
    <v-dialog v-model="dialogDelete" persistent max-width="500">
      <v-card>
        <v-card-title class="text-h5">
          Are you sure want to delete this user?
        </v-card-title>
        <v-card-text>
          Delete user will permanently remove this user information. 😲
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
          Are you sure want to delete these users?
        </v-card-title>
        <v-card-text class="text-content">
          Delete users will permanently remove these user information. 😲
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
import { mapGetters } from "vuex";

export default {
  name: "AdminUsers",
  data: () => ({
    dialogDelete: false,
    dialogSelected: false,
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
      { text: "Avartar", value: "img", sortable: false },
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
    // console.log("user ", this.userList);
  },

  methods: {
    deleteItem(id) {
      this.dialogDelete = true;
      this.editedIndex = id;
    },
    deleteSelected() {
      if (this.selected.length !== 0) {
        this.dialogSelected = true;
      } else {
        this.$toast.open({
          message: "Please select user(s) before going on! 😳",
          type: "error",
          duration: 2000,
          dismissible: true,
          position: "bottom",
        });
      }
    },
    deleteSelectedConfirm() {
      this.$store.commit(
        "DELETE_USERS_ID",
        this.selected.map((item) => item.id)
      );
      this.userList = this.$store.getters.getUserAll;
      this.closeDelete();
      this.$toast.open({
        message: "Delete users successfully! 🙂",
        type: "success",
        duration: 2000,
        dismissible: true,
        position: "bottom",
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.dialogSelected = false;
      // this.$nextTick(() => {
      //     this.editedItem = Object.assign({}, this.defaultItem)
      //     this.editedIndex = -1
      // })
    },
    deleteItemConfirm() {
      this.$store.commit("DELETEUSER", this.editedIndex);
      this.userList = this.$store.getters.getUserAll;
      this.closeDelete();
      this.$toast.open({
        message: "Delete user successfully! 🙂",
        type: "success",
        duration: 2000,
        dismissible: true,
        position: "bottom",
      });
    },
    editItem(item) {
      // console.log(item);
      this.$router.push("/admin/user/update/" + item.id);
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
