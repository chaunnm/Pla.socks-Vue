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
                <router-link to="/admin-orders-update">
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
                    Delete
                    <v-spacer></v-spacer>
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
                    </v-text-field>
                </v-card-title>
                <v-data-table dense :search="search" v-model="selected" :headers="headers" :items="blogData"
                    :single-select="singleSelect" item-key="id" show-select class="elevation-1" sort-by="calories">
                    <template v-slot:[`top`]> </template>
                    <template v-slot:[`item.image`]="{ item }">
                        <img class="avatar" :src="item.image" alt="" />
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon class="mr-2 update" small @click="editItem(item)">
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
        </v-dialog>
    </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
    name: "AdminBlogs",
    data: () => ({
        dialog: false,
        dialogDelete: false,
        singleSelect: false,
        selected: [],
        search: "",
        headers: [
            { text: "ID", value: "id" },

            { text: "Image", value: "image" },
            { text: "Name", value: "titleName" },
            {
                text: "Owner",
                align: "start",
                value: "author",
            },
            { text: "Publishing Date", value: "pulishingDate" },
            { text: "Actions", value: "actions", sortable: false },
        ],
        editedIndex: -1,
        blogData: [
            {
                id: 1,
                image: 'https://drive.google.com/uc?id=1UjdrccuXnvD6-1sRR0wkYsyTXlILK8DV',
                titleName: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                author: 'anguynv',
                pulishingDate: '15/11/2022'
            },
            {
                id: 2,
                image: 'https://plasocks.com/wp-content/uploads/2022/07/z3571975991764_6c5aac385ee991d1f32ba5405d596470-768x768.jpg',
                titleName: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                author: 'nnmc',
                pulishingDate: '20/12/2022'
            },
            {
                id: 3,
                image: 'https://plasocks.com/wp-content/uploads/2022/07/z3571975989496_320be5d4342a3a90a48516b143ba6885.jpg',
                titleName: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                author: 'ltyn',
                pulishingDate: '30/10/2022'
            },
            {
                id: 4,
                image: 'https://plasocks.com/wp-content/uploads/2022/07/z3571976000984_b32c5ed8c85e787edb59281f6d7da799-768x768.jpg',
                titleName: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                author: 'btdc',
                pulishingDate: '21/10/2022'
            }
        ]
    }),

    watch: {},

    // created() {
    //     this.orderList = this.$store.getters.GET_ORDERS_ITEMS;
    //     console.log("order ", this.orderList);
    // },

    methods: {
        deleteItem(Id) {
            this.dialogDelete = true;
            this.editedIndex = Id;
        },
        closeDelete() {
            this.dialogDelete = false;
        },
        deleteItemConfirm() {
            // this.$store.commit("DELETEUSER", this.editedIndex);
            // this.userList = this.$store.getters.getUserAll;
            // DELETEUSER(state, payload) {
            //     const newArray = state.auth.user.filter((item) => item.id !== payload);
            //     state.auth.user = newArray;
            // },
            const newBlog = this.blogData.filter((item) => item.id !== this.editedIndex)
            this.blogData = newBlog
            // console.log(newBlog)
            // this.blogData = newBlog
            this.closeDelete();
        },
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
