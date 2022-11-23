<template>
  <div>
    <AdminProductUpdate :prodId="prodId" />
  </div>
</template>

<script>
import AdminProductUpdate from "@/components/Admin/AdminProduct/AdminProductUpdate.vue";

export default {
  components: { AdminProductUpdate },
  data() {
    return {
      prodId: "",
    };
  },
  created() {
    this.prodId = this.$route.params.prodId;
  },
};
</script>

<style lang="scss" scoped></style>
