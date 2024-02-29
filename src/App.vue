<script setup>
import HeaderTop from './components/HeaderTop.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="container">
    <HeaderTop></HeaderTop>
    <RouterView></RouterView>
    <Footer />
  </div>
 
</template>

<style lang="scss" scoped>
  .container {
    max-width: 1440px;
    margin: 0 auto;
    background: #FFF;
  }
</style>
