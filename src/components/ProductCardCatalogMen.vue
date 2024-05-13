<script setup>
import { ref, watchEffect } from 'vue'
import ProductCard from './ProductCard.vue'
import { useFirebaseStore } from '../stores/getDB'
import { useFilterItems } from '../stores/filterItems'

const store = useFirebaseStore()
const storeFilter = useFilterItems()
const isMale = ref(true)
watchEffect(() => {
    storeFilter.chooseCat.value
    console.log(storeFilter.chooseCat.value, 'ДЛИНА МАССИВА')
})
</script>

<template>
    <div>
        <div class="product__card__catalog">
            <div v-for="item in storeFilter.chooseCat.value" :key="item.id">
                <ProductCard
                    :title="item.name"
                    :subtitle="item.add_info"
                    :imageUrl="item.link_img[0]"
                    :price="item.price"
                    :id="item.id"
                    :isMale="isMale"
                    :wholeList="item"
                />
            </div>
        </div>
    </div>
    <div v-if="storeFilter.chooseCat.length == 0">
        <div class="product__card__catalog">
            <div v-for="card in store.men" :key="card.name">
                <ProductCard
                    :title="card.name"
                    :subtitle="card.add_info"
                    :price="card.price"
                    :imageUrl="card.link_img[0]"
                    :id="card.id"
                    :isMale="isMale"
                    :wholeList="card"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.product__card__catalog {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
