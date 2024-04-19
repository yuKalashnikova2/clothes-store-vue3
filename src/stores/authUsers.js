import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from 'firebase/auth'

export const useAuthUsersStore = defineStore('authusers', () => {
    const auth = getAuth()
    const isError = ref(false)
    const errorSignUp = ref('Unknown error')
    const nikname = ref('Name')

    const signup = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password)
            .then((cred) => {
                console.log('пользователь создан', cred.user)
                nikname.value = cred.user.email
            })
            .catch((err) => {
                console.log(err.message, 'ОШИБОЧКА ВЫШЛА')
            })

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

    return {
        signup,
        login,
        changeStatusUser,
        signOutUser,
        errorSignUp,
        isError,
        nikname,
    }
})
