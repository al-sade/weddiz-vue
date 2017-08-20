// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'

import Router from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/lunar_assets/lunar.css';

import Home from '@/components/Home'
import About from '@/components/About'
import Suppliers from '@/components/Suppliers'
import Supplier from '@/components/Supplier'
import Wishlist from '@/components/Wishlist'
import Recommendations from '@/components/Recommendations'
import Contact from '@/components/Contact'
// import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueResource)
Vue.use(Router)
Vue.use(ElementUI)
// Vue.use(VueGoogleMaps, {
//     load: {
//         key: 'AIzaSyAglKokv0qPiBhuRKhPQ813z3m70iDykiI',
//         v: '0.1',
//         // libraries: 'places', //// If you need to use place input
//     }
// });

Vue.config.productionTip = false

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/suppliers', component: Suppliers},
    {path: '/supplier', component: Supplier},
    {path: '/wishlist', component: Wishlist},
    {path: '/contact', component: Contact},
    {path: '/recommendations', component: Recommendations},
]

const router = new Router({routes})

import { store } from './store/store'

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

