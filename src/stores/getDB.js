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
    const isLoading = ref([])


    onSnapshot(collectionSize, (snapshot) => {
        isLoading.value = true
        snapshot.docs.forEach((doc, index) => {
            sizes.value.push({ ...doc.data(), id: doc.id })
        })
        isLoading.value = false
        console.log(sizes, 'Наши размеры')
    })

    onSnapshot(collectioncCoupons, (snapshot) => {
        snapshot.docs.forEach((doc, index) => {
            coupons.value.push(doc.data().coupon_1)
            coupons.value.push(doc.data().coupon_2)
        })
        console.log(coupons, 'КУпончики')
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

    return {
        sizes,
        coupons,
        colors,
        women,
        men,
        users,
        collectionMenProducts,
        collectionWomenProducts,
        collectionUsers,
        db,
        isLoading
    }
})
