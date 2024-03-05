<script setup>
import { ref } from 'vue'
import InputText from '../components/InputText.vue'
import Button from '../components/Button.vue'
const emailReset = ref('')
</script>
<template>
  <div class="sign-in">
    <div class="sign-in__image">
      <img src="/reset-password.png" alt="pic" />
    </div>

    <div class="sign-in__form">
      <h2 class="sign-in__form__title">Reset Your Password</h2>

      <form class="sign-in__form__submit" @submit.prevent>
        <div class="sign-in__form__submit__description">
          <span
            >Enter your email and we'll send you a link to reset your
            password.</span
          >
          <span>Please check it.</span>
        </div>

        <InputText
          type="email"
          placeholder="Email"
          label="Email"
          v-model:value.trim="emailReset"
          name="email"
          wrongInput
        />
        <span
          class="sign-in__form__submit__description sign-in__form__submit__description_error"
          >We can not find your email.</span
        >

        <div class="sign-in__form__submit__inputs__sign">
          <router-link to="/newpassword">
            <Button label="Send" />
          </router-link>
          <span>
            Back to
            <router-link to="/signin">
              <span class="sign-in__form__submit__inputs__sign_uderline"
                >Login</span
              >
            </router-link>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
@import url('../assets/sign.scss');
</style>
