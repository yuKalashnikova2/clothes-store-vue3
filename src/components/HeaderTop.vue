<script setup>
</script>
<template>
  <header class="header">
    <router-link to="/">
      <img class="header__logo" src="/logo.svg" alt="" />
    </router-link>

    <ul class="header__details">
      <router-link to="/">
        <li class="header__details__item">Shop</li>
      </router-link>

      <router-link to="/shopmen">
        <li class="header__details__item">Men</li>
      </router-link>

      <router-link to="/shopwomen">
        <li class="header__details__item">Women</li>
      </router-link>

      <router-link to="/">
        <li class="header__details__item">Combos</li>
      </router-link>

      <router-link to="/">
        <li class="header__details__item">Joggers</li>
      </router-link>
    </ul>

    <div class="header__search">
      <img src="/search.svg" alt="search" />
      <input type="text" placeholder="Search" />
    </div>

    <div class="header__icons">
      <router-link to="/favorites" class="header__icons__item">
        <img src="/heart/heart.svg" alt="favorite" />
      </router-link>

      <router-link to="/user" class="header__icons__item">
        <img src="/user.svg" alt="user" />
      </router-link>
      <router-link to="/cart" class="header__icons__item">
        <img src="/cart.svg" alt="cart" />
      </router-link>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 100px;
  background-color: #fff;
  border-bottom: 1px solid #bebcbd;
  @media (max-width: 1250px) {
    padding: 15px 25px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 15px;
    padding: 10px 20px;
    align-items: flex-start;
  }

  &__logo {
    width: 92px;
    cursor: pointer;
  }
  &__details {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    @media (max-width: 1250px) {
      gap: 15px;
    }
    @media (max-width: 767px) {
      gap: 15px;
      flex-direction: column;
    }
    &__item {
      font-size: 22px;
      font-weight: bold;
      cursor: pointer;
      color: #807d7e;
      &:active,
      &:hover {
        color: #3c4242;
      }
    }
  }
  &__search {
    display: flex;
    align-items: center;
    background-color: #f6f6f6;
    font-size: 16px;
    color: #807d7e;
    border-radius: 8px;
    padding: 12px 20px;
    margin-right: 20px;
    @media (max-width: 992px) {
      width: 100%;
      margin-right: 0;
    }
    & input {
      background-color: #f6f6f6;
    }
    & img {
      width: 20px;
      height: 20px;
      margin-right: 12px;
    }
  }
  &__icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    &__item {
      cursor: pointer;
      width: 44px;
      height: 44px;
      background-color: #f6f6f6;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;

      & img {
        width: 20px;
        height: 20px;
      }
    }
  }
}

img {
  display: block;
}
</style>
