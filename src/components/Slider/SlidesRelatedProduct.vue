<template>
    <div class="container">
        <!-- <ProductBlockVue /> -->
        <v-sheet class="mx-auto" elevation="8" max-width="1080">
            <v-slide-group v-model="getProductItem" class="pa-4" active-class="success" show-arrows>
                <v-slide-item v-for="item in getProductItem" :key="item.productId">
                    <v-card class="ma-4" height='320' align="center" justify="center" width="100%">
                        <ProductBlockVue :product='item' />
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-sheet>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';
import ProductBlockVue from './ProductBlock.vue';
export default {
    name: "slider-related",
    components: {
        ProductBlockVue
    },
    comments: {
        ...mapGetters(["GET_PRODUCT_ITEMS"])
    },
    computed: {
        getProductItem() {
            return this.$store.state.productData;
        },
    },

}
</script>

<style lang="scss" scoped>
.container {
    position: relative;
}
</style>