<script setup>
import { ref } from 'vue'
import SidebarTitle from './SidebarTitle.vue'
import { useProductsStore } from '../../stores/index.js'
import { useFirebaseStore } from '../../stores/getDB'
const store = useProductsStore()
const db = useFirebaseStore()

import SidebarSizeItem from './SidebarSizeItem.vue'
import SidebarColorItem from './SidebarColorItem.vue'
import InputDubbleRange from './InputDubbleRange.vue'
const categoriesClothes = ref([
  'Jeans',
  'Payjamas',
  'Joggers',
  'Full sleeve T-shirts',
  'Boxers',
  'Kurti',
  'Plain T-shirts',
  'Printed T-shirts',
  'Tops',
  'Dresses'
])

// const colors = ref([
//   'Black',
//   'Blue',
//   'Green',
//   'Orange',
//   'Pink',
//   'Purple',
//   'Red',
//   'White',
//   'Yellow',
//   'Navy',
//   'Gray',
// ])


</script>

<template>
  <div class="sidebar">
    <SidebarTitle
      @click="store.isVisibleCategories = !store.isVisibleCategories"
      title="Filter"
      icon="filter"
    />
    <div
      class="sidebar__categories animation-visible"
      v-if="store.isVisibleCategories"
    >
      <ul class="sidebar__categories__list">
        <li
          class="sidebar__categories__list__item"
          v-for="category in categoriesClothes"
        >
          {{ category }}
          <img src="/arrow-rigth.svg" alt="arrow-rigth" />
        </li>
      </ul>
    </div>

    <SidebarTitle
      @click="store.isVisiblePrice = !store.isVisiblePrice"
      title="Price"
      icon="arrow-up-prices"
    />
    <div class=" animation-visible" v-if="store.isVisiblePrice">
      <InputDubbleRange />
    </div>
  

    <SidebarTitle
      @click="store.isVisibleColors = !store.isVisibleColors"
      title="Colors"
      icon="arrow-up-colors"
    />
    <div class="sidebar__colors animation-visible" v-if="store.isVisibleColors">
      <SidebarColorItem v-for="color in db.colors" :key="color.id" :color="color.name" />
    </div>

    <SidebarTitle
      @click="store.isVisibleSize = !store.isVisibleSize"
      title="Size"
      icon="arrow-up-sizes"
    />
    <div class="sidebar__size animation-visible" v-if="store.isVisibleSize">
      <SidebarSizeItem v-for="size in db.sizes" :key="size.id" :size="size.name" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  min-width: 295px;
  border-right: 1px solid rgb(190, 188, 189, 0.4);
  border-left: 1px solid rgb(190, 188, 189, 0.4);
  &__categories {
    padding: 40px 0;

    &__list {
      display: flex;
      flex-direction: column;

      &__item {
        font-weight: 600;
        font-size: 16px;
        color: #8a8989;
        display: flex;
        justify-content: space-between;
        padding: 9px 33px;

        &:hover {
          background: rgb(190, 188, 189, 0.4);
          cursor: pointer;
          transition: 0.2s ease-in-out;
        }
      }
    }
  }
  &__price {
    padding: 40px 34px;
    display: flex;
    flex-direction: column;
    gap: 20px;

  }
  &__colors {
    padding: 40px 34px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
  }
  &__size {
    padding: 40px 34px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    box-sizing: border-box;
  }


}


.animation-visible {
  animation: slideInFromTop 1s ease forwards;

  @keyframes slideInFromTop {
    from {
      transform: translateY(-10%);
    }
    to {
      transform: translateY(0);
    }
  }
}


</style>
