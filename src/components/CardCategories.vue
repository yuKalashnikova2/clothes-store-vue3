<script setup>
const props = defineProps({
    products: {
        type: Array,
        required: true,
    },
    isMale: {
        type: Boolean,
        required: false,
    },
})
</script>

<template>
    <div class="card__product" v-for="product in products">
        <div class="card__product__image">
            <img :src="product.link_img[0]" :alt="product.name" />
        </div>

        <div class="card__product__info">
            <div class="card__product__text">
                <h5 class="card__product__title">{{ product.name }}</h5>
                <h3 class="card__product__subtitle">Explore Now!</h3>
            </div>
            <router-link :to="isMale ? '/shopmen' : '/shopwomen'">
                <img class="card__product__arrow" src="/arrow.svg" alt="next" />
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card__product {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 10px;

    &__info {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__image {
        width: 100%;
        object-fit: cover;
        overflow: hidden;
        border-radius: 10px;
        height: 270px;
        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    &__title {
        font-weight: 700;
        font-size: 17px;

        letter-spacing: -0.04em;
        color: #2a2f2f;
        padding-bottom: 3px;
    }
    &__subtitle {
        font-weight: 500;
        font-size: 13px;

        letter-spacing: -0.04em;
        color: #7f7f7f;
    }
    &__arrow {
        width: 20px;
        height: 14px;
        cursor: pointer;

        img {
            width: 100%;
        }
        &:hover {
            transform: translateX(0.25rem);
            transition-duration: 150ms;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
    }
}
</style>
