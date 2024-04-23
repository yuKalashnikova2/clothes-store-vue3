import { defineStore } from 'pinia'
import { ref, watch, onMounted } from 'vue'
import { useFirebaseStore } from './getDB'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from 'firebase/auth'
import {
    addDoc,
    collection,
    updateDoc,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

export const useAuthUsersStore = defineStore('authusers', () => {
    const auth = getAuth()
    const firebase = useFirebaseStore()
    const isError = ref(false)
    const errorSignUp = ref('Unknown error')
    const nikname = ref('Name')
    const errorCreateUser = ref('ERROR USER')

    const createUser = async (email, password) => {
        try {
            const authUser = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
            nikname.value = email
            const userId = authUser.user.uid
            console.log('ВЫШЛО АЙ ДИ', userId)
            const userData = {
                email,
                userId,
            }
            const docRef = await addDoc(collection(firebase.db, 'users'), {
                ...userData,
                cart: [],
                wishlist: [],
                orders: [],
            })
            firebase.users.push(userData)
            console.log('Аккаунт успешно создан!', docRef.id)
        } catch (error) {
            isError.value = true
            errorCreateUser.value = error.message
            console.error('Ошибка при создании аккаунта:', error)
        }
    }
    const login = (email, password) =>
        signInWithEmailAndPassword(auth, email, password)
            .then((cred) => {
                nikname.value = cred.user.email
                console.log('пользователь вошел', cred.user)
            })
            .catch((err) => {
                isError.value = true
                errorSignUp.value = err.message
                console.log(err.message, 'ОШИБОЧКА ВЫШЛА')
            })
    const signOutUser = () => {
        signOut(auth)
            .then(() => {
                console.log('Пользователь вышел')
            })
            .catch((err) => {
                console.log(err.message, 'ОШИБОЧКА ВЫШЛА при выходе')
            })
    }

    const changeStatusUser = onAuthStateChanged(auth, (user) => {
        console.log('cтатус пользователя изменен', user)
    })

    const addToCart = async (elem) => {
        try {
            const currentUser = auth.currentUser
            if (!currentUser) {
                throw new Error('Пользователь не авторизован')
            }

            const usersCollection = collection(firebase.db, 'users')

            const userDocRef = doc(usersCollection, currentUser.uid)

            console.log(userDocRef, 'userDocRef NEN')
            const userDocSnapshot = await getDoc(userDocRef)

            console.log(userDocSnapshot.exists(), 'userDocSnapshot.exists()')
            if (userDocSnapshot.exists()) {
                const userData = userDocSnapshot.data()
                const updatedCart = [...userData.cart, { ...elem }]
                await updateDoc(userDocRef, { cart: updatedCart })
                console.log('Товар успешно добавлен в корзину')
            } else {
                await setDoc(userDocRef, { cart: [elem] })
                console.log('Документ пользователя создан ЗДЕСЬ')
            }
        } catch (error) {
            console.error('Ошибка при добавлении товара в корзину:', error)
        }
    }

    const cartItems = ref([])

    const getCartItems = async () => {
        const currentUser = auth.currentUser
        if (!currentUser) {
            throw new Error('Пользователь не авторизован')
        }
        const userDocRef = doc(firebase.db, 'users', currentUser.uid)
        try {
            const userDocSnapshot = await getDoc(userDocRef)
            if (userDocSnapshot.exists()) {
                const userData = userDocSnapshot.data()
                cartItems.value = userData.cart
            }
            console.log('Данные корзины получены:', cartItems.value)
        } catch (error) {
            console.error('Ошибка при получении данных корзины:', error)
        }
    }
    return {
        login,
        changeStatusUser,
        signOutUser,
        errorSignUp,
        isError,
        nikname,
        createUser,
        errorCreateUser,
        addToCart,
        getCartItems,
        cartItems,
    }
})
