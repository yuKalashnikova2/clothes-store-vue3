<script setup>
import { useFullCardStore } from '../../stores/fullcard.js'
import FullCardDescrTitle from './FullCardDescrTitle.vue'

const store = useFullCardStore()
</script>

<template>
  <div class="full-card__size">
    <FullCardDescrTitle title="Select size" />

    <div class="full-card__size__list">
      <div
        v-for="size in store.size"
        :class="[
          'full-card__size__list__item',
          { 'full-card__size__list__item_active': size === store.currentSize },
        ]"
        @click="store.currentSize = size"
      >
        {{ size }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.full-card__size {
  &__list {
    display: flex;
    gap: 20px;
    &__item {
      min-width: 38px;
      font-weight: 500;
      font-size: 14px;
      text-align: center;
      color: #3c4242;
      border: 1.5px solid #bebcbd;
      border-radius: 12px;
      padding: 9px 10px;
      cursor: pointer;
      &:hover {
        background: rgba(190, 188, 189, 0.1);
      }
      &_active {
        color: #fff;
        background: #3c4242;
        border: 1.5px solid #3c4242;
        &:hover {
          background: #3c4242;
          opacity: 0.9;
        }
      }
    }
  }
}
</style>
