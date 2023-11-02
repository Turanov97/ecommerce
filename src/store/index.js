import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/compat/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
   async  addProduct(state, product) {
      state.products.push(product);
      console.log(state.products)
    },
  },
  actions: {
    async addProduct({ state }, product) {
      // Создаем новую ссылку в базе данных для добавления нового продукта
      const newProductRef = firebase.database().ref('/products').push();

      // Устанавливаем данные нового продукта по ссылке
      await newProductRef.set(product);

      // Получаем уникальный ключ, присвоенный новому продукту
      const newProductKey = newProductRef.key;

      // Добавляем этот ключ к продукту в состоянии
      product.productId = newProductKey;

      // Вызываем мутацию для добавления продукта в состояние
      this.commit('addProduct', product);
    },
  },
  modules: {
  }
})
