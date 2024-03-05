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
          <Button label="Continue With Google" color="secondary" />
          <Button label="Continue With Twitter" color="secondary" />
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
              to="/reset-password"
            >
              Forget your password
            </router-link>
          </div>

          <div class="sign-in__form__submit__inputs__sign">
            <router-link to="/">
              <Button label="Sign In" />
            </router-link>
            <span>
              Don’t have an account?
              <router-link to="/signup">Sign up </router-link>
            </span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sign-in {
  display: flex;
  gap: 70px;
  @media (max-width: 992px) {
    flex-direction: column;
  }
  &__image {
    img {
      @media (max-width: 767px) {
        display: none;
      }
    }
    @media (max-width: 992px) {
      order: 2;
    }
  }
  &__form {
    padding-top: 60px;
    flex-grow: 1;
    @media (max-width: 992px) {
      order: 1;
      padding-top: 30px;
      padding-left: 30px;
    }
    &__title {
      font-family: var(--second-family);
      font-weight: 600;
      font-size: 34px;
      letter-spacing: 0.02em;
      color: #333;
    }
    &__submit {
      padding-right: 100px;
      &__buttons {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        margin: 50px 0;
      }
      &__divider {
        display: flex;
        gap: 24px;
        align-items: center;
        &__text {
          font-weight: 400;
          font-size: 18px;
          color: #666;
          text-transform: uppercase;
        }
      }
      &__inputs {
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-top: 50px;
        &__sign {
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-weight: 400;
          font-size: 16px;
          color: #3c4242;
          a {
            display: inline-block;
            text-decoration: underline;
          }
        }
        &__hide {
          display: flex;
          gap: 15px;
          font-weight: 400;
          font-size: 18px;
          text-align: right;
          color: #807d7e;
          cursor: pointer;
        }
        &__forgot {
          font-weight: 400;
          font-size: 16px;
          text-decoration: underline;
          text-decoration-skip-ink: none;
          text-align: right;
          color: #3c4242;
          text-decoration: underline;
          display: block;
          text-align: end;
          margin-top: 10px;
          @media (max-width: 992px) {
            text-align: start;
          }
        }
      }
    }
  }
}
.divider {
  height: 2px;
  background: rgba(102, 102, 102, 0.25);
  width: 100%;
}
</style>
