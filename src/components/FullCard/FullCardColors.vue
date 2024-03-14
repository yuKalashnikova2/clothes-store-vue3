<script setup>
import { useFullCardStore } from '../../stores/fullcard.js'
import FullCardDescrTitle from './FullCardDescrTitle.vue';

const store = useFullCardStore()
</script>

<template>
  <div class="colors">
    <FullCardDescrTitle title="Colors Available" />
    <div class="colors__list">
      <div
        v-for="color in store.colors"
        :key="color"
        :class="{ colors__list__item_active: store.choiceColors === color }"
      >
        <div
          :class="['colors__list__item', `colors__list__item_bg-${color}`]"
          @click="store.selectColor(color)"
        >
          <input
            type="radio"
            :id="color"
            :value="color"
            v-model="store.choiceColors"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.colors {
  &__list {
    display: flex;
    gap: 20px;
    &__item {
      width: 22px;
      height: 22px;
      margin: 4px;
      border-radius: 50%;
      background: #3c4242;
      cursor: pointer;
      &_bg-yellow {
        background: #edd146;
      }
      &_bg-pink {
        background: #eb84b0;
      }
      &_bg-red {
        background: #9c1f35;
      }
      &_active {
        border: 1px solid #3c4242;
        border-radius: 50%;
      }
    }
  }
}
</style>
