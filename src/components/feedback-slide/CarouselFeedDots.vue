<script setup>
const props = defineProps({
    total: {
        type: Array,
        required: true,
    },
    currentIndex: {
        type: Number,
        default: 1,
    },
})
const emit = defineEmits(['switch'])
</script>

<template>
    <div class="carousel__dots">
        <button
            :class="[
                'carousel__dots__item',
                { carousel__dots__item_active: currentIndex === index },
            ]"
            v-for="(item, index) in total"
            :key="index"
            @click="emit('switch', index)"
        ></button>
    </div>
</template>

<style lang="scss" scoped>
.carousel__dots {
    position: absolute;
    z-index: 2;
    left: 50%;
    bottom: 47px;
    transform: translateX(-50%);
    &__item {
        width: 8px;
        height: 8px;
        background: #BEBCBD;
        border: none;
        margin: 0.2em;
        border-radius: 50%;
        cursor: pointer;
        &_active {
            background: #3C4242;
        }
    }
}
</style>
