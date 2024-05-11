<script setup>
import { ref } from 'vue'
import CarouselFeedItem from './CarouselFeedItem.vue'
import CarouselFeedDots from './CarouselFeedDots.vue'

const slides = ref([1, 2, 3])

const currenSlide = ref(0)
const direction = ref('right')
const setCurrenSlide = (index) => {
    currenSlide.value = index
}

const prev = (step = -1) => {
    const index =
        currenSlide.value > 0
            ? currenSlide.value + step
            : slides.value.length - 1
    setCurrenSlide(index)
    direction.value = 'left'
}
const next = (step = 1) => {
    const index =
        currenSlide.value < slides.value.length - 1
            ? currenSlide.value + step
            : 0
    setCurrenSlide(index)
    direction.value = 'right'
}

const swtchSlide = (index) => {
    const step = index - currenSlide.value
    if (step > 0) {
        next(step)
    } else {
        prev(step)
    }
}
</script>

<template>
    <div class="carousel">
        <div class="carousel__inner">
            <CarouselFeedDots
                :total="slides.length"
                :currentIndex="currenSlide"
                @switch="swtchSlide($event)"
            />
            <CarouselFeedItem
                v-for="(slide, index) in slides"
                :slide="slide"
                :key="index"
                :index="index"
                :currenSlide="currenSlide"
                :direction="direction"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.carousel {
    display: flex;
    justify-content: space-between;
    &__inner {
        position: relative;
        width: 1200px;
        height: 400px;
        overflow: hidden;
        border-radius: 12px;
        @media (max-width: 992px) {
            max-width: 800px;
        }
        @media (max-width: 767px) {
            max-width: 400px;
            height: 1000px;
        }
    }
}
</style>
