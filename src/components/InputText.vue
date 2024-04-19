<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: 'Placeholder',
  },
  name: {
    type: String,
    default: 'Name',
  },
  label: {
    type: String,
    default: 'Label',
  },
  value: {
    type: String,
    required: false,
  },
  wrongInput: {
    type: Boolean,
    required: false,
  },
})
const emits = defineEmits(['update:value'])
</script>
<template>
  <div class="input">
    <label class="input__label" :for="name"
      >{{ label }}
      <slot></slot>
    </label>

    <input
      :class="['input__text', wrongInput ? 'input__text_error' : '']"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>

<style lang="scss" scoped>
.input {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  &__label {
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #3c4242;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__text {
    border: 1px solid #3c4242;
    border-radius: 8px;
    padding-left: 15px;
    padding: 17px 15px;
    &_error {
      background: rgba(102, 32, 193, 0.03);
      border: 1px solid #8a33fd;
      color:#8a33fd;
    }
  }
}
</style>
