<template>
  <div class="wrapper">
    <div class="home-page">
      <h1>HOME PAGE</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.home-page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 80%;
  margin: 5rem auto 10rem auto;
}

h1 {
  margin-bottom: 2rem;
}
</style>
