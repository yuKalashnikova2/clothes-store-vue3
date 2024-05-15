<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    images: {
        type: Array,
        default: () => [],
    },
})
const emit = defineEmits(['imageChanged'])

const visibleImagesCount = ref(1)
const currentIndex = ref(0)
const selectedImage = ref('')
const offset = ref(0)

function updateView() {
    if (props.images.length > 3) {
        offset.value = -currentIndex.value * 68
    }

    selectedImage.value = props.images[currentIndex.value]
    emit('imageChanged', selectedImage.value)
}

const upArrow = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--
        updateView()
    }
}

const downArrow = () => {
    if (currentIndex.value < props.images.length - visibleImagesCount.value) {
        currentIndex.value++
        updateView()
    }
}

const getCurrentIndexClass = (index) => {
    return {
        'rotator-images__item__current': index === currentIndex.value,
    }
}

watch(currentIndex, () => {
    updateView()
})
</script>

<template>
    <div class="rotator">
        <div class="rotator-view">
            <div
                class="rotator-images"
                :style="{ transform: `translateY(${offset}px)` }"
            >
                <div
                    v-for="(image, index) in props.images"
                    :key="image"
                    class="rotator-images__item"
                    :class="getCurrentIndexClass(index)"
                >
                    <img :src="image" />
                </div>
            </div>
        </div>
        <div class="slider__arrows">
            <div
                class="slider__arrows__item slider__arrows__item_white"
                @click="upArrow"
            >
                <img src="/arrows-slider-card/arrow-black.svg" alt="arrow" />
            </div>
            <div
                class="slider__arrows__item slider__arrows__item_black"
                @click="downArrow"
            >
                <img src="/arrows-slider-card/arrow-white.svg" alt="arrow" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.rotator-view {
    width: 100%;
    height: 300px;
    overflow: hidden;
    @media (max-width: 992px) {
        height: 100px;
    }
}

.rotator-images {
    // display: flex;
    // flex-direction: column;
    transition: transform 0.3s ease-in-out;
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
            height: 68px;
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
.slider__arrows {
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
</style>
