<template>
    <div class="order__item">
        <div class="order__item__top">
            <div class="order__item__image">
            <img src="/ex.png" alt="image">
        </div>

        <div class="order__item__info">
            <h2 class="order__item__title">Blue Flower Print Crop Top 
                <span> x 1</span>
            </h2>
            <span class="order__item__description">Color: <span>Black</span></span>
        </div>
        </div>
   

        <div class="order__item__price">
            <span>$23.00</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .order__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 15px;
        padding-bottom: 15px;
        &__top {
            display: flex;
            gap: 15px;
        }
        &__image {
            width: 63px;
            height: 63px;
            border-radius: 4px;
            overflow: hidden;
            & img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        &__info {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
        &__title {
            font-weight: 700;
            font-size: 14px;
            letter-spacing: 0.02em;
            color: #3c4242;
            & span {
                color: #807d7e;
            }
        }
        &__description {
            font-weight: 700;
            font-size: 14px;
            letter-spacing: 0.02em;
            color: #3c4242;
            & span {
                font-weight: 500;
                color: #807d7e;
            }
        }
        &__price {
            font-weight: 700;
            font-size: 14px;
            letter-spacing: 0.02em;
            color: #807d7e;
        }
    }
</style>