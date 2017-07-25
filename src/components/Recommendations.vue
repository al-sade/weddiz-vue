<template>
    <div id="recommendations">
        <el-row align="middle" type="flex">
            <el-col class="hero-img">
                <h1 class="hero-text main__headline">ספקים מומלצים</h1>
            </el-col>
        </el-row>
        <el-row class="recommendations-box smooth">
            <el-col v-for="(category, index) in categories" v-bind:key="category" :push="2" :span="5">
                <router-link :to="{path: 'supplier' , query: {category: category}}">
                    <el-card class="smooth">
                        <img :src="getImgUrl(category.category_id)" class="image">
                        <div style="padding: 14px;">
                            <hr class="title_sep">
                            <span class="cat_title">{{category.category_name}}</span>
                        </div>
                    </el-card>
                </router-link>
            </el-col>
        </el-row>
    </div>
</template>

<script>

    export default{
        mounted(){
            this.getCategories()
        },
        data(){
            return {
                categories: [],
                counter: ''
            }
        },
        methods: {
            getCategories(){
                this.$http.get('http://localhost:8000/api/recommendations')
                    .then(
                        (res) => {
                            console.log(res.body.data)
                            this.categories = res.body.data
                            this.counter = Object.keys(this.categories).length
                        }
                    )
                    .catch(
                        (error) => console.log(error)
                    )
            },
            getImgUrl(id) {
                var images = require.context('../assets/icons/categories/', false, /\.png$/)
                return images('./' + id + ".png")
            }
        }
    }
</script>

<style scoped>
    .recommendations-box {
        direction: rtl;
        background-image: url(../assets/images/pattern.jpg);
        padding: 55px 0;
    }

    .recommendations-box{
        background-color: rgba(0,0,0,0.8);
    }

    .recommendations-box a {
        text-decoration: none;
    }

    .hero-img {
        background-image: url(../assets/images/home_background.jpg);
        background-attachment: fixed;
        background-size: cover;
        min-height: 40vh;
    }

    .hero-text{
        top: 10vh;
    }
    .el-card {
        margin: 20px;
    }

    .el-card:hover {
        box-shadow: inset 0px 0px 6px 0px #a6a6a6;
    }

    .el-card img {
        border-radius: 50%;
        -webkit-transition: -webkit-transform .8s ease-in-out;
        transition: transform .8s ease-in-out;
        -webkit-filter: grayscale(62%); /* Safari 6.0 - 9.0 */
        filter: grayscale(62%);
    }

    .el-card img:hover {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }

    .cat_title {
        font: 400 70px "BoeiManali", sans-serif;
        font-size: 3rem;
        line-height: 30px;
        color: white;
        text-shadow: 1px 1px 5px #333;
    }
    .title_sep{
        color: #FFF;
        border-bottom:1px solid #FFF;
    }
    


</style>