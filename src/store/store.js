import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        cart: [
            {name: 'supplier_11', price: 2000},
            {name: 'supplier_22', price: 4000},
            {name: 'supplier_33', price: 5400},
            {name: 'supplier_44', price: 6000}
        ]
    },
    getters: {
        getCart: state => {
            return state.cart
        }
    }
})