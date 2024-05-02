import { ref, onMounted } from 'vue'
import { collection, getDocs, where } from 'firebase/firestore'
import { useFirebaseStore } from '../stores/getDB'


export  function useFilteredItems(category) {
  const store = useFirebaseStore()
  const items = ref([])
  const fetchItems = async () => {
    const query = store.collectionWomenProducts || store.collectionMenProducts
    const querySnapshot = await getDocs(query);

    items.value = querySnapshot.docs
      .filter(doc => doc.data().category === category)
      .map(doc => doc.data());
  };

  onMounted(() => {
    console.log('NEW')
    fetchItems();
  });

  return { items };
}