import { defineStore } from 'pinia'
import { ref as vueRef, onMounted } from 'vue'

import {
  getStorage,
  getDownloadURL,
  listAll,
  ref
} from 'firebase/storage'

export const useProductsStore = defineStore('products', () => {
    const productsMen = vueRef([])
    const storage = getStorage()
    const fetchFilesFromFirebase = async () => {
      try {
        const listRef = ref(storage, 'men/')
        const listResult = await listAll(listRef)
        for (const itemRef of listResult.items) {
          const url = await getDownloadURL(itemRef)
          productsMen.value.push({
            name: itemRef.name,
            url,
          })
        }
        console.log('МАССИВ КАРТОЧЕК', productsMen.value)
      } catch (error) {
        console.log('ERROR', error)
      }
    }
  
    onMounted(() => {
      fetchFilesFromFirebase()
  })

  
    return { productsMen, fetchFilesFromFirebase }
  })