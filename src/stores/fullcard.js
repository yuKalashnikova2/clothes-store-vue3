import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFullCardStore = defineStore('fullcard', () => {
    const tableInfo = ref([
        {
          title: 'Fabric',
          description: 'Bio-washed Cotton',
        },
        {
          title: 'Pattern',
          description: 'Printed',
        },
        {
          title: 'Fit',
          description: 'Regular-fit',
        },
        {
          title: 'Neck',
          description: 'Round Neck',
        },
        {
          title: 'Sleeve',
          description: 'Half-sleeves',
        },
        {
          title: 'Style',
          description: 'Casual Wear',
        },
      ])

      const images = ref([
        '/product.png',
        '/ex.png',
        '/reset-password.png',
        '/product.png',
        '/ex.png',
        '/reset-password.png',
        '/product.png',
        '/ex.png',
        '/reset-password.png',
      ])
      const currentIndex = ref(0)
      
      const prevStep = () => {
        currentIndex.value =
          (currentIndex.value - 1 + images.value.length) % images.value.length
      }
      
      const nextStep = () => {
        currentIndex.value = (currentIndex.value + 1) % images.value.length
      }

    return { tableInfo, images, currentIndex, prevStep, nextStep }
})