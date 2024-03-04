<script setup>

</script>

<template>
  <div class="container">
    <RouterView name="header"></RouterView>
    <RouterView name="main"></RouterView>
    <RouterView name="footer"></RouterView>
  </div>
 
</template>

<style lang="scss" scoped>
  .container {
    max-width: 1440px;
    margin: 0 auto;
    background: #FFF;
  }
</style>
