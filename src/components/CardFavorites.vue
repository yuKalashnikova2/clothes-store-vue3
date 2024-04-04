<script setup>
import Button from '../components/Button.vue'
</script>
<template>
    <div class="card">
        <div class="card__close">
            <img src="/close-cross.svg" alt="close" />
        </div>
        <div class="card__image">
            <img src="/product.png" alt="product" />
        </div>

        <div class="card__info">
            <span>Title Card</span>
            <span>Color: <span class="card__info_font-color">Black</span></span>
            <span>Quantity: <span class="card__info_font-color">1</span></span>
        </div>

        <div class="card__price">$23.00</div>

        <Button label="Add To Cart" />
    </div>
</template>

<style lang="scss" scoped>
.card {
    display: flex;
    gap: 36px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #edeef2;
    padding: 30px 0;
    width: 100%;
    @media (max-width: 992px) {
        flex-direction: column;
        align-items: flex-start;
    }

    &__close {
        width: 22px;
        height: 22px;
        cursor: pointer;
    }
    &__image {
        width: 110px;
        height: 110px;
        border-radius: 4px;
        overflow: hidden;
        & img {
            width: 100%;
        }
    }
    &__info {
        display: flex;
        flex-direction: column;
        gap: 12px;
        font-weight: 700;
        font-size: 22px;
        letter-spacing: 0.02em;
        color: #3c4242;
        flex-grow: 2;
        &_font-color {
            font-weight: 500;
            color: #807d7e;
        }
    }
    &__price {
        font-weight: 700;
        font-size: 22px;
        letter-spacing: 0.02em;
        color: #807d7e;
    }
}
</style>
