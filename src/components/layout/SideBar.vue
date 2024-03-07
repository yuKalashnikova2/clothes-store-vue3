<script setup>
import { ref } from 'vue'
import SidebarTitle from './SidebarTitle.vue'
import { useProductsStore } from '../../stores/index.js'
const store = useProductsStore()

import SidebarSizeItem from './SidebarSizeItem.vue'
import SidebarColorItem from './SidebarColorItem.vue'
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
])

const colors = ref([
  'Black',
  'Blue',
  'Green',
  'Orange',
  'Pink',
  'Purple',
  'Red',
  'White',
  'Yellow',
  'Navy',
  'Gray',
])

const sizes = ref(['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'])
const min = ref(0)
const max = ref(100)
const firstValue = ref(25)

const secondValue = ref(75)

const updateFirstValue = (value) => {
  firstValue.value = value
}
const updateSecondValue = (value) => {
  secondValue.value = value
}

const updateRange = () => {
  min.value = firstValue.value
  max.value = secondValue.value
}
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

    <div class="sidebar__price animation-visible" v-if="store.isVisiblePrice">
      <div class="range-slider">
        <input
          type="range"
          :value="firstValue"
          :min="min"
          :max="max"
          @input="updateFirstValue($event.target.value)"
        />
        <input
          type="range"
          :value="secondValue"
          :min="min"
          :max="max"
          @input="updateSecondValue($event.target.value)"
        />
      </div>
      <div class="sidebar__price__text">
        <div>${{ firstValue }}</div>
        <div>${{ secondValue }}</div>
      </div>
    </div>

    <SidebarTitle
      @click="store.isVisibleColors = !store.isVisibleColors"
      title="Colors"
      icon="arrow-up-colors"
    />
    <div class="sidebar__colors animation-visible" v-if="store.isVisibleColors">
      <SidebarColorItem v-for="color in colors" :key="color" :color="color" />
    </div>

    <SidebarTitle
      @click="store.isVisibleSize = !store.isVisibleSize"
      title="Size"
      icon="arrow-up-sizes"
    />
    <div class="sidebar__size animation-visible" v-if="store.isVisibleSize">
      <SidebarSizeItem v-for="size in sizes" :key="size" :size="size" />
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
    &__text {
      display: flex;
      gap: 30px;
      & div {
        font-weight: 500;
        font-size: 16px;
        color: #3c4242;
        border: 1px solid rgba(190, 188, 189, 0.8);
        border-radius: 8px;
        opacity: 0.8;
        padding: 7px 30px;
        &:hover {
          background: rgba(190, 188, 189, 0.1);
          cursor: pointer;
        }
      }
    }
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

.range-slider {
  width: 200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  & input {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    &::-webkit-slider-thumb {
      z-index: 2;
      position: relative;
      top: 2px;
      margin-top: -7px;
    }
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
