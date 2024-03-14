<script setup>
import { useFullCardStore } from '../stores/fullcard.js'
import Button from '../components/Button.vue'
import Title from '../components/Title.vue'

import FullCardSlider from '../components/FullCard/FullCardSlider.vue'
import FullCardTable from '../components/FullCard/FullCardTable.vue'
import FullCardColors from '../components/FullCard/FullCardColors.vue'
import FullCardSize from '../components/FullCard/FullCardSize.vue'
import FullCardProductDetails from '../components/FullCard/FullCardProductDetails.vue'
const store = useFullCardStore()
</script>

<template>
  <div class="full-card">
    <div class="full-card__image">
      <FullCardSlider />
      <div class="full-card__image__photo">
        <img :src="store.images[store.currentIndex]" alt="photo" />
      </div>
    </div>

    <div class="full-card__description">
      <div class="full-card__description__info">
        <h1 class="full-card__description__title">
          Raven Hoodie With Black colored Design
        </h1>
        <FullCardSize />

        <FullCardColors />

        <div class="full-card__description__buttons">
          <Button label="Add To Cart" />
          <Button label="$63.00" color="secondary" />
        </div>
      </div>

      <div class="full-card__description__divider"></div>
      <FullCardProductDetails />
    </div>
  </div>

  <div class="full-card__info">
    <Title title="Product Description" />
    <div class="full-card__info_flex">
      <div class="full-card__info__main">
        <p class="full-card__info__main__text">
          100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible
          ribbed crew neck. Precisely stitched with no pilling & no fading.
          Provide all-time comfort. Anytime, anywhere. Infinite range of
          matte-finish HD prints.
        </p>

        <FullCardTable />
      </div>

      <div class="full-card__info__video">
        <iframe
          src="https://www.youtube.com/embed/6P3S2l1mY2k"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.full-card {
  display: flex;
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 30px;
  }
  &__image {
    display: flex;
    gap: 34px;
    background: #f6f6f6;
    padding-left: 100px;
    justify-content: center;
    align-items: center;
    @media (max-width: 992px) {
      padding-left: 0;
      flex-direction: column;
    }
    &__photo {
      width: 520px;
      height: 785px;
      overflow: hidden;
      @media (max-width: 992px) {
        width: 100%;
      }
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  &__description {
    padding-top: 87px;
    padding-left: 73px;
    padding-right: 100px;
    background: #fff;
    @media (max-width: 992px) {
      padding: 30px;
    }
    &__title {
      font-family: var(--second-family);
      font-weight: 600;
      font-size: 34px;
      line-height: 140%;
      letter-spacing: 0.02em;
      color: #3c4242;
      margin-bottom: 23px;
    }
    &__info {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    &__buttons {
      display: flex;
      gap: 25px;
      margin-bottom: 35px;
      @media (max-width: 576px) {
        flex-direction: column;
      }
    }
    &__divider {
      border-bottom: 1px solid #bebcbd;
      width: 100%;
    }
  }
}

.full-card__info {
  padding: 100px;
  display: flex;
  flex-direction: column;
  @media (max-width: 992px) {
    padding: 30px;
  }
  &_flex {
    display: flex;
    gap: 95px;
    padding: 30px 0;
    @media (max-width: 992px) {
      flex-direction: column;
      gap: 30px;
    }
  }
  &__main {
    max-width: 612px;
    &__text {
      display: block;
      font-weight: 400;
      font-size: 16px;
      line-height: 156%;
      letter-spacing: 0.02em;
      color: #807d7e;
    }
  }
  &__video {
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
    position: relative;
    padding-bottom: 20%;
    & iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 50%;
      border-radius: 12px;
    }
  }
}
</style>
