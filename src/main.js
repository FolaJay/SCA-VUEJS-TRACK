import Vue from 'vue'
import App from './App.vue'
import store from './store'

import router from './router'  // loads from src/router/index.js
require('./firebaseConfig.js')

Vue.config.productionTip = false

// Firebase method onAuthStateChanged makes sure Firebase initializes before loading the app when a user refreshes a page.
// let app
// fb.auth.onAuthStateChanged(user => {
//     if (!app) {
//         app = new Vue({
//             el: '#app',
//             router,
//             store,
//             render: h => h(App)
//         })
//     }
// })
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
