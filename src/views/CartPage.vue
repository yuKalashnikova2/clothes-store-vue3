<script setup>
import CartHeaderProducts from '../components/cart/CartHeaderProducts.vue'
import CartListItem from '../components/cart/CartListItem.vue'
import Button from '../components/Button.vue'
</script>
<template>
    <div class="cart">
        <div class="cart__container">
            <div class="cart__go-back">
                <router-link to="/">Home</router-link>
                <img src="/arrow-left.svg" />
                Add To Cart
            </div>
            <p class="cart__description">
                <span
                    >Please fill in the fields below and click place order to
                    complete your purchase!</span
                >

                <span
                    >Already registered?<RouterLink to="/signin"
                        >Please login here</RouterLink
                    ></span
                >
            </p>
        </div>
    </div>
    <CartHeaderProducts />
    <CartListItem />

    <div class="cart__total">
        <div class="cart__total__discount">
            <h3 class="cart__total__discount__title">Discount Codes</h3>
            <span>Enter your coupon code if you have one</span>

            <div class="cart__total__discount__input">
                <input type="text" />

                <Button label="Apply coupon" borderNone class="nowrap" />
            </div>

            <Button label="Continue Shopping" color="secondary" />
        </div>

        <div class="cart__total__subtotal">
            <div class="cart__total__subtotal__list">
                <div class="cart__total__subtotal__item">
                    <span>Sub Total</span>
                    <span>$513.00</span>
                </div>
                <div class="cart__total__subtotal__item">
                    <span>Shipping</span>
                    <span>$5.00</span>
                </div>
                <div
                    class="cart__total__subtotal__item cart__total__subtotal__item_bold cart__total__subtotal__item_mt"
                >
                    <span class="cart__total__subtotal__item_bold"
                        >Grand Total</span
                    >
                    <span class="cart__total__subtotal__item_bold"
                        >$518.00</span
                    >
                </div>
            </div>

            <div class="cart__total__subtotal__divider"></div>
            <div class="cart__total__subtotal__button">
                <Button label="Proceed To Checkout" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cart {
    padding-left: 100px;
    padding-right: 100px;
    &__container {
        padding: 50px 0;
        display: flex;
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
            color: #807d7e;
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
    &__total {
        display: flex;
        justify-content: space-between;
        padding: 0 100px;
        background: #f6f6f6;
        &__discount {
            padding-top: 29px;
            &__title {
                font-weight: 600;
                font-size: 24px;
                color: #3c4242;
                margin-bottom: 10px;
            }
            & span {
                font-weight: 400;
                font-size: 16px;
                color: #807d7e;
            }
            &__input {
                width: 100%;
                height: 43px;
                display: flex;
                border: 1px solid #bebcbd;
                border-radius: 12px;
                width: 375px;
                height: 43px;
                margin-top: 40px;
                margin-bottom: 37px;
                overflow: hidden;
                & input {
                }
            }
        }
        &__subtotal {
            display: flex;
            flex-direction: column;
            background: #f3f3f3;

            width: 465px;
            &__list {
                display: flex;
                flex-direction: column;
                gap: 15px;
                padding: 39px 91px;
            }
            &__item {
                display: flex;
                justify-content: space-between;
                font-weight: 500;
                font-size: 22px;
                letter-spacing: 0.02em;
                color: #3c4242;

                &_bold {
                    font-weight: 700;
                }
                &_mt {
                    margin-top: 40px;
                }
            }

            &__divider {
                width: 100%;
                height: 1px;
                background: #bebcbd;
                margin-top: 50px;
                margin-bottom: 50px;
            }
            &__button {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 50px;
            }
        }
    }
}

.nowrap {
    white-space: nowrap;
}
</style>
