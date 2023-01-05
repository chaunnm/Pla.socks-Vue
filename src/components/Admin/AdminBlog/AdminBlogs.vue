<template>
  <div class="adminOrder-container">
    <div class="section">
      <div class="section-left">
        <h3>List</h3>
        <h2>
          Blogs
          <i class="fa-solid fa-users"></i>
        </h2>
      </div>
      <div class="section-right">
        <router-link to="/admin-blogs-update">
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
          checkbox-color="#4DB7B3"
          :search="search"
          v-model="selected"
          :headers="headers"
          :items="blogsData"
          :single-select="singleSelect"
          item-key="blogId"
          show-select
          class="elevation-1"
          sort-by="calories"
        >
          <template v-slot:[`top`]> </template>
          <template v-slot:[`item.image`]="{ item }">
            <img class="avatar" :src="item.image" alt="" />
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon class="mr-2 update" size="25" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon class="delete" size="25" @click="deleteItem(item.blogId)">
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
    <!-- <v-dialog v-model="dialogDelete" max-width="500px">
           <v-card>
                <h5 class="text-delete-adminUser">
                    Are you sure you want to delete this user ?
                </h5>
                <div class="image-delete-adminUser">
                    <img width="100px" height="100px"
                        src="https://i1.wp.com/www.livestickers.com/wp-content/uploads/2020/10/LINE_QooBee_Agapi2.png?w=512&ssl=1"
                        alt="" />
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
        </v-dialog> -->
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  name: "AdminBlogs",
  data: () => ({
    dialogSelected: false,
    dialogDelete: false,
    singleSelect: false,
    selected: [],
    search: "",
    headers: [
      { text: "ID", value: "blogID" },

      { text: "Image", value: "image", sortable: false },
      { text: "Name", value: "titleName" },
      {
        text: "Owner",
        align: "start",
        value: "author",
      },
      { text: "Publishing Date", value: "pulishingDate" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    blogsData: [],
    editedIndex: -1,
    // blogData: [
    //     {
    //         id: 1,
    //         image: 'https://plasocks.com/wp-content/uploads/2022/07/z3571975991764_6c5aac385ee991d1f32ba5405d596470-768x768.jpg',
    //         titleName: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
    //         author: 'anguynv',
    //         pulishingDate: '15/11/2022'
    //     },
    //     {
    //         id: 2,
    //         image: 'https://plasocks.com/wp-content/uploads/2022/07/z3571975991764_6c5aac385ee991d1f32ba5405d596470-768x768.jpg',
    //         titleName: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
    //         author: 'nnmc',
    //         pulishingDate: '20/12/2022'
    //     },
    //     {
    //         id: 3,
    //         image: 'https://plasocks.com/wp-content/uploads/2022/07/z3571975989496_320be5d4342a3a90a48516b143ba6885.jpg',
    //         titleName: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
    //         author: 'ltyn',
    //         pulishingDate: '30/10/2022'
    //     },
    //     {
    //         id: 4,
    //         image: 'https://plasocks.com/wp-content/uploads/2022/07/z3571976000984_b32c5ed8c85e787edb59281f6d7da799-768x768.jpg',
    //         titleName: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
    //         author: 'btdc',
    //         pulishingDate: '21/10/2022'
    //     }
    // ]
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {},

  created() {
    this.blogsData = this.$store.getters.GET_BLOG_ITEMS;
  },

  methods: {
    deleteItem(Id) {
      this.dialogDelete = true;
      this.editedIndex = Id;
    },
    closeDelete() {
      this.dialogDelete = false;
      this.dialogSelected = false;
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
        "DELETE_BLOGS_ID",
        this.selected.map((item) => item.blogId)
      );
      this.blogsData = this.$store.getters.GET_BLOG_ITEMS;
      this.closeDelete();
    },
    deleteItemConfirm() {
      this.$store.commit("DELETE_BLOG_ID", this.editedIndex);
      this.blogsData = this.$store.getters.GET_BLOG_ITEMS;
      this.closeDelete();
    },
    // closeDelete() {
    //     this.dialogDelete = false;
    // },
    // deleteItemConfirm() {
    //     const newBlog = this.blogData.filter((item) => item.id !== this.editedIndex)
    //     this.blogData = newBlog
    //     this.closeDelete();
    // },
  },
};
</script>

<style lang="scss" src="./AdminBlogs.scss" scoped>
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
