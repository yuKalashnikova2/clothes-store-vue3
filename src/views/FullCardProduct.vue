<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useFirebaseStore } from '../stores/getDB'
import { useAuthUsersStore } from '../stores/authUsers'
import Button from '../components/Button.vue'
import Title from '../components/Title.vue'
import FullCardSideSlider from '../components/FullCard/FullCardSideSlider.vue'
import FullCardTable from '../components/FullCard/FullCardTable.vue'
import FullCardColors from '../components/FullCard/FullCardColors.vue'
import FullCardSize from '../components/FullCard/FullCardSize.vue'
import FullCardProductDetails from '../components/FullCard/FullCardProductDetails.vue'
import Loader from '../components/Loader.vue'
const db = useFirebaseStore()
const auth = useAuthUsersStore()

const route = useRoute()
const selectedProduct = ref('')
const photo = ref([])

watchEffect(() => {
    const id = route.params.id
    console.log(route.path)
    if (id !== undefined) {
        const products =
            route.path === '/shopemen/fullcardproduct/' + id ? db.men : db.women
        const foundProduct = products.find((product) => product.id === id)
        if (foundProduct) {
            selectedProduct.value = foundProduct
            photo.value = foundProduct.link_img
            console.log(photo.value, 'Проверяем массив тут')
        } else {
            console.error('Продукт с указанным id не найден')
        }
    } else {
        console.error('Отсутствует параметр id в маршруте')
    }
})
const currentImage = ref('')

const updateCurrentImage = (image) => {
    currentImage.value = image
}
</script>

<template>
    <div class="full-card">
        <div class="full-card__image">
            <div
            v-if="photo.length === 0"
             class="loader_full">
                <Loader  />
            </div>
            <FullCardSideSlider
                :images="photo"
                @imageChanged="updateCurrentImage"
            />
            <div class="full-card__image__photo">
                <img
                    :src="[currentImage === '' ? photo[0] : currentImage]"
                    alt="photo"
                />
            </div>
        </div>

        <div class="full-card__description">
            <div class="full-card__description__info">
                <h1 class="full-card__description__title">
                    {{ selectedProduct.name }}
                </h1>
                <FullCardSize />

                <FullCardColors />

                <div class="full-card__description__buttons">
                    <Button
                        label="Add To Cart"
                        @click="auth.addToCart(selectedProduct)"
                    />
                    <Button label="$63.00" color="secondary" class="dis" />
                </div>
            </div>

            <div class="full-card__description__divider"></div>
            <FullCardProductDetails />
        </div>
    </div>

    <div class="full-card__info">
        <Title title="Product Description" decor />
        <div class="full-card__info_flex">
            <div class="full-card__info__main">
                <p class="full-card__info__main__text">
                    {{ selectedProduct.description }}
                </p>

                <FullCardTable />
            </div>

            <div class="full-card__info__video">
                <iframe
                    :src="selectedProduct.link_video"
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
        position: relative;
        @media (max-width: 992px) {
            padding-left: 0;
            flex-direction: column;
        }
        &__photo {
            width: 520px;
            height: 785px;
            overflow: hidden;
            @media (max-width: 992px) {
                width: 400px;
                height: 400px;
            }
            @media (max-width: 576px) {
                width: 200px;
                height: 200px;
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
            @media (max-width: 992px) {
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
