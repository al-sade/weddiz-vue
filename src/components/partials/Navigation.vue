<template>
    <div id="header">
        <div id="top-bar">
            <el-dropdown class="wishlist-button smooth">
                <el-badge class="item" :value="cart.length">
                    <span class="el-dropdown-link frente"><router-link to="/wishlist">WISHLIST<img
                            src="../../assets/images/icon-heart.png"></router-link></span>
                </el-badge>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="(supplier, index) in cart" v-bind:key="index">
                        <i class="el-icon-close" @click="removeItem(index)"></i>
                        {{supplier.first_name + ' ' + supplier.last_name}}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <ul>
                <li class="smooth"><a href="#"><img src="../../assets/icons/icon-facebook.png"> </a></li>
                <li class="smooth"><a href="#"><img src="../../assets/icons/icon-instagram.png"> </a></li>
                <li class="smooth"><a href="#"><img src="../../assets/icons/icon-youtube.png"> </a></li>
                <li class="smooth"><a href="#"><img src="../../assets/icons/icon-vimeo.png"> </a></li>
            </ul>
        </div>
        <router-link to="/"><img id="logo" src="../../assets/images/logo.png"></router-link>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">
                <router-link to="/contact">צור קשר</router-link>
            </el-menu-item>
            <!--<el-menu-item index="1">-->
                <!--<router-link to="/recommendations">המלצות</router-link>-->
            <!--</el-menu-item>-->
            <el-menu-item index="1" v-for="(category, index) in categories" v-bind:key="index">
                <router-link :to="{path: '/suppliers' , query: {category: category.category_id}}">{{category.category_name}}</router-link>
            </el-menu-item>
            <el-menu-item index="1">
                <router-link to="/about">אודות</router-link>
            </el-menu-item>
            <el-menu-item index="1">
                <router-link to="/">דף הבית</router-link>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'navigation',
        data () {
            return {
                categories: this.$store.getters.getCategories,
                cart: this.$store.getters.getCart,
                activeIndex: '1',
                activeIndex2: '1',
                categories: [
                    {category_id: 17,category_name: 'מוזיקה', slogan: 'נבחרת הדיג׳ייס שתעשה לכם שמח בחתונה'},
                    {category_id: 18,category_name: 'אטרקציות וגימיקים', slogan: 'אטרקציות וגימיקים לשדרוג האירוע'},
                    {category_id: 15,category_name: 'צילום וידאו', slogan: 'צלמי הוידאו שיהפכו אתכם לכוכבי הסרט'},
                    {category_id: 16,category_name: 'צילום סטילס',slogan: 'נבחרת הצלמים שיתעדו לכם אירוע בלתי נשכח'}
                ]
            }
        },
        methods: {
            removeItem(item){
                this.cart.splice(item, 1)
            },
            storeCategory(category){
                this.$store.commit('storeCategory', category)
            }
        },
        computed: {
            test(){
                console.log(this.$store.getters.getCart)
            }
        }
    }
</script>

<style>
    @import "../../assets/css/style.css";

    #recommendations{
        background-color: #FFF !important;
        background-image: none !important;
    }
    body {
        margin: 0px !important;
    }

    #header {
        /*position: fixed;*/
        background-color: #FFF;
        width: 100%;
        z-index: 9999;
    }

    #logo {
        margin: 15px 0;
    }

    #app {
        margin-top: 0px;
    }

    .wishlist-button {
        box-shadow: inset 0px 0px 10px -2px #333333;
        float: left;
        background: #8ff3bc;
        padding: 8px 20px;
    }

    .wishlist-button:hover, .wishlist-button:hover {
        cursor: pointer;
        background: #FFF;
    }

    #top-bar {
        border-bottom: 4px double #ffffff;
        border-top: 2px solid #faebd7;
        background: antiquewhite;
    }

    #top-bar::after {
        content: " ";
        display: block;
        height: 0;
        clear: both;
    }

    #top-bar ul {
        display: -webkit-box;
        float: left;
        margin: 0;
    }

    #top-bar li {
        display: inline-flex;
        margin: 0 5px;
        padding: 14px 0;
    }

    #top-bar li:hover {
        opacity: 0.4;
        cursor: pointer;
    }

    #top-bar li img {
        max-height: 32px;
        vertical-align: middle;
    }

    .el-dropdown-link {
        font-size: 20px;
    }

    .el-dropdown-link a {
        text-decoration: none;
    }

    .el-dropdown-menu {
        z-index: 9999 !important;
    }

    .el-menu {
        background-color: #FFF !important;
        border-top: 4px double #d4d7c4;
        border-bottom: 4px double #d4d7c4;
        color: #4dbab4;
    }

    .el-menu a {
        text-decoration: none;
        color: #8496a2 !important;
        font-size: 20px;
    }

    .el-menu--horizontal .el-menu-item {
        float: none !important;
        display: inline-block;
    }

    .el-button {
        border-radius: 0px;
    }

    .el-menu-item:hover {
        border-bottom: 5px solid gray;
    }

    .el-menu--horizontal > .el-menu-item:hover, .el-menu--horizontal > .el-submenu.is-active .el-submenu__title, .el-menu--horizontal > .el-submenu:hover .el-submenu__title {
        border-bottom: 5px solid #eef1f6;
        color: #6b6b6b;
        background: #eef1f6;
    }

    .el-menu-item.is-active {
        color: #333;
    }
</style>

