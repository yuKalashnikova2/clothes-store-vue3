<script setup>
import { ref } from 'vue'
import Button from '../components/Button.vue'
import InputText from '../components/InputText.vue'

const email = ref('')
const password = ref('')
const isPasswordVisible = ref(false)

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}

const changeTypePassword = () => {
  return isPasswordVisible ? text : password
}
</script>

<template>
  <div class="sign-in">
    <div class="sign-in__image">
      <img src="/signin.png" alt="pic" />
    </div>

    <div class="sign-in__form">
      <h2 class="sign-in__form__title">Sign In Page</h2>

      <form class="sign-in__form__submit" @submit.prevent>
        <div class="sign-in__form__submit__buttons">
          <Button label="Continue With Google" color="secondary">
            <img src="/social/google.svg" alt="google">
          </Button>
          <Button label="Continue With Twitter" color="secondary">
            <img src="/social/twitter.svg" alt="google">
          </Button>
        </div>
        <div class="sign-in__form__submit__divider">
          <div class="divider"></div>
          <span class="sign-in__form__submit__divider__text">or</span>
          <div class="divider"></div>
        </div>

        <div class="sign-in__form__submit__inputs">
          <InputText
            type="email"
            placeholder="Email"
            label="User name or email address"
            v-model:value.trim="email"
            name="email"
          />
          <div>
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
                <img v-if="isPasswordVisible" src="/hide-open.svg" alt="" />
                <img v-else src="/hide.svg" alt="hide" />
                <span v-if="isPasswordVisible">Hide</span>
                <span v-else>Show</span>
              </div>
            </InputText>
            <router-link
              class="sign-in__form__submit__inputs__forgot"
              to="/resetpassword"
            >
              Forget your password
            </router-link>
          </div>

          <div class="sign-in__form__submit__inputs__sign">
            <router-link to="/">
              <Button label="Sign In" />
            </router-link>
            <span >
              Don’t have an account?
              <router-link  to="/signup">
                <span class="sign-in__form__submit__inputs__sign_uderline"> Sign up</span>
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
