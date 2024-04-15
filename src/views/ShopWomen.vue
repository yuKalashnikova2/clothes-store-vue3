<script setup>
import SideBar from '../components/layout/SideBar.vue'
import ProductCardCatalog from '../components/ProductCardCatalog.vue'

</script>

<template>
    <div class="shop">
        <SideBar />
        <div class="shop__content">
          <ProductCardCatalog />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .shop {
        display: flex;
        margin: 0 100px;
        &__content {
            padding: 33px 50px;
        }
    }
</style>