<script setup>
import WidgetCard from './WidgetCard.vue'
</script>
<template>
  <div class="content__card__list">
    <WidgetCard
      title="High Coziness"
      subtitle="Low Price"
      percent="UPTO 50% OFF"
      subtitle-two="Explore Items"
      image="content/content-1.png"
    />
    <WidgetCard
      title="Breezy Summer Style"
      subtitle="Beyoung Presents"
      percent="UPTO 50% OFF"
      subtitle-two="Explore Items"
      image="content/content-2.png"
    />
  </div>
</template>

<style lang="scss" scoped>
.content__card__list {
  display: flex;
  gap: 30px;
  @media (max-width: 992px) {
    flex-direction: column;
  }
}
</style>
