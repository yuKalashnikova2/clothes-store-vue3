<script setup>
import { onMounted } from 'vue'
import SideBar from '../components/layout/SideBar.vue'
import ProductCardCatalogMen from '../components/ProductCardCatalogMen.vue'

onMounted(() => {
    window.scrollTo(0, 0)
})

import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const changePath = (value) => {
    if (value !== undefined) {
        router.push({ path: route.path, query: { value } })
    }
}

onMounted(() => {
    changePath()
})
</script>

<template>
    <div class="shop">
        <SideBar @change-path="changePath" />
        <div class="shop__content">
            <ProductCardCatalogMen />
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
    @media (max-width: 992px) {
        flex-direction: column;
        margin: 0;
    }
}
</style>
