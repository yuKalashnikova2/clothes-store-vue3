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
})

const btnStyleSize = computed ((size) =>  {
     
     return size === 'medium' ? 'button_medium' : 'button'
       

  })
  const btnStyleColor = computed ((color) =>  {
    return  color === 'secondary' ? 'button_secondary' : 'button'

       

  })

</script>
<template>
  <button :class="['button',color === 'secondary' ? 'button_secondary' : 'button', size === 'medium' ? 'button_medium' : 'button']">{{ label }}</button>
</template>

<style lang="scss" scoped>
.button {
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
    background: #f6f6f6;
  }
  &_secondary {
    color: #8a33fd;
    background: #fff;
    border: 1px solid #3c4242;
  }
  &_medium {
    background: #fff;
    color: #3c4242;
    font-weight: 700;
    font-size: 24px;
    padding: 16px 72px;
  }
  @media (max-width: 992px) {
    font-size: 16px;
    padding: 16px 72px;
    width: 100%;
  }
}
</style>
