<script setup>
import ContentCard from './ContentCard.vue'
</script>
<template>
  <div class="content__card__list">
    <ContentCard
      title="High Coziness"
      subtitle="Low Price"
      percent="UPTO 50% OFF"
      subtitle-two="Explore Items"
      image="content/content-1.png"
    />
    <ContentCard
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
