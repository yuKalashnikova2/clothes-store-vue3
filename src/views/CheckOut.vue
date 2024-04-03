<script setup>
import Title from '../components/Title.vue'
import Button from '../components/Button.vue'
import CheckoutInput from '../components/CheckoutInput.vue'
import OrderSummaryList from '../components/OrderSummaryList.vue'
import { ref } from 'vue'

const firstName = ref('')
const lastName = ref('')
const country = ref('')
const company = ref('')
const address = ref('')
const city = ref('')
const state = ref('')
const postcode = ref('')
const phone = ref('')
</script>
<template>
    <div class="checkout">
        <div class="checkout__menu">
            <router-link to="/">Home</router-link>
            <img src="/arrow-left.svg" />
            <router-link to="/user"> My Account</router-link>
            <img src="/arrow-left.svg" />
            <span>Check Out</span>
        </div>
        <div class="checkout_title-margin">
            <Title title="Check Out" />
        </div>

        <div class="checkout__subtitle">Billing Details</div>

        <div class="checkout__details">
            <form class="checkout__form" @submit.prevent>
                <div class="checkout__form_grid-2fr">
                    <CheckoutInput
                        label="First Name*"
                        placeholder="first name"
                        type="text"
                        v-model:value="firstName"
                        name="firstName"
                    />
                    <CheckoutInput
                        label="Last Name*"
                        placeholder="last name"
                        type="text"
                        v-model:value="lastName"
                        name="lastName"
                    />
                    <CheckoutInput
                        label="Country / Region*"
                        placeholder="Country / Region"
                        type="text"
                        v-model:value="country"
                        name="country"
                    />
                    <CheckoutInput
                        label="Company Name"
                        placeholder="Company (optional)"
                        type="text"
                        v-model:value="company"
                        name="company"
                    />
                    <CheckoutInput
                        label="Street Address*"
                        placeholder="House number and street name"
                        type="text"
                        v-model:value="address"
                        name="address"
                    />
                    <CheckoutInput
                        label="Apt, suite, unit"
                        placeholder="apartment, suite, unit, etc. (optional)"
                        type="text"
                        v-model:value="address"
                        name="address"
                    />
                </div>

                <div class="checkout__form_grid-3fr">
                    <CheckoutInput
                        label="City*"
                        placeholder="Town / City"
                        type="text"
                        v-model:value="city"
                        name="city"
                    />
                    <CheckoutInput
                        label="State*"
                        placeholder="State"
                        type="text"
                        v-model:value="state"
                        name="state"
                    />
                    <CheckoutInput
                        label="Postal Code*"
                        placeholder="Postal Code"
                        type="text"
                        v-model:value="postcode"
                        name="postcode"
                    />
                </div>

                <div class="checkout__form_grid-2fr">
                    <CheckoutInput
                        label="Phone*"
                        placeholder="Phone"
                        type="text"
                        v-model:value="phone"
                        name="phone"
                    />
                </div>
                <router-link to="/orderconfirmed">
                    <Button label="Continue to delivery" />
                </router-link>
            </form>

            <div class="checkout__summary">
                <span class="checkout__summary__title">Order Summary</span>
                <OrderSummaryList />

                <div class="checkout__summary__totals">
                    <div class="checkout__summary_gap">
                        <div class="checkout__summary__text">
                            <span
                                >Subtotal
                                <span class="checkout__summary_gray"
                                    >(3 items)</span
                                ></span
                            >
                            <span>$513.00</span>
                        </div>
                        <div class="checkout__summary__text">
                            <span>Savings</span>
                            <span>-$30.00</span>
                        </div>
                    </div>

                    <div class="checkout__summary__text">
                        <span>Shipping</span>
                        <span>-$5.00</span>
                    </div>
                    <div class="checkout__summary__text">
                        <span>Total</span>
                        <span>$478.00</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.checkout {
    padding: 23px 100px 44px 100px;
    @media (max-width: 992px) {
        padding: 23px 20px 44px 20px;
    }
    &__menu {
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
    &_title-margin {
        margin-top: 52px;
        margin-bottom: 20px;
    }
    &__subtitle {
        font-family: var(--second-family);
        font-weight: 600;
        font-size: 22px;
        line-height: 152%;
        letter-spacing: 0.02em;
        color: #3c4242;
    }
    &__details {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 39px;
        width: 100%;
        @media (max-width: 1200px) {
            grid-template-columns: 1fr;
        }
    }
    &__form {
        padding-top: 50px;

        &_grid-2fr {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            @media (max-width: 767px) {
                grid-template-columns: repeat(1, 1fr);
            }
            & > * {
                margin-right: 38px;
                margin-bottom: 25px;
            }
        }
        &_grid-3fr {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            @media (max-width: 767px) {
                grid-template-columns: repeat(1, 1fr);
            }
            & > * {
                margin-right: 38px;
                margin-bottom: 25px;
            }
        }
    }
    &__summary {
        box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05),
            -2px -2px 4px 0 rgba(0, 0, 0, 0.05);
        background: #fff;
        padding: 40px 22px;
        flex-shrink: 0;
        &__title {
            font-family: var(--second-family);
            font-weight: 600;
            font-size: 24px;
            color: #3c4242;
            margin-bottom: 15px;
            display: inline-block;
        }
        &__totals {
            font-weight: 700;
            font-size: 18px;
            letter-spacing: 0.02em;
            color: #3c4242;

            & > * {
                border-top: 1px solid #edeef2;
                padding-top: 15px;
                padding-bottom: 15px;
            }
        }
        &__text {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &_gray {
            font-weight: 500;
            color: #807d7e;
        }
        &_gap {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
    }
}
</style>
