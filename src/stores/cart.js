import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
    const subtotal = ref(0)

    return {
        subtotal: subtotal.value
    }
})