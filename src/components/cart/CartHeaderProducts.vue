<script setup>
import { ref } from 'vue'

const cartHeaders = ref([
  'Product Details',
  'Price',
  'Quantity',
  'Shipping',
  'Subtotal',
  'Action',
])
</script>
<template>
  <ul class="header__cart">
    <li v-for="header in cartHeaders" class="header__cart__item">
      {{ header }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.header__cart {
  display: flex;
  justify-content: space-between;
  background: #3c4242;
  padding: 26px 100px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
}
</style>
