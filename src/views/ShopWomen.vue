<script setup>
import { onMounted } from 'vue'
import SideBar from '../components/layout/SideBar.vue'
import ProductCardCatalog from '../components/ProductCardCatalog.vue'

onMounted(() => {
    window.scrollTo(0,0)
})
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