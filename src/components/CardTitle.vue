<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Title',
  },
})
</script>

<template>
  <div class="card__title">
    <div class="card__title__decor"></div>
    <h2 class="card__title__text">{{ title }}</h2>
  </div>
</template>

<style lang="scss" scoped>
.card__title {
  display: flex;
  gap: 20px;
  @media (max-width: 767px) {
    gap: 10px;
  }
  &__decor {
    border-radius: 10px;
    width: 6px;
    height: 30px;
    background: #8a33fd;
    @media (max-width: 400px) {
      height: 60px;
    }
  }
  &__text {
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 34px;
    line-height: 99%;
    letter-spacing: 0.02em;
    color: #3c4242;
  }
}
</style>
