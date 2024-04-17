<script setup>
import { ref, computed } from 'vue'
import Carousel from './slidercomponent/Carousel.vue'
import Slide from './slidercomponent/Slide.vue'
import FeedbacCard from './FeedbacCard.vue'

const feedbacks = ref([
    {
        name: 'Jane Cooper',
        descr: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
        name: 'Ronald Richards',
        descr: 'ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
        name: 'Savannah Nguyen',
        descr: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    { name: 'Name 1', description: 'Description 1' },
    { name: 'Name 2', description: 'Description 2' },
    { name: 'Name 3', description: 'Description 3' },
    { name: 'Name 4', description: 'Description 4' },
    { name: 'Name 5', description: 'Description 5' },
    { name: 'Name 6', description: 'Description 6' },
])

const chunkedFeedbacks = computed(() => {
    const chunkSize = 3
    const result = []
    for (let i = 0; i < feedbacks.value.length - 1; i += chunkSize) {
        result.push(feedbacks.value.slice(i, i + chunkSize))
    }
    return result
})
</script>

<template>
    <Carousel v-slot="{ currentSlide }">
        <Slide v-for="(el, index) in chunkedFeedbacks" :key="index">
            <div
                v-show="currentSlide === index + 1"
                class="carousel__slide-info"
            >
                <FeedbacCard
                    v-for="(feedback, i) in el"
                    :name="feedback.name"
                    :description="feedback.description"
                />
            </div>
        </Slide>
    </Carousel>
</template>
