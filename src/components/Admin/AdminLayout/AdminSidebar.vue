<template>
  <div class="AdminSidebar-container">
    <v-navigation-drawer
      app
      clipped
      :width="sidebarWidth"
      :permanent="$vuetify.breakpoint.mdAndUp"
      :temporary="$vuetify.breakpoint.smAndDown"
      :mini-variant-width="sidebarMinWidth"
      :class="{ 'drawer-mini': !getDrawer }"
      v-model="getDrawer"
      :mini-variant="!getDrawer"
    >
      <v-list>
        <template v-for="(item, i) in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6" class="py-5">
              <span
                style="padding-left: 32px"
                class="text-body-1 subheader"
                :class="item.heading && getDrawer ? 'show ' : 'hide'"
              >
                {{ item.heading }}
              </span>
            </v-col>
            <v-col cols="6" class="text-center"> </v-col>
          </v-row>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-4"
          ></v-divider>
          <v-list-item
            color="primary"
            v-else
            :key="item.text"
            :to="item.link === '#' ? null : item.link"
            link
          >
            <v-list-item-action>
              <v-icon size="23" :color="item.color ? item.color : ''">{{
                item.icon
              }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text body-1" link>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    source: String,
  },
  data() {
    return {
      items: [
        { heading: "DASHBOARD" },
        {
          title: "Ecommerce",
          icon: "fa-solid fa-basket-shopping",
          link: "/dashboard",
        },
        { divider: true },
        { heading: "ADMINISTRATION" },
        {
          title: "Users",
          icon: "fa-solid fa-user-astronaut",
          link: "/admin/user",
        },
        {
          title: "Categories",
          icon: "fa-brands fa-slack",
          link: "/admin/category",
        },
        { title: "Products", icon: "fa-solid fa-socks", link: "/admin/product" },
        {
          title: "Orders",
          icon: "fa-solid fa-file-invoice-dollar",
          link: "/admin/orders",
        },
        { title: "Blogs", icon: "fa-solid fa-blog", link: "/admin/blogs" },
        { divider: true },
        { heading: "APPS" },
        { title: "To Do", icon: "fa-solid fa-list", link: "/admin/todo" },
        {
          title: "Calendar",
          icon: "fa-solid fa-calendar-days",
          link: "/admin/calendar",
        },
        {
          title: "Color Picker",
          icon: "fa-solid fa-palette",
          link: "/admin/color",
        },
      ],
      sidebarWidth: 240,
      sidebarMinWidth: 96,
    };
  },
  computed: {
    ...mapGetters({
      getDrawer: "DRAWER_STATE",
    }),
  },
  methods: {
    ...mapActions(["TOGGLE_DRAWER"]),
  },
};
</script>
<style lang="scss" scoped>
.AdminSidebar-container::v-deep .v-navigation-drawer {
  .v-list-item--active .v-list-item__action {
    // color: red;
    animation: spinaround 5s infinite linear;
  }

  .v-list-item--active .v-list-item__title {
    color: #e18aaa !important;
  }

  .logo {
    padding-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  top: 64px !important;
  height: calc(100vh - 64px) !important;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  .v-navigation-drawer__content {
    &::-webkit-scrollbar {
      width: 6px;
      display: none;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #b9b9b9;
      border-radius: 36px;
      border: none;
    }
  }

  .v-list-item:not(.v-list-item--active) {
    .v-icon {
      // color: #b9b9b9;
      color: #696868;
    }
  }

  .v-list-item--active {
    .v-list-item__content {
      .v-list-item__title.grey--text {
        // color: #4a4a4a !important;
        color: #1976d2 !important;
      }
    }
  }

  .v-list-item__title.grey--text {
    color: #696868 !important;
  }

  .text-body-1.subheader.show {
    color: #4db7b3;
  }

  &.drawer-mini {
    .v-list {
      div,
      a {
        &.v-list-item {
          color: #b9b9b9;
          transition: 300ms all;
          padding-left: 16px;
        }
      }
    }
  }

  .v-list {
    div,
    a {
      &.v-list-item {
        padding-left: 32px;
      }

      a.v-list-item {
        padding-left: 32px * 2;
      }
    }
  }

  .subheader {
    color: #b9b9b9;
    transition: 300ms all;
  }

  .hide {
    opacity: 0;
  }

  .show {
    opacity: 1;
  }
}

.v-navigation-drawer--temporary.v-navigation-drawer--clipped {
  z-index: 5;
}
</style>
