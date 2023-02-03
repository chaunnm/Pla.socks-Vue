<template>
  <div class="admin-category-container">
    <div class="section">
      <div class="section-left">
        <h3>List</h3>
        <h2>
          Categories
          <i class="fa-brands fa-slack"></i>
        </h2>
      </div>
      <div class="section-right">
        <router-link to="/admin/category/add">
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
          :items="categoryList"
          :single-select="singleSelect"
          item-key="categoryId"
          show-select
          class="elevation-1"
          sort-by="calories"
        >
          <template v-slot:[`top`]> </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon size="25" class="pr-2 mr-2 update" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <!-- </router> -->
            <v-icon
              class="delete"
              size="25"
              @click="deleteItem(item.categoryId)"
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
          Are you sure want to delete this category?
        </v-card-title>
        <v-card-text class="text-content">
          Delete category will permanently remove this category information. 😲
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
          Are you sure want to delete these categories?
        </v-card-title>
        <v-card-text class="text-content">
          Delete categories will permanently remove these category information.
          😲
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
  name: "AdminCategory",
  data: () => ({
    dialogSelected: false,
    dialogDelete: false,
    singleSelect: false,
    selected: [],
    search: "",
    headers: [
      { text: "ID", value: "categoryId",},
      {
        text: "Category",
        align: "start",
        value: "name",
      },
      { text: "Description", value: "description", sortable: false },
      { text: "Level", value: "level" },
      // { text: "Parent", value: "isChild" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    categoryList: [],
    editedIndex: -1,
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {},

  created() {
    this.categoryList = this.$store.getters.GET_CATEGORY_ITEMS;
  },

  methods: {
    editItem(item) {
      this.$router.push("/admin/category/update/" + item.categoryId);
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
        "DELETE_CATEGORY_ITEMS",
        this.selected.map((item) => item.categoryId)
      );
      this.categoryList = this.$store.getters.GET_CATEGORY_ITEMS;
      this.closeDelete();
    },
    closeDelete() {
      this.dialogDelete = false;
      this.dialogSelected = false;
    },
    deleteItemConfirm() {
      this.$store.commit("DELETE_CATEGORY_ID", this.editedIndex);
      this.categoryList = this.$store.getters.GET_CATEGORY_ITEMS;
      this.closeDelete();
    },
  },
};
</script>

<style lang="scss" src="./AdminCategory.scss" scoped>
.image-delete-admin-category {
  width: 100%;
  display: flex;
  justify-content: center;
}

.text-delete-admin-category {
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
