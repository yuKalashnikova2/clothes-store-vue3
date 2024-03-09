<script setup>
const props = defineProps({
  subtitle: {
    type: String,
    default: 'Subtitle',
  },
  title: {
    type: String,
    default: 'Title',
  },
  percent: {
    type: String,
    default: '50%',
  },
  subtitleTwo: {
    type: String,
    default: 'Something',
  },
  image: {
    type: String,
    default: '/vite.svg',
  },
})

const backgroundStyles = (image) => {
  return {
    'background-image': `url(${image})`,
    'background-size': 'cover',
  }
}
</script>
<template>
  <div class="content__card" :style="backgroundStyles(image)">
    <div class="content__card__text">
      <h6 class="content__card__subtitle">{{ subtitle }}</h6>
      <h2 class="content__card__title">{{ title }}</h2>
      <span class="content__card__percent">{{ percent }}</span>
      <h6 class="content__card__subtitle">{{ subtitleTwo }}</h6>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content__card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-position: top;
  color: #fff;
  padding: 30px 20px;
  border-radius: 12px;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.4);
  width: 100%;
  & img {
    width: 100%;
    height: 100%;
  }
  & h6,
  h2,
  span {
    display: block;
  }
  &__text {
    max-width: 264px;
  }
  &__subtitle {
    font-family: var(--font6);
    font-weight: 800;
    font-size: 18px;
    line-height: 167%;
    letter-spacing: 0.01em;
    padding-bottom: 14px;
  }
  &__title {
    font-family: var(--second-family);
    font-weight: 800;
    font-size: 34px;
    line-height: 133%;
  }
  &__percent {
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 157%;
    letter-spacing: 0.02em;
    padding-bottom: 20px;
  }
}
</style>
