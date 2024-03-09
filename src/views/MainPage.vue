<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import Button from '../components/Button.vue'
import Banner from '../components/Banner.vue'
import WidgetCardList from '../components/WidgetCardList.vue'
import CardCategories from '../components/CardCategories.vue'
import CardTitle from '../components/CardTitle.vue'
import { useProductsStore } from '../stores/index.js'
import TopBrandsDeal from '../components/TopBrandsDeal.vue'
import FeedbacCard from '../components/FeedbacCard.vue'
import 'swiper/css'
import 'swiper/css/pagination'

const store = useProductsStore()
</script>

<template>
  <div>
    <Banner />

    <div class="content">
      <WidgetCardList />

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
              <Button label="Shop Now" size="medium" />
            </router-link>
          </div>
        </div>

        <div class="content__info__image">
          <img src="/content/content-4.png" alt="pic" />
        </div>
      </div>

      <div class="content__decor">
        <div>
          <CardTitle title="Categories For Men" />
          <div class="card__list">
            <CardCategories :productsMen="store.productsMen" />
          </div>
        </div>

        <div>
          <CardTitle title="Categories For Women" />
        </div>
      </div>

      <TopBrandsDeal />

      <div class="content_margin_135">
        <CardTitle title="Feedback" />
        <swiper :modules="[Pagination]" :pagination="true">
          <SwiperSlide class="content__feedback">
            <FeedbacCard />
            <FeedbacCard />
            <FeedbacCard />
          </SwiperSlide>

          <SwiperSlide class="content__feedback">
            <FeedbacCard />
            <FeedbacCard />
            <FeedbacCard />
          </SwiperSlide>
          <SwiperSlide class="content__feedback">
            <FeedbacCard />
            <FeedbacCard />
            <FeedbacCard />
          </SwiperSlide>
        </swiper>
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
      @media (max-width: 992px) {
        padding: 40px 30px;
      }
    }
    &__title {
      font-family: var(--second-family);
      font-weight: 800;
      font-size: 34px;
      line-height: 147%;
      letter-spacing: 0.01em;
      padding-bottom: 30px;
      @media (max-width: 992px) {
        font-size: 24px;
      }
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
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    &__button {
      display: block;
      padding-top: 50px;
    }
  }
  &__decor {
    margin-top: 80px;
    @media (max-width: 992px) {
      margin-top: 50px;
    }
    & > * {
      margin-bottom: 103px;
      @media (max-width: 992px) {
        margin-bottom: 50px;
      }
    }
  }
  &_margin_135 {
    margin-top: 135px;
    @media (max-width: 992px) {
      margin-top: 35px;
    }
  }
  &__feedback {
    margin-top: 70px;
    display: flex;
    gap: 23px;
    @media (max-width: 992px) {
      flex-direction: column;
      margin-top: 35px;
    }
  }
}
.card__list {
  display: flex;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  margin-top: 70px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    margin-top: 25px;
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.swiper-pagination-bullet {
  background-color: rgba(34, 34, 34, 0.3);
  @media (max-width: 992px) {
    display: none;
  }

  &-active {
    background-color: #3c4242;
  }
}
</style>
