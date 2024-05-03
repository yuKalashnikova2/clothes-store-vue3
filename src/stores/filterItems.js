import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useFilteredItemsByCategory } from '../composables/useFilterItems-t.js'

export const useFilterItems = defineStore('filteritems', () => {
    const categoriesClothes = ref([
        'Jeans',
        'Pajamas',
        'Jackets',
        'Full sleeve T-shirts',
        'Shorts',
        'Sweaters',
        'Pants',
        'Printed T-shirts',
        'Tops',
        'Dresses',
        'Sweatshirts',
    ])
    
    const selectedCategory = ref('Pants')
    const chooseCat = ref([])
   
    
    const changeCategory = (category) => {
        selectedCategory.value = category
        console.log('вот категория которая попадает', selectedCategory.value)
    }
    
    watch(selectedCategory, (newCategory) => {
        const { filteredItems } = useFilteredItemsByCategory(newCategory)
       chooseCat.value = filteredItems
        // if(filteredItems.value.length > 0) {
        //     dontHaveItems.value = 'Sorry, don\'t have this category'
        // }
        console.log('СРАБАТЫВАЕТ ВОТЧ', filteredItems.value,chooseCat.value)
    })
    
    
    return {
        categoriesClothes,
        selectedCategory,
        changeCategory,
        chooseCat,
    }
})