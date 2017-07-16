// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'

import Router from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import Home from '@/components/Home'
import About from '@/components/About'
import Suppliers from '@/components/Suppliers'
import Contact from '@/components/Contact'

Vue.use(VueResource)
Vue.use(Router)
Vue.use(ElementUI)

Vue.config.productionTip = false

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/suppliers', component: Suppliers},
    {path: '/contact', component: Contact}
]

const router = new Router({routes})

import { store } from './store/store'

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

