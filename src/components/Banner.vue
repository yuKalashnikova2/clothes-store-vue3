<script setup>
import Button from './Button.vue'
import { Scrollbar, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/scss'
import 'swiper/scss/scrollbar'
</script>
<template>
 
  <Swiper
    :slides-per-view="1"
    :touch="true"
    :space-between="50"
    :modules="[Scrollbar, Autoplay]"
    :scrollbar="{ draggable: true }"
    effect="scrollbar"

  >
  <!-- :autoplay="{ delay: 5000 }" -->
    <SwiperSlide>
      <div class="banner">
        <div class="banner__text">
          <h5 class="banner__subtitle">T-shirt / Tops</h5>
          <h1 class="banner__title">Summer Value Pack</h1>
          <h4 class="banner__subtitle">cool / colorful / comfy</h4>
          ool / Colorful / Comfy Shop Now

          <router-link to="/shopmen">
            <Button label="Shop Now" size="medium" class="shop_width" />
          </router-link>
        </div>
        <div class="for"></div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="banner">
        <div class="banner__text"></div>
        <div class="for"></div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss" scoped>
.banner {
  background-image: url('/banner.png');
  background-position: center;
  background-size: cover;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 716px;
  width: 100%;
  @media (max-width: 992px) {
    display: block;
    height: 500px;
    
  }
  &__text {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 88px 0 130px 193px;
    @media (max-width: 992px) {
      padding: 30px 10px 30px 50px;
    }
  }
  &__subtitle {
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 32px;
    line-height: 118%;
    text-transform: capitalize;
    color: #fff;
    @media (max-width: 992px) {
      font-size: 25px;
    }
  }
  &__title {
    font-family: var(--second-family);
    font-weight: 800;
    font-size: 78px;
    line-height: 120%;
    letter-spacing: 0em;
    color: #fff;
    @media (max-width: 992px) {
      font-size: 32px;
    }
  }
}
.for {
  @media (max-width: 767px) {
    display: none;
  }
}
.swiper {
  background-color: #fff;
  & img {
    width: 100%;
  }
}
.shop_width {
  @media(max-width: 992px) {
    width: 300px;
  }
  @media(max-width: 767px) {
    width: 200px;
  }
}
</style>
