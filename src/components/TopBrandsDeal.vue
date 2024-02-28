<script setup>
import { ref } from 'vue'
const brands = ref(['levis', 'nike', 'puma', 'polo', 'hm'])
</script>

<template>
  <div class="top-brands">
    <div class="top-brands__text">
      <h2 class="top-brands__text__title">Top Brands Deal</h2>
      <span class="top-brands__text__subtitle"
        >Up To <b>60%</b> off on brands</span
      >
    </div>
    <div class="top-brands__image">
      <div class="top-brands__image__item" v-for="brand in brands">
        <img :src="'/brands/' + brand + '.svg'" alt="brand" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-brands {
  display: flex;
  flex-direction: column;
  padding-top: 43px;
  padding-bottom: 60px;
  align-items: center;
  justify-content: space-between;
  border: 1.07px solid #323232;
  border-radius: 12px;
  background: #3c4242;
  @media (max-width: 992px) {
    flex-direction: column;
  }
  &__text {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 67px;
    @media (max-width: 767px) {
      margin-bottom: 30px;
      padding: 10px;
    }
    &__title {
      font-family: var(--second-family);
      font-weight: 800;
      font-size: 50px;
      text-align: center;
      color: #fff;
    }
    &__subtitle {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 22px;
      text-align: center;
      color: #fff;
      & b {
        font-weight: 700;
        color: #fbd103;
      }
    }
  }
  &__image {
    display: flex;
    gap: 24px;
    @media (max-width: 767px) {
      flex-direction: column;
      width: 100%;
      padding: 0 20px;
    }
    &__item {
      background: #fff;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      & img {
        padding: 10px 20px;
      }
    }
  }
}
</style>
