<script setup>
import { useAuthUsersStore } from '../stores/authUsers'
import Button from '../components/Button.vue'

const auth = useAuthUsersStore()
</script>

<template>
    <div class="order">
        <div class="order__text">
            <div class="order__image">
                <img src="/confirmed.svg" alt="" />
            </div>

            <div class="order__text_padding">
                <span>Dear {{ auth.user }}, </span>
                <span>You are successfully </span>
                <span>Registered!</span>
            </div>
            <router-link to="/signin">
                <Button label="Sign In" />
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.order {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        margin-top: 50px;
        margin-bottom: 50px;
    }
    &__text {
        border: 1px solid #2a2f2f;
        border-radius: 12px;
        padding: 50px;
        margin: 30px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media (max-width: 1090px) {
            right: 140px;
        }
        @media (max-width: 767px) {
            position: static;
        }
        & span {
            display: block;
            font-family: var(--second-family);
            font-weight: 600;
            font-size: 30px;
            line-height: 111%;
            text-align: center;
            color: #3c4242;
        }
        &_padding {
            margin-bottom: 30px;
        }
    }
    &__image {
        border: 1px solid #d1d3d4;
        border-radius: 50%;
        padding: 35px 19px;
        margin-bottom: 55px;
        @media (max-width: 767px) {
            display: none;
        }
    }
}
</style>
