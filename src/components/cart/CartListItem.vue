<script setup>
    import CartItem from './CartItem.vue';
</script>
<template>
    <div class="cart__list">
        <CartItem v-for="i in 5" />
    </div>
</template>

<style lang="scss" scoped>
    .cart__list {
        display: flex;
        flex-direction: column;
        padding: 70px 100px 100px 100px;
        & > *:not(:last-child) {
            border-bottom: 1px solid #BEBCBD;
        }
    }
</style>