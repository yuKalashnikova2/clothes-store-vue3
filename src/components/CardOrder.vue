<template>
    <div class="order">
        <div class="order__info">
            <span class="order__title">Order no: #123456789</span>

            <div class="order__description">
                <div class="order__description_flex">
                    <span class="order__text"
                        >Order Date :
                        <span class="order__text_color-light"
                            >2 June 2023 2:40 PM
                        </span></span
                    >
                    <span class="order__text"
                        >Estimated Delivery Date :
                        <span class="order__text_color-light">
                            8 June 2023</span
                        >
                    </span>
                </div>

                <div class="order__description_flex">
                    <span class="order__text"
                        >Order Status :
                        <span class="order__text_color-light"
                            >Progressive
                        </span></span
                    >
                    <span class="order__text"
                        >Payment Method :
                        <span class="order__text_color-light">
                            Cash on delivery
                        </span>
                    </span>
                </div>
            </div>
        </div>

        <div class="order__cards__descr">
            <div class="order__image">
                <img src="/product.png" alt="product" />
            </div>

            <div class="order__cards__descr__info">
                <span class="order__title order__title_sm">Title Card</span>
                <span class="order__text order__text_color-black"
                    >Color:
                    <span class="order__text_color-light">Black</span></span
                >
                <span class="order__text order__text_color-black"
                    >Qty: <span class="order__text_color-light">1</span></span
                >
                <span class="order__text">Total: $23.00</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.order {
    display: flex;
    flex-direction: column;
    padding: 20px 0 30px 0;
    &__info {
        background: #f6f6f6;
        border-radius: 8px;
        padding: 28px 47px;
    }
    &__title {
        font-weight: 600;
        font-size: 20px;
        color: #3c4242;
        &_sm {
            font-size: 16px;
        }
    }
    &__description {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 14px;
        @media (max-width: 650px) {
            display: block;
        }
        &_flex {
            display: flex;
            flex-direction: column;
            gap: 7px;
        }
    }
    &__text {
        font-weight: 600;
        font-size: 14px;
        color: #807d7e;
        &_color-light {
            font-weight: 400;
            color: #bebcbd;
        }
        &_color-black {
            color: #3c4242;
        }
    }
    &__cards__descr {
        display: flex;
        align-items: center;
        gap: 25px;
        margin-top: 30px;
        &__info {
            display: flex;
            flex-direction: column;
            flex-grow: 2;
        }
    }
    &__image {
        width: 96px;
        height: 96px;
        border-radius: 4px;
        overflow: hidden;
        & img {
            width: 100%;
        }
    }
}
</style>
