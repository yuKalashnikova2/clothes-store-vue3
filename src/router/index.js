import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '../views/MainPage.vue'
import SignIn from '../views/SignIn.vue'
import HeaderSign from '../components/HeaderSign.vue'
import HeaderTop from '../components/HeaderTop.vue'
import Footer from '../components/Footer.vue'
import ResetPassword from '../views/ResetPassword.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            components: {
                header: HeaderTop,
                main: MainPage,
                footer: Footer

            }
        },
        {
            path: '/signin',
            components: {
                header: HeaderSign,
                main: SignIn
            }
        },
        {
            path: '/resetpassword',
            components: {
                header: HeaderSign,
                main: ResetPassword
            }
        }
    ]
})

export default router