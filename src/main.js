// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// require('./assets/css/style.css');
//
// Vue.config.productionTip = false
//
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import {initializeApp} from 'firebase/app'; // Импортируйте инициализацию Firebase

// Your web app's Firebase configuration
firebase.initializeApp
({
  apiKey: "AIzaSyDoeQdijUgTuNm7GCQPvueQWNv2b6DNBac",
  authDomain: "bb-ecommerce-a5b20.firebaseapp.com",
  projectId: "bb-ecommerce-a5b20",
  storageBucket: "bb-ecommerce-a5b20.appspot.com",
  messagingSenderId: "1070035516466",
  appId: "1:1070035516466:web:f07b3a376cb74d9538502b"
})

require('./assets/css/style.css');
require('./assets/css/admin.css');


Vue.config.productionTip = false
Vue.use(BootstrapVue)

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
