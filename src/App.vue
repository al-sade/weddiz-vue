<template>
    <div id="app">
        <nav>
            <navigation></navigation>
        </nav>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <app-footer></app-footer>
        </footer>
    </div>
</template>

<script>

    export default {
        name: 'app',
        data () {
            return {}
        },
        methods: {
            setCategories(){
                this.$http.get(`http://public.weddiz.co.il/api/categories`)
                    .then((res) => {
                        this.$store.commit('storeCategories', res.body.data)
                    })
                    .catch((error) =>
                        console.log(error)
                    )
            }
        },
        components: {
            "navigation": require("./components/partials/Navigation.vue"),
            "app-footer": require("./components/partials/AppFooter.vue")
        },
        mounted(){
            this.setCategories()
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
