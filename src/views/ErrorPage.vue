<script setup>
import Button from '../components/Button.vue'
</script>

<template>
    <div class="error">
        <div class="error__image">
            <img src="/error.png" alt="empty" />
        </div>

        <div class="error__info">
            <h2 class="error__title">Your cart is empty and sad :(</h2>
            <span class="error__description"
                >Add something to make it happy!</span
            >
        </div>
        <router-link to="/">
            <Button label="Back to HomePage" />
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.error {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 100px;
    &__image {
        max-width: 395px;
        margin-bottom: 14px;
    }
    &__info {
        margin-bottom: 42px;
    }
    &__title {
        font-family: var(--second-family);
        font-weight: 600;
        font-size: 34px;
        color: #000;
        margin-bottom: 12px;
    }
    &__description {
        font-size: 16px;
        line-height: 125%;
        letter-spacing: 0.02em;
        text-align: center;
        color: #807d7e;
    }
}
</style>
