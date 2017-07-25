import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        cart: [],
        current_category: [],
        current_supplier: [],
        categories: [],
        suppliers: []
    },
    mutations: {
        storeSupplier(state, supplier){
            state.current_supplier = supplier
        },
        storeCategory(state, category){
            state.current_category = category
        },
        storeCategories(state, categories){
            state.categories = categories
        },
        storeSuppliers(state, suppliers){
            state.suppliers = suppliers
        }
    },
    getters: {
        getCart: state => {
            return state.cart
        },
        getSupplier: state => {
            return state.current_supplier
        },
        getCategory: state => {
            return state.current_category
        },
        getCategories: state => {
            return state.categories
        },
        getSuppliers: state => {
            return state.suppliers
        }
    }
})