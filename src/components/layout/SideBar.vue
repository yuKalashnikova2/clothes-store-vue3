<script setup>
import { ref } from 'vue'
import { useProductsStore } from '../../stores/index.js'
import { useFirebaseStore } from '../../stores/getDB'
import { useFilterItems} from '../../stores/filterItems'
import VueSlider from 'vue-3-slider-component'
import SidebarTitle from './SidebarTitle.vue'
import SidebarSizeItem from './SidebarSizeItem.vue'
import SidebarColorItem from './SidebarColorItem.vue'


const value = ref([40, 60])
const maxRange = ref(200)
const minRange = ref(20)
const store = useProductsStore()
const db = useFirebaseStore()
const filterStore = useFilterItems()


</script>

<template>
    <div class="sidebar">
        <SidebarTitle
            @click="store.isVisibleCategories = !store.isVisibleCategories"
            title="Filter"
            icon="filter"
        />
        <div
            class="sidebar__categories animation-visible"
            v-if="store.isVisibleCategories"
        >
            <ul class="sidebar__categories__list">
                <li
                    class="sidebar__categories__list__item"
                    v-for="category in filterStore.categoriesClothes"
                    :key="category"
                    @click="filterStore.changeCategory(category)"
                >
                    {{ category }}
                    <img src="/arrow-rigth.svg" alt="arrow-rigth" />
                </li>
            </ul>
  
            <div></div>
        </div>

        <SidebarTitle
            @click="store.isVisiblePrice = !store.isVisiblePrice"
            title="Price"
            icon="arrow-up-prices"
        />
        <div class="animation-visible" v-if="store.isVisiblePrice">
            <div class="ranges__wrapper">
                <VueSlider
                    v-model="value"
                    :max="maxRange"
                    :minRange="minRange"
                    :adjustable="false"
                    :tooltip="'none'"
                    :dotStyle="{ backgroundColor: '#8a33fd' }"
                    :processStyle="{ backgroundColor: '#8a33fd' }"
                    :focusStyle="{ borderColor: 'none' }"
                />
                <div class="ranges__price__text">
                    <div>${{ value[0] }}</div>
                    <div>${{ value[1] }}</div>
                </div>
            </div>
        </div>

        <SidebarTitle
            @click="store.isVisibleColors = !store.isVisibleColors"
            title="Colors"
            icon="arrow-up-colors"
        />
        <div
            class="sidebar__colors animation-visible"
            v-if="store.isVisibleColors"
        >
            <SidebarColorItem
                v-for="color in db.colors"
                :key="color.id"
                :color="color.name"
                @chooseColor="filterStore.changeCategory(color.name)"
            />
        </div>

        <SidebarTitle
            @click="store.isVisibleSize = !store.isVisibleSize"
            title="Size"
            icon="arrow-up-sizes"
        />
        <div class="sidebar__size animation-visible" v-if="store.isVisibleSize">
            <SidebarSizeItem
                v-for="size in db.sizes"
                :key="size.id"
                :size="size.name"
                @chooseSize="filterStore.changeCategory(size)"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.sidebar {
    min-width: 295px;
    border-right: 1px solid rgb(190, 188, 189, 0.4);
    border-left: 1px solid rgb(190, 188, 189, 0.4);
    &__categories {
        padding: 40px 0;

        &__list {
            display: flex;
            flex-direction: column;

            &__item {
                font-weight: 600;
                font-size: 16px;
                color: #8a8989;
                display: flex;
                justify-content: space-between;
                padding: 9px 33px;

                &:hover {
                    background: rgb(190, 188, 189, 0.4);
                    cursor: pointer;
                    transition: 0.2s ease-in-out;
                }
            }
        }
    }
    &__price {
        padding: 40px 34px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    &__colors {
        padding: 40px 34px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 18px;
    }
    &__size {
        padding: 40px 34px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        box-sizing: border-box;
    }
}

.ranges {
    &__wrapper {
        padding: 40px 34px;
    }
    &__price__text {
        display: flex;
        gap: 20px;
        margin-top: 20px;
        & div {
            font-weight: 500;
            font-size: 16px;
            color: #3c4242;
            border: 1px solid rgba(190, 188, 189, 0.8);
            border-radius: 8px;
            opacity: 0.8;
            padding: 7px 30px;
            width: 97px;
            &:hover {
                background: rgba(190, 188, 189, 0.1);
                cursor: pointer;
            }
        }
    }
}

.animation-visible {
    animation: slideInFromTop 1s ease forwards;

    @keyframes slideInFromTop {
        from {
            transform: translateY(-10%);
        }
        to {
            transform: translateY(0);
        }
    }
}

.vue-slider-process {
    background-color: #8a33fd;
}
.vue-slider-dot-handle {
    background-color: #8a33fd;
}
</style>
