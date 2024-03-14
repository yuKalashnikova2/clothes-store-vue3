<script setup>
import { useFullCardStore } from '../../stores/fullcard.js'

const store = useFullCardStore()
</script>

<template>
  <div class="full-card__table">
    <div class="full-card__table__item" v-for="tab in store.tableInfo">
      <span class="full-card__table__item__title">{{ tab.title }}</span>
      <span class="full-card__table__item__description">{{ tab.description }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.full-card__table {
  background: #f6f6f6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 12px;
  margin-top: 32px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 17px 50px;
    @media (max-width: 992px) {
        border: 1px solid #bebcbd;
    }
    &:nth-child(-n + 3) {
      border-bottom: 1px solid #bebcbd;
    }

    &:nth-child(3n + 1) {
      border-right: 1px solid #bebcbd;
    }

    &:nth-child(3n + 2) {
      border-right: 1px solid #bebcbd;
    }

    &__title {
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: 0.02em;
      color: #807d7e;
    }
    &__description {
      font-weight: 500;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: 0.02em;
      color: #3c4242;
    }
  }
}
</style>
