<script setup>
import Title from '../components/Title.vue'
import CardFavorites from '../components/CardFavorites.vue'
import Button from '../components/Button.vue'
import { ref } from 'vue'

const menuList = ref([
    {
        name: 'My orders',
        image: 'orders',
        active: false,
    },
    {
        name: 'Wishlist',
        image: 'favorites',
        active: false,
    },
    {
        name: 'My info',
        image: 'user',
        active: false,
    },
    {
        name: 'Sign out',
        image: 'signout',
        active: false,
    },
])

const cardFavoritesList = ref(['1', '2', '3', '4', '5', '6', '7', '8'])

const toggleClass = (item) => {
    menuList.value.forEach((menuItem) => {
        menuItem.active = false
    })
    item.active = true
}
</script>
<template>
    <div class="favorites">
        <div class="favorites__menu">
            <router-link to="/">Home</router-link>
            <img src="/arrow-left.svg" />
            <router-link to="/user"> My Account</router-link>
            <img src="/arrow-left.svg" />
            <span>Wishlist</span>
        </div>

        <div class="favorites__content">
            <div class="favorites__content__menu">
                <Title title="Hello, User!" decor />
                <span class="favorites__subtitle">Welcome to your Account</span>

                <ul class="favorites__user">
                    <li
                        v-for="(item, index) in menuList"
                        :key="index"
                        @click="toggleClass(item, index)"
                        :class="[
                            'favorites__user__item',
                            { favorites__user__item_active: item.active },
                        ]"
                    >
                        <img
                            :src="'/menuProfile/' + item.image + '.svg'"
                            :alt="item.image"
                        />
                        <span>{{ item.name }}</span>
                    </li>
                </ul>
            </div>

            <div
                v-if="cardFavoritesList.length > 0"
                class="favorites__content__list"
            >
                <Title title="Wishlist" decor="false" />

                <CardFavorites v-for="i in 6" />
            </div>
            <div class="favorites__empty" v-if="cardFavoritesList.length == 0">
                <div class="favorites__empty__image">
                    <img src="/empty.svg" alt="empty" />
                </div>
                <h3 class="favorites__empty__title">Your wishlist is empty</h3>
                <span
                    >You don’t have any products in the wishlist yet. You will
                    find a lot
                </span>
                <span>of interesting products on our Shop page.</span>

                <div class="favorites__empty_margin">
                    <Button label="Continue Shopping" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.favorites {
    padding: 23px 100px 100px 100px;
    @media (max-width: 992px) {
        padding: 23px 30px 30px 30px;
    }
    &__menu {
        display: flex;
        gap: 15px;
        font-weight: 500;
        font-size: 18px;
        color: #3c4242;

        & a {
            color: #807d7e;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    &__content {
        margin-top: 52px;
        display: flex;
        gap: 50px;
        @media (max-width: 992px) {
            flex-direction: column;
        }
        &__list {
            &:nth-child(2) {
                flex-grow: 2;
            }
        }
    }
    &__subtitle {
        font-family: var(--second-family);
        font-weight: 400;
        font-size: 14px;
        line-height: 239%;
        letter-spacing: 0.02em;
        color: #807d7e;
        margin-top: 10px;
        margin-bottom: 40px;
        display: inline-block;
    }
    &__user {
        display: flex;
        flex-direction: column;
        &__item {
            display: flex;
            gap: 15px;
            font-family: var(--font-family);
            font-weight: 600;
            font-size: 18px;
            color: #807d7e;
            background: #fff;
            padding: 11px 37px;
            cursor: pointer;
            border-left: 1px solid #fff;
            &:hover {
                background: #f1efef;
            }
            & img {
                width: 22px;
                height: 22px;
            }
            &_active {
                background: #f6f6f6;
                border-left: 1px solid #3c4242;
            }
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
