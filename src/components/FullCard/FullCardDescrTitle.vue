<script setup>
    const props = defineProps({
        title: {
            type: String,
            default: 'Title',
        }
    })
</script>

<template>
        <span class="description__info__title">{{ title }}</span>
</template>

<style lang="scss" scoped>
        .description__info__title {
        display: block;
        font-weight: 600;
        font-size: 18px;
        color: #3f4646;
        margin-bottom: 25px;
      }
</style>