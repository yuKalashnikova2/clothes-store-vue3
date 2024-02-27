<script setup>
import Banner from '../components/Banner.vue';
import ContentCardList from '../components/ContentCardList.vue';
</script>

<template>
    <div>
        <Banner />

        <div class="content">
            <ContentCardList />
        </div>
    </div>
</template>

<style lang="scss">
    .content {
        width: 100%;
        padding: 80px 100px;

        @media (max-width: 992px) {
            padding: 30px 20px;
        }
    }
</style>