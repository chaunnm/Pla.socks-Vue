<template>
  <div class="AdminCategoryAdd">
    <div class="content">
      <h3>Add New</h3>
      <h2>
        Category
        <i class="fa-solid fa-socks"></i>
      </h2>

      <div class="form">
        <div class="left">
          <div class="admin-add-new-row">
            <label>Category Name</label>
            <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
              outlined
            ></v-text-field>
          </div>
          <div class="admin-add-new-row">
            <label>Description</label>
            <v-textarea
              solo
              v-model="description"
              :error-messages="descriptionErrors"
              @input="$v.description.$touch()"
              @blur="$v.description.$touch()"
              outlined
            ></v-textarea>
          </div>
        </div>
        <div class="right">
          <div class="admin-add-new-row">
            <label>Level</label>
            <v-select
              v-model="level"
              :error-messages="levelErrors"
              @input="$v.level.$touch()"
              @blur="$v.level.$touch()"
              :items="selectLevel"
              outlined
            ></v-select>
          </div>
          <div class="admin-add-new-row">
            <label>Parent</label>
            <v-select
              v-model="isChild"
              :items="productCategory"
              outlined
            ></v-select>
          </div>
        </div>
      </div>
      <div class="btn-group">
        <div class="btn-add" @click="submit"><span>ADD NEW</span></div>
        <div class="btn-clear" @click="clear"><span>CLEAR</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      productCategory: [],
      selectLevel: [1, 2],
      name: "",
      description: "",
      level: 1,
      isChild: "",
    };
  },
  validations: {
    name: { required, minLength: minLength(8) },
    level: { required },
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.minLength && errors.push("Minimum 8 characters");
      !this.$v.name.required && errors.push("Category name is required");
      return errors;
    },
    levelErrors() {
      const errors = [];
      if (!this.$v.level.$dirty) return errors;
      !this.$v.level.required &&
        errors.push("A category must have a specific level");
      return errors;
    },
  },
  created() {
    this.productCategory = this.$store.getters.GET_CATEGORY;
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$toast.open({
          message:
            "There is some problems while adding new category, please try again! ☹️",
          type: "error",
          duration: 2000,
          dismissible: true,
          position: "bottom",
        });
      } else {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        const temp = today.toISOString();
        const newCategory = {
          categoryId: this.$store.getters.GET_CATEGORY_QUANTITY + 1,
          name: this.name,
          description: this.description,
          level: this.level,
          isChild: this.isChild,
          createdAt: temp,
          updatedAt: "",
        };
        this.$store.commit("ADD_CATEGORY_ITEM", newCategory);
        this.$toast.open({
          message: "New category added successfully! 🎆",
          type: "success",
          duration: 2000,
          dismissible: true,
          position: "bottom",
        });
        this.$router.push("/admin/category");
        this.clear();
      }
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.description = "";
      this.level = 1;
      this.isChild = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.AdminCategoryAdd {
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
      .admin-add-new-row {
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
  .btn-add {
    margin-right: 20px;
    // box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    //   rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    //   rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    display: block;
    width: 150px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-family: sans-serif;
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

  .btn-add span {
    position: relative;
    z-index: 2;
    font-weight: 600;
  }

  .btn-add:after {
    position: absolute;
    content: "";
    top: -1;
    left: -1;
    width: 0;
    height: 100%;
    background: #4db7b3;
    transition: all 0.35s;
  }

  .btn-add:hover {
    border: none;
    color: #fff;
    transform: translateX(5px);
  }

  .btn-add:hover:after {
    width: 100%;
  }
  .btn-clear {
    display: block;
    width: 150px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-family: sans-serif;
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
    z-index: 2;
    font-weight: 600;
  }

  .btn-clear:after {
    position: absolute;
    content: "";
    top: -1;
    left: -1;
    width: 0;
    height: 100%;
    background: #979b9b;
    transition: all 0.35s;
  }

  .btn-clear:hover {
    border: none;
    color: #fff;
    transform: translateX(5px);
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
  .AdminCategoryAdd {
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
