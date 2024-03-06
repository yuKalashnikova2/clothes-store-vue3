<script setup>
const props = defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
  labelText: {
    type: String,
    required: true,
  },
  checkboxFogot: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    default: 'Name',
  },
})
const emits = defineEmits(['update'])
const updateChecked = (event) => {
  emits('update', event.target.checked)
  console.log('ФУНКЦИЯ ЧЕКБОКСА',event.target.checked )
}
</script>
<template>
  <div class="checkbox">
    <label class="checkbox__label">
      <div
        :class="['checkbox__input', checked ? 'checkbox__input__checked' : '']"
      >
        <input
          type="checkbox"
          :checked="checked"
          :name="name"
          @input="updateChecked"
        />
      </div>
      <div class="checkbox__label-text">{{ labelText }}</div>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.checkbox {
  &__label {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 400;
    font-size: 18px;
    color: #807d7e;
  }
  &__input {
    width: 16px;
    height: 16px;
    border-radius: 3px;
    border: 1px solid #3c4242;
    @media (max-width: 400px) {
      width: 19px;
      height: 19px;
    }
    &__checked {
      background-image: url('/checkbox.svg');
      background-repeat: no-repeat;
      background-size: cover;
      border: none;
    }
  }
}
</style>
