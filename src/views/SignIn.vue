<script setup>
import HeaderSign from '../components/HeaderSign.vue'
</script>

<template>
  <HeaderSign />
  <div class="sign-in">
    <div class="sign-in__image">
      <img src="/signin.png" alt="pic" />
    </div>

    <div class="sign-in__form">
      <h2 class="sign-in__form__title">Sign In Page</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sign-in {
  display: flex;
  @media (max-width: 992px) {
    flex-direction: column;
  }
  &__image {
    img {
      @media (max-width: 992px) {
        height: 100px;
      }
    }
    @media (max-width: 992px) {
      order: 2;
    }
  }
  &__form {
    padding: 60px 100px 0 77px;
    &__title {
      font-family: var(--second-family);
      font-weight: 600;
      font-size: 34px;
      letter-spacing: 0.02em;
      color: #333;
    }
  }
}
</style>
