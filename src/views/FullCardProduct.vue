<script setup>
import { ref } from 'vue'
import { useFullCardStore } from '../stores/fullcard.js'
import Button from '../components/Button.vue'
import Title from '../components/Title.vue'

import FullCardSlider from '../components/FullCard/FullCardSlider.vue'
import FullCardTable from '../components/FullCard/FullCardTable.vue'
import FullCardColors from '../components/FullCard/FullCardColors.vue'

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

        <div class="full-card__description__size">
          <span class="full-card__description__info__title">Select size</span>
          <div class="full-card__description__size__list">
            <div class="full-card__description__size__list__item">XS</div>
            <div class="full-card__description__size__list__item">S</div>
            <div class="full-card__description__size__list__item">M</div>
            <div class="full-card__description__size__list__item">L</div>
            <div class="full-card__description__size__list__item">XL</div>
          </div>
        </div>

        <FullCardColors />

        <div class="full-card__description__buttons">
          <Button label="Add To Cart" />
          <Button label="$63.00" color="secondary" />
        </div>
      </div>

      <div class="full-card__description__divider"></div>

      <div class="full-card__description__product-details">
        <div class="full-card__description__product-details__item">
          <div class="full-card__description__product-details__item__icon">
            <img src="/details-product/credit-card.svg" alt="credit-card" />
          </div>

          <span>Secure payment</span>
        </div>

        <div class="full-card__description__product-details__item">
          <div class="full-card__description__product-details__item__icon">
            <img src="/details-product/size-fit.svg" alt="size-fit" />
          </div>
          <span>Size & Fit</span>
        </div>

        <div class="full-card__description__product-details__item">
          <div class="full-card__description__product-details__item__icon">
            <img src="/details-product/free-shipping.svg" alt="" />
          </div>
          <span>Free shipping</span>
        </div>

        <div class="full-card__description__product-details__item">
          <div class="full-card__description__product-details__item__icon">
            <img src="/details-product/truck.svg" alt="" />
          </div>
          <span>Free Shipping & Returns</span>
        </div>
      </div>
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
      // &__title {
      //   display: block;
      //   font-weight: 600;
      //   font-size: 18px;
      //   color: #3f4646;
      //   margin-bottom: 25px;
      // }
    }
    &__size {
      &__list {
        display: flex;
        gap: 20px;
        &__item {
          min-width: 38px;
          font-weight: 500;
          font-size: 14px;
          text-align: center;
          color: #3c4242;
          border: 1.5px solid #bebcbd;
          border-radius: 12px;
          padding: 9px 10px;
          cursor: pointer;
          &:hover {
            background: rgba(190, 188, 189, 0.1);
          }
        }
      }
    }
    // &__colors {
    //   &__list {
    //     display: flex;
    //     gap: 20px;
    //     &__item {
    //       width: 22px;
    //       height: 22px;
    //       margin: 4px;
    //       border-radius: 50%;
    //       background: #3c4242;
    //       &_bg-yellow {
    //         background: #edd146;
    //       }
    //       &_bg-pink {
    //         background: #eb84b0;
    //       }
    //       &_bg-red {
    //         background: #9c1f35;
    //       }
    //       &_active {
    //         border: 1px solid #3c4242;
    //         border-radius: 50%;
    //       }
    //     }
    //   }
    // }
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
    &__product-details {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-top: 35px;
      &__item {
        display: flex;
        gap: 15px;
        align-items: center;
        margin-bottom: 20px;
        &__icon {
          background: #f6f6f6;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        & span {
          font-weight: 500;
          font-size: 18px;
          color: #3c4242;
        }
      }
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
