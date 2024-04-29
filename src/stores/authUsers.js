import { defineStore } from 'pinia'
import { ref, watchEffect } from 'vue'
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

    const userToken = ref([])
    const login = (email, password) =>
        signInWithEmailAndPassword(auth, email, password)
            .then((cred) => {
                nikname.value = cred.user.email
                const user = auth.currentUser
                if (user) {
                    user.getIdToken().then((idToken) => {
                        localStorage.setItem('token', idToken)
                        userToken.value = idToken
                        console.log('ТОКЕН СОЗДАН', idToken)
                    })
                }
                console.log('пользователь вошел', cred.user, nikname.value)
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
        if (user) {
            JSON.parse(localStorage.getItem('token'))
        }
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
    const subtotalPrice = ref(0)
    // const countItems = ref(0)
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
                cartItems.value = Array.from(userData.cart, (item) => ({ ...item, count: 1 }));
                // countItems.value = cartItems.value.length()
                // cartItems.value = [{ ...userData.cart, count: 1}]
            }
            console.log('Данные корзины получены ВОТ ЭТА ФУНКЦИЯ:', cartItems.value)
        } catch (error) {
            console.error('Ошибка при получении данных корзины !!!:', error)
        }
    }
    //геттер для общей суммы
//   watchEffect()(() => {
//         countItems.value = cartItems.value.length()
//         console.log(countItems.value, 'countItems.value')
//     })
   
    const deleteCartItem = async (itemId) => {
        const currentUser = auth.currentUser
        if (!currentUser) {
            throw new Error('Пользователь не авторизован')
        }
        const userDocRef = doc(firebase.db, 'users', currentUser.uid)
        try {
            const userDocSnapshot = await getDoc(userDocRef)
            if (userDocSnapshot.exists()) {
                const userData = userDocSnapshot.data()
                const updatedCart = userData.cart.filter(
                    (item) => item.id !== itemId
                )
                await updateDoc(userDocRef, { cart: updatedCart })
                console.log('Товар успешно удален из корзины')
            } else {
                console.log('Документ пользователя не найден')
            }
        } catch (error) {
            console.error('Ошибка при удалении товара из корзины:', error)
        }
    }

    //wishlist
    const addToWishlist = async (itemId) => {
        const currentUser = auth.currentUser;
        if (!currentUser) {
          throw new Error('Пользователь не авторизован');
        }
        const userDocRef = doc(firebase.db, 'users', currentUser.uid);
        try {
          const userDocSnapshot = await getDoc(userDocRef);
          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            const wishlist = userData.wishlist || []; // Если wishlist не существует, создаем пустой массив
            // Проверяем, что товар с таким itemId еще не добавлен в wishlist
            if (wishlist.some(item => item.id === itemId)) {
              console.log('Товар уже добавлен в wishlist');
              return; // Если товар уже добавлен, просто выходим из функции
            }
            wishlist.push({ ...itemId }); // Добавляем новый товар в wishlist
            await updateDoc(userDocRef, { wishlist });
            console.log('Товар успешно добавлен в wishlist');
          } else {
            console.log('Документ пользователя не найден');
          }
        } catch (error) {
          console.error('Ошибка при добавлении товара в wishlist:', error);
        }
      }
      const wishlistItems = ref([])
      const getWishListItems = async () => {
        const currentUser = auth.currentUser
        if (!currentUser) {
            throw new Error('Пользователь не авторизован')
        }
        const userDocRef = doc(firebase.db, 'users', currentUser.uid)
        try {
            const userDocSnapshot = await getDoc(userDocRef)
            if (userDocSnapshot.exists()) {
                const userData = userDocSnapshot.data()
                wishlistItems.value = userData.wishlist
            }
            console.log('Данные wishlist получены:', wishlistItems.value)
        } catch (error) {
            console.error('Ошибка при получении данных wishlist:', error)
        }
    }

    const deleteWishListItems = async (itemId) => {
        const currentUser = auth.currentUser
        if (!currentUser) {
            throw new Error('Пользователь не авторизован')
        }
        const userDocRef = doc(firebase.db, 'users', currentUser.uid)
        try {
            const userDocSnapshot = await getDoc(userDocRef)
            if (userDocSnapshot.exists()) {
                const userData = userDocSnapshot.data()
                const updatedWishlist = userData.wishlist.filter(
                    (item) => item.id !== itemId
                )
                await updateDoc(userDocRef, { wishlist: updatedWishlist })
                console.log('Товар успешно удален из wishlist')
            } else {
                console.log('Документ пользователя не найден')
            }
        } catch (error) {
            console.error('Ошибка при удалении товара из wishlist:', error)
        }
    }

    // const coupons = ref([])
    // const isErrorCoupon = ref(false)
    // const getCoupons = async () => {
    //     const currentUser = auth.currentUser
    //     if (!currentUser) {
    //         throw new Error('Пользователь не авторизован')
    //     }
    //     const userDocRef = doc(firebase.db, 'coupons', currentUser.uid)
    //     try {
    //         const userDocSnapshot = await getDoc(userDocRef)
    //         if (userDocSnapshot.exists()) {
    //             const userData = userDocSnapshot.data()
    //             coupons.value = userData.coupons
    //         }
    //         console.log('Данные КУПОНОВ получены:', coupons.value)
    //     } catch (error) {
    //         isErrorCoupon.value = true
    //         console.error('Ошибка при получении данных КУПОНА:', error)
    //     }
    // }
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
        subtotalPrice,
        deleteCartItem,
        addToWishlist,
        wishlistItems,
        getWishListItems,
        deleteWishListItems,
        // coupons,
        // isErrorCoupon,
        // getCoupons

    }
})
