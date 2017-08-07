<template>
    <div id="albums_wrapper">
        <h1 class="section__headline">אלבומים</h1>
        <el-row justify="right" type="flex">
            <el-col :span="6" v-for="(o, index) in 4" :key="o" >
                <el-card :body-style="{ padding: '0px' }" @click.native="showAlbum(3)">
                    <img src="../../assets/images/team-video.jpg" class="image">
                    <div style="padding: 14px;">
                        <span>{{supplier_id}}</span>
                        <div class="bottom clearfix">
                            <el-button type="text" class="button">Operating button</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>

        <album :supplier_id="{supplier_id}"></album>

    </div>
</template>

<script>

    export default{
        components: {
            'album': require('./singleAlbum.vue')
        },
        props: ['supplier_id'],
        data(){
            return {

            }
        },
        methods: {
            showAlbum(id){
                console.log(id)

            }
        }
    }
</script>

<style scoped>

    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>