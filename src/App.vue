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
            return {
            }
        },
        methods: {},
        components: {
            "navigation": require("./components/partials/Navigation.vue"),
            "app-footer": require("./components/partials/AppFooter.vue")
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
