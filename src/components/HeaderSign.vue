<script setup>
    import Button from './Button.vue';
</script>
<template>
    <header class="header">
      <img class="header__logo" src="/logo.svg" alt="" />

      <div class="header__search">
      <img src="/search.svg" alt="search" />
      <input type="text" placeholder="Search" />
    </div>

    <div>
        <select class="sign__select" name="" id="">
        <option value="english">English (united States)</option>
        <option  value="women">Russian</option>
        <option  value="t-shirt">Spanish</option>
        <option  value="men">Turkish</option>
      </select>
    </div>

    <div class="sign-buttons">
        <router-link to="/">
            <Button label="Login" />
        </router-link>
       
        <router-link to="/signup">
  <Button label="Sign Up" color="secondary" />
        </router-link>
      
    </div>
    </header>
    

</template>

<style lang="scss">


.sign {
    &__select {
    border: none;
    font-weight: 400;
    font-size: 18px;
    color: #333;
    width: 100%;
    min-width: 234px;
    padding: 10px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    display: block;
    cursor: pointer;
    background-image: url('/arrow-header.svg');
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;
}
&-buttons {
  display: flex;
  gap: 30px;

  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
  }
}
}

</style>