<script setup>
const props = defineProps({
    id: {
        type: String,
        default: 'product_id_1',
    },
    title: {
        type: String,
        default: 'Title',
    },
    price: {
        type: Number,
        default: 100,
    },
    link_img: {
        type: Array,
        default: () => [],
    },
    color: {
        type: Array,
        default: () => [],
    },
})
</script>
<template>
    <div class="order__item">
        <div class="order__item__top">
            <div class="order__item__image">
                <img :src="link_img[0]" alt="image" />
            </div>

            <div class="order__item__info">
                <h2 class="order__item__title">
                    {{ title }}
                    <span> x 1</span>
                </h2>
                <span class="order__item__description"
                    >Color:<span>{{ color[0].name }} </span></span
                >
            </div>
        </div>

        <div class="order__item__price">
            <span>${{ price }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.order__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;
    &__top {
        display: flex;
        gap: 15px;
    }
    &__image {
        width: 63px;
        height: 63px;
        border-radius: 4px;
        overflow: hidden;
        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    &__info {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    &__title {
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 0.02em;
        color: #3c4242;
        & span {
            color: #807d7e;
        }
    }
    &__description {
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 0.02em;
        color: #3c4242;
        & span {
            font-weight: 500;
            color: #807d7e;
        }
    }
    &__price {
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 0.02em;
        color: #807d7e;
    }
}
</style>
