<script setup>
import { ref } from 'vue'
import { useAuthUsersStore } from '../stores/authUsers'
import Button from '../components/Button.vue'

const auth = useAuthUsersStore()

const isDeletedWishlist = ref(false)
const deletedItemFromWishlist = (item) => {
    auth.deleteWishListItems(item)
    isDeletedWishlist.value = true
}
const props = defineProps({
    elem: {
        type: Object,
        default: {},
    },
})
</script>
<template>
    <div class="card">
        <span class="card__deleted" v-if="auth.isDeletedWishlist"
            >Item successfully deleted</span
        >
        <div class="card__close" @click="deletedItemFromWishlist(elem)">
            <img src="/close-cross.svg" alt="close" />
        </div>
        <div class="card__image">
            <img :src="elem.link_img[0] ? elem.link_img[0] : '/no-foto.png'" alt="product" />
        </div>

        <div class="card__info">
            <span>{{ elem.name }}</span>
            <span>Color: <span class="card__info_font-color">Black</span></span>
            <span>Quantity:<span class="card__info_font-color">1</span></span>
        </div>

        <div class="card__price">${{ elem.price }}</div>

        <Button @click="auth.addToCart(elem)" label="Add To Cart" />
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
    &__deleted {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        border-radius: 8px;
        padding: 12px 48px;
        background: #8a33fd;
        color: #fff;
        text-align: center;
        font-weight: 500;
        font-size: 18px;
    }
}
</style>
