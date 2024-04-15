import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
    const isVisibleCategories = ref(false)
    const isVisiblePrice = ref(false)
    const isVisibleColors = ref(false)
    const isVisibleSize = ref(false)

    return {
        isVisibleCategories,
        isVisiblePrice,
        isVisibleColors,
        isVisibleSize,
    }
})
