import { ref } from 'vue'
import { query, where, getDocs, or, and } from 'firebase/firestore'
import { useFirebaseStore } from '../stores/getDB'

export function useFilteredItems(value) {
    const store = useFirebaseStore()
    const filteredItems = ref([])

    const loadItemsBy = async () => {
        let q
        if (value) {
            q = query(
                store.collectionMenProducts || store.collectionWomenProducts,

                and(
                    or(
                        where('category', '==', value),
                        where('size', '==', value),
                        where('colors', 'array-contains', value)
                    )
                )
            )
        }

        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            filteredItems.value = [...filteredItems.value, doc.data()]
        })
    }

    loadItemsBy()

    console.log(filteredItems, 'ВОТ ЗАПУСК КОМПОЗИЦИИ')
    return { filteredItems }
}
