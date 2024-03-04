import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '../views/MainPage.vue'
import SignIn from '../views/SignIn.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: MainPage
        },
        {
            path: '/signin',
            name: 'SignIn',
            component: SignIn
        }
    ]
})

export default router