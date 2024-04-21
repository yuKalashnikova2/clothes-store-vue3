<script setup>
import { ref, onMounted } from 'vue'
import { useAuthUsersStore } from '../stores/authUsers'
import { useRoute } from 'vue-router'
import Title from '../components/Title.vue'
import Button from '../components/Button.vue'
import WishList from '../components/WishList.vue'
import Orders from '../components/Orders.vue'
import router from '../router'

const auth = useAuthUsersStore()
const route = useRoute()
console.log(route.path)
const menuList = ref([
    {
        name: 'My orders',
        image: 'orders',
        active: false,
        path: 'orders',
    },
    {
        name: 'WishList',
        path: 'wishlist',
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
        path: 'signout',
    },
])

const selectedComponent = ref('WishList')

selectedComponent.value = route.path.split('/').pop()

const toggleClass = (item) => {
    menuList.value.forEach((menuItem) => {
        menuItem.active = menuItem === item
    })
    const path = item.path
    router.push({ path })
}
</script>
<template>
    <div class="profile">
        <div class="profile__menu">
            <router-link to="/">Home</router-link>
            <img src="/arrow-left.svg" />
            <router-link to="/user"> My Account</router-link>
            <img src="/arrow-left.svg" />
            <span v-if="selectedComponent === 'WishList'">WishList</span>
            <span v-if="selectedComponent === 'My orders'">My orders</span>
            <span v-if="selectedComponent === 'My info'">My info</span>
            <span v-if="selectedComponent === 'Sign out'">Sign out</span>
        </div>

        <div class="profile__content">
            <div class="profile__content__menu">
                <Title :title="`Hello, ${auth.nikname}!`" :decor="true" />
                <span class="profile__subtitle">Welcome to your Account</span>

                <ul class="profile__user">
                    <li
                        v-for="(item, index) in menuList"
                        :key="index"
                        @click="toggleClass(item, index)"
                        :class="[
                            'profile__user__item',
                            { profile__user__item_active: item.active },
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

            <router-view></router-view>
            <!-- <div v-if="selectedComponent === 'WishList'">
                <WishList />
            </div>

            <div v-if="selectedComponent === 'My orders'">
                <Orders />
            </div>

            <div
                class="profile__signout"
                v-if="selectedComponent === 'Sign out'"
            >
                <Title title="Do you really want to leave?" :decor='false' />

                <router-link to="/signin">
                    <Button label="Yes, I am"
                    @click="auth.signOutUser" />
                </router-link>
            </div> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.profile {
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
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 50px;

        @media (max-width: 1100px) {
            display: flex;
            flex-direction: column;
        }
    }
    &__menu {
        flex-grow: 2;
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
    // &__signout {
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    //     align-items: center;
    //     gap: 30px;
    // }
}
</style>
