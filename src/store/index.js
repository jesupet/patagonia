import { createStore } from 'vuex'
import preguntas from './preguntas.json'
import reviews from './reviews.json'


export default createStore({
  state: {
    preguntas: preguntas,
    reviews: reviews,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
