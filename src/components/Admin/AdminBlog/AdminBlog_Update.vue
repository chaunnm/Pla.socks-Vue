<template>
    <div class="adminBlog-update">
        <h3 class="title">Title</h3>
        <div class="line"></div>
        <div class="header">
            <span>Title</span>
            <input type="text">
            <div>
                <img :src="previewImage" class="uploading-image" />
                <input id="file1" type="file" accept="image/jpeg" @change=uploadImage style="display: none">
                <label for="file1">
                    <v-icon id="upload">fa-solid fa-upload</v-icon>
                    <!-- <img  src="https://drive.google.com/uc?id=1P8QqqN1eMi4XbBFg8rDnkrgm-bdkmIsf" /> -->
                    <p>Change image</p>
                </label>

            </div>

        </div>
        <div class="editer">
            <vue-editor v-model="content">
                <h4>Some initial content</h4>
            </vue-editor>

        </div>
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
    name: 'AdminBlogsUpdate',
    components: {
        VueEditor
    },
    data() {
        return {
            previewImage: null,
            // content: "<h1>Some initial content</h1>"
        }
    },
    methods: {
        uploadImage(e) {
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                this.previewImage = e.target.result;
                console.log(this.previewImage);
            };
        }
    }
}  // missing closure added
</script>



<style lang="scss" src="./AdminBlog_Update.scss" scoped>
.uploading-image {
    display: flex;
    width: 100px;
}

.editer {
    width: 500px;
}
</style>