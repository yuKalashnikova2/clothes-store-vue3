import { ref } from 'vue'
import { query, where, getDocs } from 'firebase/firestore'
import { useFirebaseStore } from '../stores/getDB'

export function useFilteredItemsByCategory(category) {
    const store = useFirebaseStore()
    const filteredItems = ref([])

    const loadItemsByCategory = async () => {
        // const q = query(
        //     store.collectionMenProducts || store.collectionWomenProducts,
        //     where('category', '==', category)
        // )
        let q;
        if (category) {
            q = query(
                store.collectionMenProducts || store.collectionWomenProducts,
                where('category', '==', category)
            )
        } else if (color) {
            q = query(
                store.collectionMenProducts || store.collectionWomenProducts,
                where('color', '==', color)
            )
        } else if (size) {
            q = query(
                store.collectionMenProducts || store.collectionWomenProducts,
                where('size', '==', size)
            )
        }

        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            filteredItems.value = [...filteredItems.value, doc.data()]
        })
    }

    loadItemsByCategory()

    console.log(filteredItems, 'ВОТ ЗАПУСК КОМПОЗИЦИИ')
    return { filteredItems }
}
