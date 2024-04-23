import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
    getFirestore,
    collection,
    getDoc,
    onSnapshot,
    doc
} from 'firebase/firestore'

export const useFirebaseStore = defineStore('firebase', () => {
    const db = getFirestore()

    const collectionSize = collection(db, 'sizes')
    const collectioncCoupons = collection(db, 'coupons')
    const collectioncColors = collection(db, 'colors')
    const collectionWomenProducts = collection(db, 'products_women')
    const collectionMenProducts = collection(db, 'products_men')
    const collectionUsers = collection(db, 'users')

    const sizes = ref([])
    const coupons = ref([])
    const colors = ref([])
    const women = ref([])
    const men = ref([])
    const users = ref([])
    const cartItems = ref([])

    onSnapshot(collectionSize, (snapshot) => {
        snapshot.docs.forEach((doc, index) => {
            sizes.value.push({ ...doc.data(), id: doc.id })
        })
        console.log(sizes, 'Наши размеры')
    })

    onSnapshot(collectioncCoupons, (snapshot) => {
        snapshot.docs.forEach((doc, index) => {
            coupons.value.push(doc.data().coupon_1)
            coupons.value.push(doc.data().coupon_2)
        })
        console.log(sizes, 'КУпончики')
    })

    onSnapshot(collectioncColors, (snapshot) => {
        snapshot.docs.forEach((doc, index) => {
            colors.value.push({ ...doc.data(), id: doc.id })
        })
        console.log(colors, 'Цвета')
    })

    onSnapshot(collectionWomenProducts, (snapshot) => {
        snapshot.docs.forEach((doc, index) => {
            women.value.push({ ...doc.data(), id: doc.id })

        })
        console.log(women, 'Женские продукты')
  
    })
    onSnapshot(collectionMenProducts, (snapshot) => {
        snapshot.docs.forEach((doc, index) => {
            men.value.push({ ...doc.data(), id: doc.id })

        })
        console.log(men, 'Мужские продукты')
  
    })


    onSnapshot(collectionUsers, (snapshot) => {
        snapshot.docs.forEach((doc, index) => {
            users.value.push({ ...doc.data(), id: doc.id })
        })
        console.log(users, 'Юзеры в наличии')
    })

    // const getCartItems = async () => {
    //     const currentUser = auth.currentUser;
    //          // Получить массив товаров из Firestore
    //          const userDocRef = doc(db, 'users', currentUser.uid);
    //          try {
    //            const userDocSnapshot = await getDoc(userDocRef);
    //            if (userDocSnapshot.exists()) {
    //              const userData = userDocSnapshot.data();
    //              cartItems.value = userData.cart;
    //            }
    //            console.log("Данные корзины получены:", cartItems.value);
    //          } catch (error) {
    //            console.error("Ошибка при получении данных корзины:", error);
    //          }
    // }

 




    // onMounted(async () => {
    //     // Получить массив товаров из Firestore
    //     const userDocRef = doc(db, 'users', currentUser.uid);
    //     try {
    //       const userDocSnapshot = await getDoc(userDocRef);
    //       if (userDocSnapshot.exists()) {
    //         const userData = userDocSnapshot.data();
    //         cartItems.value = userData.cart;
    //       }
    //       console.log("Данные корзины получены:", cartItems.value);
    //     } catch (error) {
    //       console.error("Ошибка при получении данных корзины:", error);
    //     }
    //   });

    return {
        sizes,
        coupons,
        colors,
        women,
        men,
        users,
        collectionUsers,
        db,
        // getCartItems,
        // cartItems
    }
})
