import { ref } from 'vue'
import {  query, where, getDocs } from 'firebase/firestore'
import { useFirebaseStore } from '../stores/getDB'

export function useFilteredItemsByCategory(category) {
  const store = useFirebaseStore();
  const filteredItems = ref([]);

  const loadItemsByCategory = async () => {
    const q = query(store.collectionMenProducts, where('category', '==', category));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    //   filteredItems.value.push(doc.data());
    filteredItems.value = [...filteredItems.value, doc.data()];

    });
  };

    loadItemsByCategory();

  console.log(filteredItems, 'ВОТ ЗАПУСК КОМПОЗИЦИИ')
  return { filteredItems };
}