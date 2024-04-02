<script setup>
import Button from '../components/Button.vue';
</script>

<template>
    <div class="order">
        <div class="order__text">
            <div class="order__text_padding">
                <span>Your Order is</span>
            <span>Confirmed</span>
            </div>
        
            <Button label="Continue Shopping" />
        </div>
        <div class="order__image">
            <img src="/order-confirmed.png" alt="confirmed" />
        </div>

      
    </div>
</template>

<style lang="scss" scoped>
.order {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media (max-width: 767px) {
        margin-top: 50px;
        margin-bottom: 50px;
    }
   &__text {
    position: absolute;
    top: 350px;
    right: 400px;
    @media (max-width: 1090px) {
        right: 140px;
    }
    @media (max-width: 767px) {
        position: static;
    }
    & span {
        display: block;
        font-family: var(--second-family);
            font-weight: 600;
            font-size: 30px;
            line-height: 111%;
            text-align: center;
            color: #3c4242;

    }
    &_padding {
        margin-bottom: 30px;
    }
   }
   &__image {
    // width: 900px;
    @media (max-width: 767px) {
        display: none;
    }
   }

}
</style>
