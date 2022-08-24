<template>
  <div class="wrapper">
    <div class="home-page">
      <h1>ABOUT US</h1>
      <img :src="info.url" alt="cats" :width="info.width" :height="info.height">
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import { Users } from '@Models'

export default {
  name: 'AboutUs',
  data() {
    return {
      info: {},
      user: {
        name: 'Cat',
        age: 2
      }
    }
  },
  computed: {
    ...mapActions({
      cat: 'cats/getCats'
    }),
    // users() {
    //   const copy = this.user
    //   return new Users(copy)
    // }
  },
  async mounted(){
    // this.users(user)
    await this.cat.then((data) => {
      this.info = data[0]
    })
  }
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
