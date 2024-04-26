<script setup>
import { ref } from 'vue'
import { useAuthUsersStore } from '../stores/authUsers'
import Button from '../components/Button.vue'
import InputText from '../components/InputText.vue'
import PolicyAgreementCheckbox from '../components/PolicyAgreementCheckbox.vue'

const auth = useAuthUsersStore()
const email = ref('')
const password = ref('')

const termsAgreed = ref(false)
const newsletterSubscribed = ref(false)

const isPasswordVisible = ref(false)

const togglePasswordVisibility = () => {
    isPasswordVisible.value = !isPasswordVisible.value
}
</script>

<template>
    <div class="sign-in">
        <div class="sign-in__image">
            <img src="/signup.png" alt="pic" />
        </div>

        <div class="sign-in__form">
            <h2 class="sign-in__form__title">Sign Up</h2>

            <form class="sign-in__form__submit" @submit.prevent>
                <div class="sign-in__form__submit__description">
                    <span
                        >Sign up for free to access to in any of our products
                    </span>
                </div>
                <div class="sign-in__form__submit__buttons">
                    <Button label="Continue With Google" color="secondary">
                        <img src="/social/google.svg" alt="google" />
                    </Button>
                    <Button label="Continue With Twitter" color="secondary">
                        <img src="/social/twitter.svg" alt="google" />
                    </Button>
                </div>

                <div>
                    <InputText
                        type="email"
                        placeholder="designer@gmail.com"
                        label="Email Address"
                        v-model:value.trim="email"
                        name="email"
                    />
                    <span
                        v-if="auth.isError"
                        class="sign-in__form__submit__description sign-in__form__submit__description_error"
                        >{{ auth.errorSignUp }}</span
                    >
                    <InputText
                        :type="isPasswordVisible ? 'text' : 'password'"
                        placeholder="Password"
                        label="Password"
                        v-model:value.trim="password"
                        name="password"
                    >
                        <div
                            class="sign-in__form__submit__inputs__hide"
                            @click="togglePasswordVisibility"
                        >
                            <img
                                v-if="isPasswordVisible"
                                src="/hide-open.svg"
                                alt=""
                            />
                            <img v-else src="/hide.svg" alt="hide" />
                            <span v-if="isPasswordVisible">Hide</span>
                            <span v-else>Show</span>
                        </div>
                    </InputText>
                    <span class="sign-in__form__submit__description"
                        >Use 8 or more characters with a mix of letters, numbers
                        & symbols</span
                    >

                    <div class="sign-in__form__submit__check">
                        <PolicyAgreementCheckbox
                            labelText="Agree to our Terms of use and Privacy Policy"
                            @update="termsAgreed = !termsAgreed"
                            v-model:checked="termsAgreed"
                        />
                        <PolicyAgreementCheckbox
                            labelText="Subscribe to our monthly newsletter"
                            @update="
                                newsletterSubscribed = !newsletterSubscribed
                            "
                            v-model:checked="newsletterSubscribed"
                        />
                    </div>

                    <div v-if="auth.isError">
                        <span class="sign-in__form__submit__description sign-in__form__submit__description_error">
                           Somthing went wrong! Try again {{ auth.errorCreateUser }}
                        </span>
                    </div>
                    <div class="sign-in__form__submit__inputs__sign">
                        <router-link :to="auth.isError ? '' : '/signupsuccess'">
                            <Button
                                label="Sign Up"
                                :disabled="!newsletterSubscribed"
                                @click="auth.createUser(email, password)"
                            />
                        </router-link>
                        <span>
                            Don’t have an account?
                            <router-link to="/signin">
                                <span
                                    class="sign-in__form__submit__inputs__sign_uderline"
                                >
                                    Already have an account? Log in</span
                                >
                            </router-link>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="scss">
@import url('../assets/sign.scss');
</style>
