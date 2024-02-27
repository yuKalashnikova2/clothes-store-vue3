<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Button',
  },
})
</script>
<template>
  <button class="button">{{ label }}</button>
</template>

<style lang="scss" scoped>
.button {
  border-radius: 8px;
  padding: 16px 72px;
  background: #fff;
  border: none;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  color: #3c4242;
  cursor: pointer;

  &:hover {
    background: #f6f6f6;
  }
  @media (max-width: 992px) {
    font-size: 16px;
    padding: 16px 72px;
  }
}
</style>
