<script setup>
import HeaderTop from './components/HeaderTop.vue'
</script>

<template>
  <div class="container">
    <HeaderTop></HeaderTop>
    <RouterView></RouterView>
  </div>
 
</template>

<style lang="scss" scoped>
  .container {
    max-width: 1440px;
    margin: 0 auto;
    background: #FFF;
  }
</style>
