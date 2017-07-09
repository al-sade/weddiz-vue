// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'

import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import Navigation from './components/partials/Navigation'
import Home from '@/components/Home'
import Contact from '@/components/Contact'

Vue.use(ElementUI)
Vue.use(Router)

Vue.config.productionTip = false

const routes = [
    { path: '/', component: Home },
    { path: '/test', component: Contact }
]

const router = new Router({routes})

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
