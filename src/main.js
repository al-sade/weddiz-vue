// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// goes to node_moduls
// goes to App.vue
// goes to ./router/index.js
// goes to node_moduls

import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Navigation from './components/static/Navigation'

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
    Navigation
  }
})



// git// git// git// git// git// git// git// git// git// git// git// git// git// git