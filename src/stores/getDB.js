import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
} from 'firebase/firestore'

export const useFirebaseStore = defineStore('firebase', () => {
    const db = getFirestore()

    const collectionSize = collection(db, 'sizes')
    const collectioncCoupons = collection(db, 'coupons')
    const collectioncColors = collection(db, 'colors')
    const collectionWomenProducts = collection(db, 'products_women')

    const sizes = ref([])
    const coupons = ref([])
    const colors = ref([])
    const women = ref([])

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
    return {
        sizes,
        coupons,
        colors,
        women
    }
})
