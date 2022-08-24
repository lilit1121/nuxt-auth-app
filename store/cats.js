export const state = () => ({
    cats: {}
  })
  
  export const getters = {}
  
  export const mutations = {
    CATS(state, data) {
      state.cats = data
    }
  }
  
  export const actions = {
    async getCats({ commit }) {
      try {
        const data = await this.$apiServices.cats.getCats()
        commit('CATS', data)
        return data
      } catch (e) {
        Promise.reject(e)
      }
    }
  }
  