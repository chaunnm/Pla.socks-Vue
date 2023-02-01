<template>
  <div id="container-account">
    <div class="container-sidebar">
      <Sidebar @changeComponent="updateSelect($event)" />
    </div>
    <div class="container-sidebar-content">
      <AccountInfor v-if="select == '1'" />
      <Favorites v-else-if="select == '2'" />
      <Orders v-else />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/MyAccount/Sidebar/Sidebar.vue";
import AccountInfor from "@/components/MyAccount/AccountInfor/AccountInfor.vue";
import Favorites from "@/components/MyAccount/Favorites/Favorites.vue";
import Orders from "@/components/MyAccount/Orders/Orders.vue";

export default {
  // title: "Pla.Socks",
  name: "MyAccount",
  components: {
    Sidebar,
    AccountInfor,
    Favorites,
    Orders,
  },
  data: () => ({
    select: "1",
  }),
  methods: {
    updateSelect(value) {
      this.select = value;
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped>
#container-account {
  display: flex;
  max-width: 1080px;
  justify-content: center;
  margin: 20px auto;
}
.container-sidebar {
  // flex: 1;
  // max-width: 300px;
}
.container-sidebar-content {
  // flex: 5;
  margin-left: 20px;
  // width: 500px;
}
</style>
