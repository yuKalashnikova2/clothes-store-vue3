<script setup>
import Title from '../components/Title.vue'
import CardOrder from '../components/CardOrder.vue'
</script>
<template>
    <div class="orders">
        <Title title="My Orders" decor="false" />

        <div class="orders__list">
            <CardOrder v-for="i in 6" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.orders {
    &__list {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        & > * {
            border-top: 2px solid #f6f6f6;
        }
        &:last-child {
            border-bottom: 2px solid #f6f6f6;
        }
    }
}
</style>
