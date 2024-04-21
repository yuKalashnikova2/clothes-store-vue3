<script setup>
import ToggleItem from './ToggleItem.vue'
</script>

<template>
    <div class="toggle__list">
        <ToggleItem link="/user/wishlist" />
        <ToggleItem link="/user" />
        <ToggleItem link="/cart" />
    </div>
</template>

<style lang="scss" scoped>
.toggle__list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
}
</style>
