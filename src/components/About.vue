<template>
    <div id="about">
        <el-row align="middle" type="flex">
            <el-col class="hero-img">
                <h1 class="page__title">קצת עלינו</h1>
            </el-col>
        </el-row>
        <el-row justify="center" type="flex">
            <el-col :span="20">
                    <p>
                        ״המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק, המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספקהמלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק,המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק המלצות של הזוג המתארות את!״</p>
            </el-col>
        </el-row>
        <recommendations></recommendations>
    </div>
</template>

<script>
    export default{
        components: {
            'recommendations': require('./Recommendations.vue')
        }
    }
</script>

<style scoped>
    @import "../assets/css/style.css";

    #recommendations {
        background-image: url(../assets/images/pattern.jpg);
    }

    .hero-img {
        background-image: url(../assets/images/home_background.jpg);
        background-attachment: fixed;
        background-size: cover;
        min-height: 40vh;
    }

</style>