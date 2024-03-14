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
      
      const colors = ['black', 'yellow', 'pink', 'red'];
      const choiceColors = ref('black')
      const selectColor = (color) => {
        choiceColors.value = color;
      };
  
      const size = ref(['XS', 'S', 'M', 'L', 'XL'])
      const currentSize = ref(size.value[0])
      const prevStep = () => {
        currentIndex.value =
          (currentIndex.value - 1 + images.value.length) % images.value.length
      }
      
      const nextStep = () => {
        currentIndex.value = (currentIndex.value + 1) % images.value.length
      }

    return { tableInfo, images, currentIndex, prevStep, nextStep, choiceColors, colors, selectColor, size, currentSize }
})