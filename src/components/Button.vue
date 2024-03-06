<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: 'Button',
  },
  size: {
    type: String,
    default: 'small',
  },
  color: {
    type: String,
    default: 'primary',
  },
  disabled: {
    type: Boolean,
  }
})

const btnStyleSize = computed ((size) =>  {
     
     return size === 'medium' ? 'button_medium' : 'button'
       

  })
  const btnStyleColor = computed ((color) =>  {
    return  color === 'secondary' ? 'button_secondary' : 'button'

       

  })

</script>
<template>
  <button :class="['button',color === 'secondary' ? 'button_secondary' : 'button', size === 'medium' ? 'button_medium' : 'button', disabled ? 'button__disabled' : '']">
    <slot></slot>
  {{ label }}</button>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 8px;
  padding: 12px 48px;
  background: #8a33fd;
  color: #fff;
  border: 1px solid #8a33fd;
  text-align: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  &:hover {
    background: #8a33fd;
    opacity: 0.9;
  }
  &.button__disabled {
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.1);
  background: #eaeaea;
  color: #807d7e;
  border: 1px solid #eaeaea;
  &:hover {
      background: #eaeaea;
      opacity: 1;
      cursor: auto;
    }
 }
  &_secondary {
    color: #8a33fd;
    background: #fff;
    border: 1px solid #3c4242;
    &:hover {
    background: #f6f6f6;
  }
  }
  &_medium {
    background: #fff;
    color: #3c4242;
    font-weight: 700;
    font-size: 24px;
    padding: 16px 72px;
    border: 1px solid #fff;
    &:hover {
    background: #f6f6f6;
  }
  }
  @media (max-width: 992px) {
    font-size: 16px;
    padding: 16px 72px;
    width: 100%;
  }
}
</style>
