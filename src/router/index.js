import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '../views/MainPage.vue'
import SignIn from '../views/SignIn.vue'
import HeaderSign from '../components/HeaderSign.vue'
import HeaderTop from '../components/HeaderTop.vue'
import Footer from '../components/Footer.vue'

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
        }
    ]
})

export default router