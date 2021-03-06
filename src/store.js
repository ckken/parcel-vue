import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
function timeout (ms = 100) {
  return new Promise((resolve, reject) => {
    console.log('action')
    setTimeout(resolve, ms, 'World')
  })
}

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: async (state) => {
      await timeout(10)
      state.count += 1
      console.log('delay 10ms')
    },
    decrement: (state) => {
      state.count -= 1
    }
  }
})

export default store
