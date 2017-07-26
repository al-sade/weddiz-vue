<template>
    <div id="about">
        <el-row align="middle" type="flex">
            <el-col class="hero-img">
                <h1 class="hero-text main__headline">קצת עלינו</h1>
            </el-col>
        </el-row>
        <el-row justify="center" type="flex">
            <el-col :span="16" class="main_content">
                <hr>
                <p class="text">
                    ״המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק, המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספקהמלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק,המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק המלצות של הזוג המתארות את!״</p>
            <hr>
            </el-col>
        </el-row>

        <el-row :justify="center" type="flex">
            <el-col :span="16" :push="4" class="carousel">
                <el-carousel :interval="4000" type="card" height="300px">
                    <el-carousel-item v-for="item in 6" :key="item">
                        <h3>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
        </el-row>

        <recommendations></recommendations>
    </div>
</template>

<script>
    export default{
        components: {
            'recommendations': require('./Testimonials.vue')
        }
    }
</script>

<style scoped>
    @import "../assets/css/style.css";

    #recommendations {
        background-image: url(../assets/images/pattern.jpg) !important;
        padding: 30px 0 75px;
    }

    .hero-img {
        background-image: url(../assets/images/home_background.jpg);
        background-attachment: fixed;
        background-size: cover;
        min-height: 40vh;
    }

    .hero-text {
        top: 8vh;
    }

    .main_content{
        padding: 40px 0;
    }
    .text {
        padding: 55px 0;
        font-size: 24px;
        line-height: 30px;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item {
        background-image: url('../assets/images/home_background.jpg');
        background-size: cover;
        background-position: center center;
    }

    .carousel{
        padding: 15px 0 60px;
    }

</style>