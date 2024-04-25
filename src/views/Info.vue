<script setup>
import Title from '../components/Title.vue'
import { useAuthUsersStore } from '../stores/authUsers'
const store = useAuthUsersStore()
</script>

<template>
    <div class="info">
        <h1>Info about you</h1>
        <Title :title="`your email: ${store.nikname}`" :decor='false' />
        <span>Welcome to our shop!</span>
    </div>
</template>

<style lang="scss" scoped>
    .info {
        display: flex;
        flex-direction: column;
        gap: 30px;
        font-weight: 600;
           
            color: #807d7e;
            background: #fff;
            & span {
                font-size: 30px;
            }
            & h1 {
                text-decoration: underline;
            }
    }
</style>