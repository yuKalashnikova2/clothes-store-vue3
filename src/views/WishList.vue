<script setup>
import { ref, onMounted } from 'vue'
import { useAuthUsersStore } from '../stores/authUsers'
import Title from '../components/Title.vue'
import CardFavorites from '../components/CardFavorites.vue'
import Button from '../components/Button.vue'


const store = useAuthUsersStore()

const datawishlist = ref([])

onMounted(async () => {
    await store.getWishListItems()
    datawishlist.value = store.wishlistItems
    console.log('МОНТИРОВАНИЕ ВИШЛИСТА', datawishlist.value)
})
</script>

<template>
    <div v-if="datawishlist.length > 0" class="favorites__list">
        <Title title="Wishlist" :decor="false" />

        <CardFavorites
            v-for="elem in datawishlist"
            :key="elem.id"
            :elem="elem"
        />
    </div>
    <div class="favorites__empty" v-if="datawishlist.length == 0">
        <div class="favorites__empty__image">
            <img src="/empty.svg" alt="empty" />
        </div>
        <h3 class="favorites__empty__title">Your wishlist is empty</h3>
        <span
            >You don’t have any products in the wishlist yet. You will find a
            lot
        </span>
        <span>of interesting products on our Shop page.</span>

        <div class="favorites__empty_margin">
            <router-link to="/shopmen">
                <Button label="Continue Shopping" />
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.favorites {
    &__list {
        &:nth-child(2) {
            flex-grow: 2;
        }
    }

    &__empty {
        box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05),
            -2px -2px 4px 0 rgba(0, 0, 0, 0.05);
        background: #fff;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 78px;
        @media (max-width: 992px) {
            padding: 30px;
        }
        &__image {
            display: flex;
            justify-content: center;
            align-items: center;
            background: #f0f9f4;
            margin-bottom: 60px;
            border-radius: 50%;
            padding: 43px;
        }
        &__title {
            font-family: var(--second-family);
            font-weight: 600;
            font-size: 34px;
            color: #3c4242;
        }
        & span {
            display: block;
            font-weight: 500;
            font-size: 16px;
            line-height: 125%;
            letter-spacing: 0.02em;
            text-align: center;
            color: #807d7e;
            padding-top: 10px;
        }
        &_margin {
            margin-top: 42px;
        }
    }
}
</style>
