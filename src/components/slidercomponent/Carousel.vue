<script setup>
import { ref, onMounted } from 'vue'
const currentSlide = ref(1)
const getSlideCount = ref(3)

const nextSlide = () => {
    if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1
    }
    currentSlide.value += 1
    console.log('КНОПКА ВПЕРЕД', currentSlide.value, getSlideCount.value)
}

const prevSlide = () => {
    if (currentSlide.value === 1) {
        currentSlide.value = 1
    } else {
        currentSlide.value--
    }

    console.log('КНОПКА Назад', currentSlide.value)
}

onMounted(() => {
    const slides = [...document.querySelectorAll('.slide')]
    console.log(getSlideCount.value, slides, 'Здесь по селектору коллекция')
})
</script>
<template>
    <div class="carousel">
        <slot :currentSlide="currentSlide"></slot>
        <!-- NAVIGATION-->
        <div class="carousel__buttons">
            <div @click="prevSlide" class="carousel__buttons__dot"></div>
            <div @click="nextSlide" class="carousel__buttons__dot"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.carousel {
    &__buttons {
        display: flex;
        justify-content: center;
        gap: 4px;
        margin-top: 13px;

        &__dot {
            width: 8px;
            height: 8px;
            background-color: #bebcbd;
            border-radius: 50%;
            cursor: pointer;
            &_active {
                background-color: #3c4242;
            }
        }
    }
}
</style>
