<script setup>
import { useProductsStore } from '../stores/index.js'
const store = useProductsStore()
const props = defineProps({
  title: {
    type: String,
    default: 'Title',
  },
  icon: {
    type: String,
    default: 'filter',
  },
})

const iconRotate = (icon) => {
  if (icon === 'filter') {
   return store.isVisibleCategories ? 'sidebar__header__icon-rotate' : ''
  }
  if (icon === 'arrow-up-prices') {
   return store.isVisiblePrice ? 'sidebar__header__icon-rotate' : ''
  } 
  if (icon === 'arrow-up-colors') {
   return store.isVisibleColors ? 'sidebar__header__icon-rotate' : ''
  } 
  if (icon === 'arrow-up-sizes') {
   return store.isVisibleSize ? 'sidebar__header__icon-rotate' : ''
  } 
}
</script>
<template>
  <header class="sidebar__header">
    <h2 class="sidebar__header__title">{{ title }}</h2>
    <img :class="['sidebar__header__icon', 
    iconRotate(icon)
    ]" :src="'/sidebar/' + icon + '.svg'" alt="filter" />
  </header>
</template>

<style lang="scss" scoped>
.sidebar__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  border-top: 1px solid rgb(190, 188, 189, 0.4);
  border-bottom: 1px solid rgb(190, 188, 189, 0.4);
  cursor: pointer;
  &__title {
    font-weight: 600;
    font-size: 22px;
    letter-spacing: 0.02em;
    color: #807d7e;
  }
  &__icon {
    width: 16px;
    height: 16px;
    transition: transform 0.9s;
      &-rotate {
        transform: rotate(180deg);
        transition: transform 1s;
      }
  
  }
}
</style>
