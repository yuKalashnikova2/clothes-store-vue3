<script setup>
import { ref } from 'vue'

import InputText from '../components/InputText.vue'
import Button from '../components/Button.vue'

const newpassword = ref('')
const confirmpassword = ref('')
</script>
<template>
  <div class="sign-in">
    <div class="sign-in__image">
      <img src="/new-password.png" alt="pic" />
    </div>

    <div class="sign-in__form">
      <h2 class="sign-in__form__title">Create New Password</h2>

      <form class="sign-in__form__submit" @submit.prevent>
        <div class="sign-in__form__submit__description">
          <span
            >Your new password must be different from previous used
            passwords.</span
          >
        </div>
        <InputText
          type="password"
          placeholder="Enter new password"
          label="Password"
          v-model:value.trim="newpassword"
          name="email"
       
        />
        <span class="sign-in__form__submit__description"
          >Must be at least 8 characters.</span
        >
        <InputText
          type="password"
          placeholder="Confirm password"
          label="Confirm Password"
          v-model:value.trim="confirmpassword"
          name="email"
          wrongInput
        />
        <span
          class="sign-in__form__submit__description sign-in__form__submit__description_error"
          >New password and comfirm new password do not match</span
        >

        <div class="sign-in__form__submit__inputs__sign">
          <router-link to="/newpassword">
            <Button label="Reset Password" />
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
@import url('../assets/sign.scss');
</style>
