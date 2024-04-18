<script setup>
import { ref } from 'vue'
import ProductCard from './ProductCard.vue'
import { useFirebaseStore } from '../stores/getDB'

const store = useFirebaseStore()
const isMale = ref(true)
</script>

<template>
    <div class="product__card__catalog">
        <div  v-for="card in store.men" :key="card.name">
                 <ProductCard 
                 :title="card.name"
                 :subtitle="card.add_info"
                 :price="card.price"
                 :imageUrl="card.link_img[0]"
                 :id="card.id"
                 :isMale="isMale"  />
        </div>
      
       
    </div>
</template>

<style lang="scss" scoped>
    .product__card__catalog {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }
</style>