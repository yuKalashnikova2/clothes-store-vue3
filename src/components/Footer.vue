<template>
  <div class="footer">
    <div class="footer_padding">
      <div class="footer__info">
        <div class="footer__info__text">
          <h2 class="footer__info__title">Need Help</h2>
          <div class="footer__info__description">
            <span>Contact Us</span>
            <span>Track Order</span>
            <span>Returns & Refunds</span>
            <span>FAQ's</span>
            <span>Career</span>
          </div>
        </div>

        <div class="footer__info__text">
          <h2 class="footer__info__title">Company</h2>
          <div class="footer__info__description">
            <span>About Us</span>
            <span>euphoria Blog</span>
            <span>euphoriastan</span>
            <span>Collaboration</span>
            <span>Media</span>
          </div>
        </div>

        <div class="footer__info__text">
          <h2 class="footer__info__title">More Info</h2>
          <div class="footer__info__description">
            <span>Term and Conditions</span>
            <span>Privacy Policy</span>
            <span>Shipping Policy</span>
            <span>Sitemap</span>
          </div>
        </div>

        <div class="footer__info__text">
          <h2 class="footer__info__title">Location</h2>
          <div class="footer__info__description">
            <span>support@euphoria.in</span>
            <span>Eklingpura Chouraha, Ahmedabad Main Road</span>
            <span>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</span>
          </div>
        </div>
      </div>

      <div class="footer__social">
        <div class="footer__social__icons">
          <div class="footer__social__icons__item">
            <img src="/social/soc-1.svg" alt="facebook" />
          </div>
          <div class="footer__social__icons__item">
            <img src="/social/soc-2.svg" alt="instagram" />
          </div>
          <div class="footer__social__icons__item">
            <img src="/social/soc-3.svg" alt="twitter" />
          </div>
          <div class="footer__social__icons__item">
            <img src="/social/soc-4.svg" alt="youtube" />
          </div>
        </div>

        <div class="footer__social__download">
          <h2 class="footer__info__title">Download The App</h2>
          <div class="footer__social__download__app">
            <div class="footer__social__download__app__item">
              <img src="/social/googleplay.svg" alt="" />
              <div class="footer__social__download__app__item__text">
                <span>android app on</span>
                <span class="footer__social__download__app__item__text_font"
                  >Google Play</span
                >
              </div>
            </div>
            <div class="footer__social__download__app__item">
              <img src="/social/appstore.svg" alt="" />
              <div class="footer__social__download__app__item__text">
                <span>Available on the</span>
                <span class="footer__social__download__app__item__text_font"
                  >App Store</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__select__wrapper">
      <select class="footer__select" name="" id="">
        <option >Popular Categories</option>
        <option  value="women">Women</option>
        <option  value="t-shirt">T-shirt</option>
        <option  value="men">Men</option>
      </select>
    </div>

    <div class="footer__copyright">
      <span>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #3c4242;
  color: #f6f6f6;
  padding: 59px 110px;
  @media (max-width: 992px) {
    padding: 16px 30px;
  }
  &_padding {
    padding: 0 76px;
    @media (max-width: 992px) {
      padding: 0;
    }
  }
  &__info {
    display: flex;
    gap: 80px;
    @media (max-width: 992px) {
      flex-direction: column;
      gap: 20px;
    }
    &__text {
      display: flex;
      flex-direction: column;
      gap: 25px;
      min-width: 215px;

      @media (max-width: 992px) {
        gap: 1px;
      }
    }
    &__title {
      font-weight: 700;
      font-size: 28px;
      line-height: 217%;
    }
    &__description {
      display: flex;
      flex-direction: column;
      gap: 5px;
      & span {
        display: block;
        font-weight: 500;
        font-size: 18px;
        line-height: 217%;
      }
    }
  }
  &__social {
    display: flex;
    justify-content: space-between;
    margin-top: 77px;
    @media (max-width: 992px) {
      flex-direction: column;
      gap: 20px;
      margin-top: 30px;
    }
    &__icons {
      display: flex;
      gap: 10px;
      &__item {
        border-radius: 11px;
        width: 37px;
        height: 37px;
        background: #f6f6f6;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
    &__download {
      &__app {
        display: flex;
        gap: 21px;
        margin-top: 20px;
        &__item {
          display: flex;
          gap: 20px;
          padding: 9px;
          &__text {
            display: flex;
            flex-direction: column;
            font-weight: 400;
            font-size: 10px;
            color: #fff;

            &_font {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
  &__select {
    border-top: 1px solid #bebcbd;
    border-bottom: 1px solid #bebcbd;
    border-left: none;
    border-right: none;
    padding: 0.6em 1.4em 0.5em 0.8em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    display: block;
    font-weight: 700;
    font-size: 28px;
    line-height: 217%;
    background-color: #3c4242;
    color: #f6f6f6;
    outline: none;
    width: 100%;
    max-width: 100%;
    cursor: pointer;
    background-image: url('/select-arrow.svg');
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;
    &__wrapper {
      margin-top: 32px;
    }
  }
  &__copyright {
    font-weight: 700;
    font-size: 18px;
    line-height: 200%;
    text-align: center;
    padding-top: 37px;
    & span {
      display: block;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }
}
</style>
