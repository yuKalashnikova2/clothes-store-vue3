<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'XXS',
  },
})
</script>

<template>
  <div class="sidebar__size__item">{{ size }}</div>
</template>

<style lang="scss" scoped>
.sidebar__size__item {
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
</style>
