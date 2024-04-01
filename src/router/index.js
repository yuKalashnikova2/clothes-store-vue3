import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '../views/MainPage.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import HeaderSign from '../components/HeaderSign.vue'
import HeaderTop from '../components/HeaderTop.vue'
import Footer from '../components/Footer.vue'
import ResetPassword from '../views/ResetPassword.vue'
import NewPassword from '../views/NewPassword.vue'
import ShopWomen from '../views/ShopWomen.vue'
import FullCardProduct from '../views/FullCardProduct.vue'
import CartPage from '../views/CartPage.vue'

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
            path: '/signup',
            components: {
                header: HeaderSign,
                main: SignUp
            }
        },
        {
            path: '/resetpassword',
            components: {
                header: HeaderSign,
                main: ResetPassword
            }
        },
        {
            path: '/newpassword',
            components: {
                header: HeaderSign,
                main: NewPassword,
            }
        },
        {
            path: '/shopwomen',
            components: {
                header: HeaderTop,
                main: ShopWomen,
                footer: Footer
            }
        },
        {
            path: '/fullcardproduct/:idcard',
            components: {
                header: HeaderTop,
                main: FullCardProduct,
                footer: Footer
            },
        },
        {
            path: '/cart',
            components: {
                header: HeaderTop,
                main: CartPage,
                footer: Footer
            }
        },
    ]
})

export default router