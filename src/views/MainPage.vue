<script setup>
import Button from '../components/Button.vue'
import Banner from '../components/Banner.vue'
import ContentCardList from '../components/ContentCardList.vue'
</script>

<template>
  <div>
    <Banner />

    <div class="content">
      <ContentCardList />

      <div class="content__info">
        <div class="content__info__text">
          <div>
            <h2 class="content__info__title">
              WE MADE YOUR EVERYDAY FASHION BETTER!
            </h2>
            <span class="content__info__subtitle"
              >In our journey to improve everyday fashion, euphoria presents
              EVERYDAY wear range - Comfortable & Affordable fashion 24/7</span
            >
            <router-link class="content__info__button" to="/shop">
                <Button label="Shop Now" />
            </router-link>
        
          </div>
        </div>

        <div class="content__info__image">
          <img src="/content/content-4.png" alt="pic" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.content {
  width: 100%;
  padding: 80px 100px;

  @media (max-width: 992px) {
    padding: 30px 20px;
  }
  &__info {
    display: flex;
    color: #fff;
    margin-top: 72px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    overflow: hidden;
    @media (max-width: 992px) {
      flex-direction: column;
    }
    &__text {
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url('/content/content-3.png');
      background-size: cover;
      background-position: center;
      padding: 0 74px;
    }
    &__title {
      font-family: var(--second-family);
      font-weight: 800;
      font-size: 34px;
      line-height: 147%;
      letter-spacing: 0.01em;
      padding-bottom: 30px;
    }
    &__subtitle {
        display: block;
      font-family: var(--font-family);
      font-weight: 300;
      font-size: 20px;
      letter-spacing: 0.05em;
    }
    &__image {
      flex-shrink: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__button {
        display: block;
        padding-top: 50px;
    }
  }
}
</style>
