<script setup>
import Button from '../Button.vue'
</script>

<template>
    <div class="empty__cart">
        <div class="empty__cart__image">
            <img src="/empty-cart.png" alt="empty" />
        </div>

        <div>
            <h2 class="empty__cart__title">Your cart is empty and sad :(</h2>
            <span class="empty__cart__description"
                >Add something to make it happy!</span
            >
        </div>

        <Button label="Continue Shopping" />
    </div>
</template>

<style lang="scss" scoped>
.empty__cart {
    display: flex;
    flex-direction: column;
    gap: 50px;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 100px;
    &__image {
        max-width: 500px;
    }
    &__title {
        font-family: var(--second-family);
        font-weight: 600;
        font-size: 34px;
        color: #000;
        margin-bottom: 12px;
    }
    &__description {
        font-weight: 400;
        font-size: 16px;
        color: #807d7e;
    }
}
</style>
