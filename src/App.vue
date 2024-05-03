<script setup>
import { onMounted } from 'vue'
import { useAuthUsersStore } from './stores/authUsers'

const auth = useAuthUsersStore()
onMounted(() => {
    auth.changeStatusUser()
    console.log('app mounted')
})
</script>

<template>
    <div class="container">
        <RouterView name="header"></RouterView>
        <RouterView name="main"></RouterView>
        <RouterView name="footer"></RouterView>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 1440px;
    margin: 0 auto;
    background: #fff;
}
</style>
