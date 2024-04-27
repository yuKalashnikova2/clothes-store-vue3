<script setup>
import { ref, onMounted } from 'vue'
import { useAuthUsersStore } from '../../stores/authUsers'
import CartItem from './CartItem.vue'


const store = useAuthUsersStore()
const dataCart = ref([])

onMounted(async () => {
    await store.getCartItems()
    dataCart.value = store.cartItems
    console.log('МОНТИРОВАНИЕ КОРЗИНЫ', dataCart.value)
})
</script>
<template>
    <div class="cart__list">
        <CartItem />
        <CartItem
            v-for="item in dataCart"
            :key="item.id"
            :price="item.price"
            :title="item.name"
            :link_img="item.link_img"
            :size="item.sizes"
            :colors="item.colors"
            :count="item.count"
        />
    </div>
</template>

<style lang="scss" scoped>
.cart__list {
    display: flex;
    flex-direction: column;
    padding: 70px 100px 100px 100px;
    & > *:not(:last-child) {
        border-bottom: 1px solid #bebcbd;
    }
}
</style>
