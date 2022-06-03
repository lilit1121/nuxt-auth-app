<template>
  <div class="header-container">
    <header class="the-header">
      <div @click="toHome" class="logo">
        <img class="logo-icon" src="/favicon.ico" alt="" />
        <nuxt-link to="/">HOME</nuxt-link>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item">
            <nuxt-link to="/contact-us">Contact Us</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about">About Us</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/login">Login</nuxt-link>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',

  methods: {
    toHome() {
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
.header-container {
  height: 60px;
}
.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(0, 33, 41, 0.7);
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
  transition: all 0.2s;
}
.the-header:hover,
.the-header:active {
  background-color: rgb(0, 33, 41);
}
.logo {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 0 10px;
  font-size: 1.3rem;
}
.logo-icon {
  width: 40px;
  margin-right: 8px;
  cursor: pointer;
}
.logo a {
  text-decoration: none;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
}
.spacer {
  flex: 1;
}
.navigation-items {
  display: none;
}
.search-input {
  width: 140px;
  height: 25px;
  border-radius: 9px;
  background-color: #032a35;
  border: 1px solid #ccc;
}
@media (min-width: 830px) {
  .navigation-items {
    display: block;
  }
}
.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}
.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
}
.nav-item a {
  text-decoration: none;
  color: white;
  text-transform: uppercase;
}
.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: rgb(0 220 129);
}
</style>