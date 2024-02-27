<script setup>
import CardProduct from './CardProduct.vue'
</script>
<template>
  <div class="card__list">
    <CardProduct />
  </div>
</template>

<style lang="scss" scoped>
.card__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  margin-top: 70px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    margin-top: 25px;
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
