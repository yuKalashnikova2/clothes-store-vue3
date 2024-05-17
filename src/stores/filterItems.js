import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useFilteredItems } from '../composables/useFilterItems-t.js'

export const useFilterItems = defineStore('filteritems', () => {
    const categoriesClothes = ref([
        'Jeans',
        'Pajamas',
        'Jackets',
        'Shorts',
        'Sweaters',
        'Pants',
        'Printed T-shirts',
        'Tops',
        'Sweatshirts',
    ])

    const selectedCategory = ref('Pants')
    const chooseCat = ref([])

    const changeCategory = (category) => {
        selectedCategory.value = category
    }

    watch(selectedCategory, (newCategory) => {
        const { filteredItems } = useFilteredItems(newCategory)
        chooseCat.value = filteredItems
    })

    return {
        categoriesClothes,
        selectedCategory,
        changeCategory,
        chooseCat,
    }
})
