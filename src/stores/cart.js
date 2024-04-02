import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {

    const counter = ref(0)
    const plusCounter = () => {
        counter.value += 1
    }
    const minusCounter = () => {
        if (counter.value > 0) {
            counter.value -= 1
        }
    }

    return {
        counter,
        plusCounter,
        minusCounter
    }
})