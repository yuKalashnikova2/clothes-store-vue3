<script setup>
import { useCartStore } from '../../stores/cart.js'

const store = useCartStore()

</script>

<template>
    <div class="counter">
        <div class="counter__button"
        @click="store.minusCounter">-</div>
        <div>{{ store.counter }}</div>
        <div class="counter__button"
        @click="store.plusCounter">+</div>
    </div>
</template>

<style lang="scss" scoped>
    .counter {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        background: #f6f6f6;
        border-radius: 12px;
        width: 100px;
        font-weight: 500;
        font-size: 12px;
        color: #3c4242;
        padding: 11px 23px;
        & > div {
            display: inline-block;
            width: 20px;
        }
        &__button {
            font-size: 20px;
            font-weight: 400;
            cursor: pointer;
        }
    }
</style>