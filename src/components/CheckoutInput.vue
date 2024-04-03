<script setup>
const props = defineProps({
    label: {
        type: String,
        default: 'Label',
    },
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
    <div class="checkout__input">
        <label class="checkout__input__label" :for="name">{{ label }}</label>
        <input
            :type="type"
            :placeholder="placeholder"
            :name="name"
            :value="value"
            @input="$emit('update:value', $event.target.value)"
        />
    </div>
</template>

<style lang="scss" scoped>
.checkout__input {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__label {
        font-weight: 600;
        font-size: 16px;
        letter-spacing: 0.02em;
        color: #3c4242;
    }
    & input {
        background: #f6f6f6;
        border-radius: 8px;
        width: 100%;
        padding: 16px 0 16px 20px;
    }
}
</style>
