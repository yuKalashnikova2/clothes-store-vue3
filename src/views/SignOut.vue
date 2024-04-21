<script setup>
import { useAuthUsersStore } from '../stores/authUsers'
import Title from '../components/Title.vue'
import Button from '../components/Button.vue'

const auth = useAuthUsersStore()
</script>
<template>
     <div class="profile__signout">
    
                <Title title="Do you really want to leave?" :decor='false' />

                <router-link to="/signin">
                    <Button label="Yes, I am"
                    @click="auth.signOutUser" />
                </router-link>
        </div>
</template>

<style lang="scss" scoped>
  .profile__signout {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }
</style>