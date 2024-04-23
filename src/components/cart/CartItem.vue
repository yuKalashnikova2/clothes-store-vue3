<script setup>
import Counter from './Counter.vue'
const props = defineProps({
    id: {
        type: String,
        default: 'product_id_1',
    },
    title: {
        type: String,
        default: 'Title',
    },
    price: {
        type: Number,
        default: 100,
    },
    image: {
        type: String,
        default: '/no-foto.png',
    },
    color: {
        type: String,
        default: 'red',
    },
    size: {
        type: String,
        default: 'L',
    }
})
</script>
<template>
    <div class="cart__item">
        <div class="cart__item__top">
            <div class="cart__item__image">
                <img :src="image" alt="product">
            </div>
         
            <div class="cart__item__info">
               <span class="cart__item__title">{{ title }}</span>
               <span class="cart__item__description">Color: {{ color }}</span>
               <span class="cart__item__description">Size: {{ size }}</span>
            </div>
        </div>

        <div class="cart__item__price">
            ${{ price }}
        </div>

        <Counter />
        <div class="cart__item__shipping">
            Free
        </div>
        <div class="cart__item__price">
            ${{ price }}
        </div>
        <div class="cart__item__remove">
            <img src="/deletecon.svg" alt="trash">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .cart__item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 50px 0;
        &__top {
            display: flex;
            gap: 20px;
      
        }
        &__image {
                width: 105px;
                height: 120px;
                border-radius: 12px;
                overflow: hidden;
                & img {
                    width: 100%;
                    
                }
            }
            &__info {
                display: flex;
                flex-direction: column;
                &__title {
                    font-weight: 700;
                    font-size: 18px;
                    letter-spacing: 0.02em;
                    color: #3c4242;
                    margin-bottom: 9px;
                }
                &__description {
                    font-weight: 500;
                    font-size: 14px;
                    color: #807d7e;
                    margin-bottom: 5px;
                }
            }
        &__price {
            font-weight: 700;
            font-size: 18px;
            color: #3c4242;
        }
        &__shipping {
            font-weight: 700;
            font-size: 18px;
            letter-spacing: 0.02em;
            color: #bebcbd;
            text-transform: uppercase;
        }
        &__remove {
            cursor: pointer;
            width: 15px;
            height: 18px;
            padding-right: 26px;
        }
    }
</style>