<script setup>
import OrderSummaryItem from './OrderSummaryItem.vue'
</script>

<template>
    <div class="order__list">
        <OrderSummaryItem />
        <OrderSummaryItem />
        <OrderSummaryItem />
    </div>
</template>

<style lang="scss" scoped>
    .order__list {
        display: flex;
        flex-direction: column;
        & > * {
            border-top: 1px solid #EDEEF2;
        }
    }
</style>