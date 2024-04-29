<script setup>
import { ref } from 'vue'
import { useAuthUsersStore } from '../stores/authUsers'
import Title from '../components/Title.vue'
import Button from '../components/Button.vue'
import CheckoutInput from '../components/CheckoutInput.vue'
import OrderSummaryList from '../components/OrderSummaryList.vue'

const store = useAuthUsersStore()
const firstName = ref('')
const lastName = ref('')
const country = ref('')
const company = ref('')
const address = ref('')
const city = ref('')
const state = ref('')
const postcode = ref('')
const phone = ref('')
const incorrectInput = ref(false)
const incorrectInputText = ref('Error enter')

const submitForm = () => {

  if (!firstName.value) {
    incorrectInput.value = true
    incorrectInputText.value = 'Please enter your first name'
    return
  }
  if (!lastName.value) {
    incorrectInput.value = true
    incorrectInputText.value = 'Please enter your last name'
    return
  }
  if (!country.value) {
    incorrectInput.value = true
    incorrectInputText.value =  'Please select a country'
    return
  }
  if (!phone.value) {
    incorrectInput.value = true
    incorrectInputText.value = 'Please enter your phone number'
    return
  }
  if (!validatePhoneNumber(phone.value)) {
    incorrectInput.value = true
    incorrectInputText.value = 'Please enter a valid phone number'
    return
  }

  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    country: country.value,
    company: company.value,
    address: address.value,
    city: city.value,
    state: state.value,
    postcode: postcode.value,
    phone: phone.value,
  }
  console.log('Form data:', formData)
}

const validatePhoneNumber = (phoneNumber) => {
  return /^\d{10}$/.test(phoneNumber)
}
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
                <span class="checkout__error" v-if="incorrectInput">{{ incorrectInputText }}</span>
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
                <router-link to="/cart/orderconfirmed">
                    <Button label="Continue to delivery"
                    @click="submitForm" />
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
                                    > ({{ store.cartItems.length }} items)</span
                                ></span
                            >
                            <span>${{ store.subtotalPrice }}.00</span>
                        </div>
                        <div class="checkout__summary__text">
                            <span>Savings</span>
                            <span>0.00</span>
                        </div>
                    </div>

                    <div class="checkout__summary__text">
                        <span>Shipping</span>
                        <span>5.00</span>
                    </div>
                    <div class="checkout__summary__text">
                        <span>Total</span>
                        <span>${{ store.subtotalPrice }}.00</span>
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
    &__error {
        margin-top: 10px;
        margin-bottom: 30px;
        font-weight: 400;
        font-size: 16px;
        line-height: 125%;
        display: block;
        color: #ee1d52;

}
}
</style>
