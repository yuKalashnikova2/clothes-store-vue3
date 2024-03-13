<script setup>
import { ref } from 'vue'
const images = ref([
  '/product.png',
  '/ex.png',
  '/reset-password.png',
  '/product.png',
  '/ex.png',
  '/reset-password.png',
  '/product.png',
  '/ex.png',
  '/reset-password.png',
])
const currentIndex = ref(0)

const prevStep = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length
}

const nextStep = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length
}
</script>

<template>
  <div class="full-card__image__slider">
    <div class="full-card__image__slider__items">
      <div class="full-card__image__slider__items__item">
        <img :src="images[currentIndex - 1]" v-if="currentIndex > 0" />
        <img :src="images[0]" alt="" v-else />
      </div>

      <div
        class="full-card__image__slider__items__item full-card__image__slider__items__item__current"
      >
        <img :src="images[currentIndex]" />
      </div>

      <div class="full-card__image__slider__items__item">
        <img
          :src="images[currentIndex + 1]"
          v-if="currentIndex < images.length - 1"
        />
        <img :src="images[images.length - 1]" alt="" v-else />
      </div>
    </div>

    <div class="full-card__image__slider__arrows">
      <div
        class="full-card__image__slider__arrows__item full-card__image__slider__arrows__item_white"
        @click="prevStep"
      >
        <img src="/arrows-slider-card/arrow-black.svg" alt="arrow" />
      </div>
      <div
        class="full-card__image__slider__arrows__item full-card__image__slider__arrows__item_black"
        @click="nextStep"
      >
        <img src="/arrows-slider-card/arrow-white.svg" alt="arrow" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.full-card__image__slider {
  &__items {
    display: flex;
    flex-direction: column;
    gap: 22px;
    width: 70px;
    transition: all 0.5s ease-in-out;
    @media (max-width: 992px) {
      flex-direction: row;
    }
    &__item {
      border: 2px solid transparent;
      height: 68px;
      transition: transform 0.5s;

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
      display: none;
    }
    &__item {
      cursor: pointer;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      &_white {
        background: white;
        &:hover {
          background: #c3c5c5;
        }
      }
      &_black {
        background: #3c4242;
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
}
</style>
