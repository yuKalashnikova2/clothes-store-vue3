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
import ShopMen from '../views/ShopMen.vue'
import FullCardProduct from '../views/FullCardProduct.vue'
import CartPage from '../views/CartPage.vue'
import CheckOut from '../views/CheckOut.vue'
import ErrorPage from '../views/ErrorPage.vue'
import OrderConfirm from '../views/OrderConfirm.vue'
import UserProfile from '../views/UserProfile.vue'
import WishList from '../views/WishList.vue'
import Orders from '../views/Orders.vue'
import Info from '../views/Info.vue'
import SignOut from '../views/SignOut.vue'
import SignUpSuccess from '../views/SignUpSuccess.vue'

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
            path: '/signupsuccess',
            components: {
                header: HeaderSign,
                main: SignUpSuccess
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
            path: '/shopwomen/fullcardproduct/:id',
            components: {
                header: HeaderTop,
                main: FullCardProduct,
                footer: Footer
            },
        },

        {
            path: '/shopmen',
            components: {
                header: HeaderTop,
                main: ShopMen,
                footer: Footer
            }
        },
        {
            path: '/shopemen/fullcardproduct/:id',
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
        {
            path: '/cart/checkout',
            components: {
                header: HeaderTop,
                main: CheckOut,
                footer: Footer
            }
        },
        {
            path: '/error',
            components: {
                header: HeaderTop,
                main: ErrorPage,
                footer: Footer
            }
        },
        {
            path: '/cart/orderconfirmed',
            components: {
                header: HeaderTop,
                main: OrderConfirm,
                footer: Footer
            }
        },
        {
            path: '/user',
            components: {
                header: HeaderTop,
                main: UserProfile,
                footer: Footer
            },
            children: [
                {
                  path: 'wishlist',
                  component: WishList
                },
                {
                  path: 'orders',
                  component: Orders
                },
                {
                    path: 'info',
                    component: Info
                  },
                {
                  path: 'signout',
                  component: SignOut
                }
              ]
        },
    ]
})

export default router