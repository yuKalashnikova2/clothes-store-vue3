<script setup>
import { ref } from 'vue'
import SidebarTitle from './SidebarTitle.vue'
import { useProductsStore } from '../stores/index.js'
const store = useProductsStore()

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

const getColorClass = (color) => {
  if (color === 'Red') {
    return 'sidebar__colors__item__decor_bg-red'
  }
  if (color === 'Blue') {
    return 'sidebar__colors__item__decor_bg-blue'
  }
  if (color === 'Black') {
    return 'sidebar__colors__item__decor_bg-black'
  }
  if (color === 'White') {
    return 'sidebar__colors__item__decor_bg-white'
  }
  if (color === 'Green') {
    return 'sidebar__colors__item__decor_bg-green'
  }
  if (color === 'Yellow') {
    return 'sidebar__colors__item__decor_bg-yellow'
  }
  if (color === 'Navy') {
    return 'sidebar__colors__item__decor_bg-navy'
  }
  if (color === 'Purple') {
    return 'sidebar__colors__item__decor_bg-purple'
  }
  if (color === 'Orange') {
    return 'sidebar__colors__item__decor_bg-orange'
  }
  if (color === 'Gray') {
    return 'sidebar__colors__item__decor_bg-gray'
  }
  if (color === 'Pink') {
    return 'sidebar__colors__item__decor_bg-pink'
  }
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
      <div class="sidebar__colors__item" v-for="color in colors" :key="color">
        <div
          :class="['sidebar__colors__item__decor', getColorClass(color)]"
        ></div>
        <span>{{ color }}</span>
      </div>
    </div>

    <SidebarTitle
      @click="store.isVisibleSize = !store.isVisibleSize"
      title="Size"
      icon="arrow-up-sizes"
    />
    <div class="sidebar__size animation-visible" v-if="store.isVisibleSize">
      <div class="sidebar__size__item">XXS</div>
      <div class="sidebar__size__item">XS</div>
      <div class="sidebar__size__item">S</div>
      <div class="sidebar__size__item">M</div>
      <div class="sidebar__size__item">L</div>
      <div class="sidebar__size__item">XL</div>
      <div class="sidebar__size__item">XXL</div>
      <div class="sidebar__size__item">3XL</div>
      <div class="sidebar__size__item">4XL</div>
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
    &__item {
      display: flex;
      flex-direction: column;
      gap: 18px;
      align-items: center;
      & span {
        font-weight: 600;
        font-size: 14px;
        color: #8a8989;
      }
      &__decor {
        border-radius: 12px;
        width: 36px;
        height: 36px;

        &_bg-purple {
          background: #8434e1;
        }
        &_bg-black {
          background: #252525;
        }
        &_bg-red {
          background: #f35528;
        }
        &_bg-orange {
          background: #f16f2b;
        }
        &_bg-navy {
          background: #345eff;
        }
        &_bg-white {
          background: #fff;
          border: 0.97px solid #f4f1f1;
          box-sizing: border-box;
        }
        &_bg-brown {
          background: #d67e3b;
        }
        &_bg-green {
          background: #48bc4e;
        }
        &_bg-yellow {
          background: #fdc761;
        }
        &_bg-gray {
          background: #e4e5e8;
        }
        &_bg-pink {
          background: #e08d9d;
        }

        &_bg-blue {
          background: #3fdeff;
        }
      }
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
  &__size {
    padding: 40px 34px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    box-sizing: border-box;
    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 14px;
      color: #3c4242;
      padding: 8px 22px;
      border: 1px solid rgba(190, 188, 189, 0.8);
      border-radius: 8px;
      &:hover {
        background: rgba(190, 188, 189, 0.1);
        cursor: pointer;
      }
    }
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
