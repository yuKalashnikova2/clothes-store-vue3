<script setup>
import { ref } from 'vue'
const addWish = ref(false)

const props = defineProps({
  id: {
    type: String,
    default: 'product_id_1',
  },
  title: {
    type: String,
    default: 'Title',
  },
  subtitle: {
    type: String,
    default: 'Subtitle',
  },
  price: {
    type: Number,
    default: 100,
  },
  imageUrl: {
    type: String,
    default: '/product.png',
  }
})
</script>
<template>
  <div class="product__card">
    <div class="product__card__view">
      <div class="product__card__view__image">
        <img :src="imageUrl" :alt="title" />
      </div>

      <button @click="addWish = !addWish" class="product__card__view__wishlist">
        <img
          :class="[
            'product__card__view__wishlist__icon',
            addWish ? 'product__card__view__wishlist__icon_purple' : '',
          ]"
          :src="addWish ? '/heart/heart-light.svg' : '/heart/heart.svg'"
          alt="wish"
        />
      </button>
    </div>

    <router-link :to="'/fullcardproduct/' + id"> 
      <div class="product__card__info">
      <div class="product__card__info__group">
        <span class="product__card__info__group__title">{{ title }}</span>
        <span class="product__card__info__group__subtitle">{{ subtitle }}</span>
      </div>
      <div class="product__card__info__price">${{ price }}.00</div>
    </div>
    </router-link>
  
  </div>
</template>

<style lang="scss" scoped>
.product__card {
  display: flex;
  flex-direction: column;
  gap: 30px;
  &__view {
    width: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 12px;
    position: relative;
    &__image {
      width: 282px;
      height: 370px;
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__wishlist {
      position: absolute;
      z-index: 3;
      top: 26px;
      right: 20px;
      border-radius: 50%;
      border: none;
      &:hover {
        background: #8a33fd;
        cursor: pointer;
        transition: 0.2s ease-in-out;
    
      }

      &__icon {
        padding: 10px;
        &_purple {
          background: #8a33fd;
          border-radius: 50%;
        }
      }
    }
  }
  &__info {
    display: flex;
    justify-content: space-between;
    &__group {
      display: flex;
      flex-direction: column;
      gap: 5px;
      &__title {
        font-weight: 600;
        font-size: 16px;
        color: #3c4242;
      }
      &__subtitle {
        font-weight: 500;
        font-size: 14px;
        color: #807d7e;
      }
    }
    &__price {
      font-weight: 700;
      font-size: 14px;
      text-align: center;
      color: #3c4242;
      border-radius: 8px;
      width: 82px;
      height: 36px;
      background: #f6f6f6;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
