<template>
  <div></div>
</template>

<script>
export default {
  name: 'AuthModal',
  data() {
    return {
      loginErrors: {},
      signupErrors: {},
    }
  },
  methods: {
    loginUser(data) {
      this.loginErrors = {}
      this.$auth
        .loginWith('local', {
          data: {
            username: data.username,
            password: data.password,
          },
        })
        .then((response) => {
          this.dispatchActionBeforAuth()
          this.closeModal()
        })
        .catch(({ response }) => {
          this.loginErrors = response.data
        })
    },
    signUpUser(signUpData) {
      this.signupErros = {}
      this.$apiServices.auth
        .signUp(signUpData)
        .then((response) => {
          this.dispatchActionBeforAuth()

          this.closeModal()

          this.$router.push({
            path: routes.THANK_YOU,
            query: { email: signUpData.email },
          })
        })
        .catch(({ response }) => {
          this.signupErros = response.data
        })
    },
  },
}
</script>