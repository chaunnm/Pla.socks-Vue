<template>
  <div>
    <AdminCategoryUpdate :cateId="cateId" />
  </div>
</template>

<script>
import AdminCategoryUpdate from "@/components/Admin/AdminCategory/AdminCategoryUpdate.vue";

export default {
  components: { AdminCategoryUpdate },
  data() {
    return {
      cateId: "",
    };
  },
  created() {
    this.cateId = this.$route.params.cateId;
  },
};
</script>

<style lang="scss" scoped></style>
