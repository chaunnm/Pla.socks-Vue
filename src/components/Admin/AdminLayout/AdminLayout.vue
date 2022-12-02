<template>
  <div class="AdminLayout">
    <AdminHeader />
    <AdminSidebar />
    <main class="main-slot" style="z-index: -1">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import AdminHeader from "./AdminHeader.vue";
import AdminSidebar from "./AdminSidebar.vue";

export default {
  name: "AdminLayout",
  components: { AdminSidebar, AdminHeader },
};
</script>

<style lang="scss" scoped>
.AdminLayout {
  // position: relative;
}
.main-slot {
  // margin-top: 64px;
  padding-top: 64px;
  // position: relative;
  // top: 64px !important;
}
</style>
