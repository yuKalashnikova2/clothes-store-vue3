<script setup>
import ProductCard from './ProductCard.vue';
</script>

<template>
    <div class="product__card__catalog">
        <ProductCard v-for="i in 12" :key="i" />
    </div>
</template>

<style lang="scss" scoped>
    .product__card__catalog {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }
</style>