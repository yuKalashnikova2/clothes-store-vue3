<script setup>
import { ref, onMounted } from 'vue'
import OrderSummaryItem from './OrderSummaryItem.vue'

import { useAuthUsersStore } from '../stores/authUsers'

const store = useAuthUsersStore()
const dataOrder = ref([])

onMounted(async () => {
    await store.getCartItems()
    dataOrder.value = store.cartItems
    console.log('МОНТИРОВАНИЕ ORDER', dataOrder.value)
})
</script>

<template>
    <div class="order__list">
        <OrderSummaryItem
            v-for="item in dataOrder"
            :key="item.id"
            :link_img="item.link_img"
            :title="item.name"
            :price="item.price"
            :color="item.colors"
        />
    </div>
</template>

<style lang="scss" scoped>
.order__list {
    display: flex;
    flex-direction: column;
    & > * {
        border-top: 1px solid #edeef2;
    }
}
</style>
