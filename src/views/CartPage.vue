<script setup>
import CartHeaderProducts from '../components/cart/CartHeaderProducts.vue'
import CartListItem from '../components/cart/CartListItem.vue'
</script>
<template>
    <div class="cart">
        <div class="cart__container ">
            <div class="cart__go-back">
           <router-link to='/'>Home</router-link>
           <img src="/arrow-left.svg" />
           Add  To Cart
        </div>
         <p class="cart__description">
            <span>Please fill in the fields below and click place order to complete your purchase!</span>

<span>Already registered?<RouterLink to="/signin">Please login here</RouterLink></span>
</p>
        </div>
    </div>
    <CartHeaderProducts />
    <CartListItem />
</template>

<style lang="scss" scoped>

.cart {
    padding-left: 100px;
    padding-right: 100px;
    &__container {
        padding: 50px 0;
        display:flex;
        flex-direction: column;
        gap: 30px;
   

    }
    &__go-back {
        display: flex;
        gap: 15px;
        font-weight: 500;
        font-size: 18px;
        color: #3c4242;
        & a {
            color: #807D7E;
            &:hover {
                text-decoration: underline;
            }
        }
    
    }
    &__description {
            display: flex;
            flex-direction: column;
            gap: 5px;
            font-weight: 400;
            font-size: 14px;
            letter-spacing: 0.02em;
            color: #807d7e;
            & a {
                font-weight: 600;
                color: #8a33fd;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
}
</style>