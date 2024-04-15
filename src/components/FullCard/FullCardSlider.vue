<script setup>
import { ref } from 'vue'
const props = defineProps({
    images: {
        type: Array,
        default: () => [],
    },
})

const emit = defineEmits(['imageChanged'])
const currentIndex = ref(0)
const prevStep = (arr) => {
    currentIndex.value = (currentIndex.value - 1 + arr.length) % arr.length
    emit('imageChanged', arr[currentIndex.value])
}

const nextStep = (arr) => {
    currentIndex.value = (currentIndex.value + 1) % arr.length
    emit('imageChanged', arr[currentIndex.value])
}
</script>

<template>
    <div class="slider">
        <div class="slider__items">
            <div class="slider__items__item">
                <img :src="images[currentIndex - 1]" v-if="currentIndex > 0" />
                <img :src="images[0]" alt="" v-else />
            </div>

            <div class="slider__items__item slider__items__item__current">
                <img :src="images[currentIndex]" />
            </div>

            <div class="slider__items__item">
                <img
                    :src="images[currentIndex + 1]"
                    v-if="currentIndex < images.length - 1"
                />
                <img :src="images[images.length - 1]" alt="" v-else />
            </div>
        </div>

        <div class="slider__arrows">
            <div
                class="slider__arrows__item slider__arrows__item_white"
                @click="prevStep(images)"
            >
                <img src="/arrows-slider-card/arrow-black.svg" alt="arrow" />
            </div>
            <div
                class="slider__arrows__item slider__arrows__item_black"
                @click="nextStep(images)"
            >
                <img src="/arrows-slider-card/arrow-white.svg" alt="arrow" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.slider {
    @media (max-width: 992px) {
        padding-top: 20px;
    }
    &__items {
        display: flex;
        flex-direction: column;
        gap: 22px;
        width: 70px;
        transition: all 0.5s ease-in-out;
        @media (max-width: 992px) {
            flex-direction: row;
            width: auto;
        }
        &__item {
            border: 2px solid transparent;
            height: 68px;
            transition: transform 0.5s;
            @media (max-width: 992px) {
                height: auto;
            }
            & img {
                object-fit: cover;
                width: 100%;
                height: 100%;
                border-radius: 9px;
                padding: 5px;

                @media (max-width: 992px) {
                    width: 88px;
                    height: 88px;
                }
            }
            &__current {
                border: 1px solid #3c4242;
                border-radius: 9px;
            }
        }
    }
    &__arrows {
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-items: center;
        justify-content: center;
        margin-top: 24px;
        @media (max-width: 992px) {
            flex-direction: row;
        }
        &__item {
            cursor: pointer;
            width: 22px;
            height: 22px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            @media (max-width: 992px) {
                width: 44px;
                height: 44px;
            }
            &_white {
                background: white;
                &:hover {
                    background: #c3c5c5;
                }
                @media (max-width: 992px) {
                    transform: rotate(270deg);
                }
            }
            &_black {
                background: #3c4242;
                &:hover {
                    opacity: 0.6;
                }
                @media (max-width: 992px) {
                    transform: rotate(270deg);
                }
            }
        }
    }
}
</style>
