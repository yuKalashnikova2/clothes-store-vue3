<template>
  <div class="feedback">
    <div class="feedback__info">
      <div class="feedback__info__avatar">
        <img src="/avatar.png" alt="avatar" />
      </div>

      <div class="feedback__info__stars">
        <div v-for="star in 5">
          <img src="/star.svg" alt="star" />
        </div>
      </div>
    </div>
    <span class="feedback__name">Name Last</span>
    <p class="feedback__text">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est
      sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
      mollit. Exercitation veniam consequat sunt nostrud amet.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.feedback {
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1.8px solid #bebcbd;
  border-radius: 10px;
  padding: 23px;

  background: #fff;
  padding: 23px;
  &__info {
    display: flex;
    justify-content: space-between;
    &__avatar {
      width: 57px;
      height: 57px;
      & img {
        width: 100%;
        object-fit: cover;
      }
    }
    &__stars {
      display: flex;
      gap: 4px;
      max-width: 130px;
      & img {
        width: 100%;
        object-fit: cover;
      }
    }
  }

  &__name {
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 22px;
    letter-spacing: 0.02em;
    color: #3c4242;
  }
  &__text {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #807d7e;
  }
}
</style>
