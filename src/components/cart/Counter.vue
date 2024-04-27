<script setup>
import { ref } from 'vue'
const props = defineProps({
    price: {
        type: Number,
        default: 0,
    },
    count: {
        type: Number,
        default: 1,
    },
})
const emit = defineEmits(['totalCounter'])

const totalCounter = ref(0)
const isDec = ref(false)

function total() {
    totalCounter.value = props.price * props.count
    emit('totalCounter', totalCounter.value, props.count + 1)
}
function totalMinus() {
    isDec.value = true
    totalCounter.value = (props.price * props.count) - props.price
    emit('totalCounter', totalCounter.value, props.count - 1, isDec.value)
}
</script>

<template>
    <div class="counter">
        <div class="counter__button" @click="totalMinus">-</div>
        <div>{{ count }}</div>
        <div class="counter__button" @click="total">+</div>
    </div>
</template>

<style lang="scss" scoped>
.counter {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    background: #f6f6f6;
    border-radius: 12px;
    width: 100px;
    font-weight: 500;
    font-size: 12px;
    color: #3c4242;
    padding: 11px 23px;
    & > div {
        display: inline-block;
        width: 20px;
    }
    &__button {
        font-size: 20px;
        font-weight: 400;
        cursor: pointer;
    }
}
</style>
