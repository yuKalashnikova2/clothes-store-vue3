<script setup>
import { useFullCardStore } from '../../stores/fullcard.js'

const store = useFullCardStore()
</script>
<template>
  <div class="product-details">
    <div v-for="item in store.productDetails" class="product-details__item">
      <div class="product-details__item__icon">
        <img
          :src="'/details-product/' + item.image + '.svg'"
          alt="credit-card"
        />
      </div>

      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 35px;
  &__item {
    display: flex;
    gap: 15px;
    align-items: center;
    margin-bottom: 20px;
    &__icon {
      background: #f6f6f6;
      border-radius: 50%;
      width: 44px;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & span {
      font-weight: 500;
      font-size: 18px;
      color: #3c4242;
    }
  }
}
</style>
