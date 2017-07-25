<template>
    <div id="contact">
        <el-row>
            <el-col :span="12">
                <gmap-map
                        :center="center"
                        :zoom="7"
                        style="width: 100%; height: 300px"
                >
                    <gmap-marker
                            :key="index"
                            v-for="(m, index) in markers"
                            :position="m.position"
                            :clickable="true"
                            :draggable="true"
                            @click="center=m.position"
                    ></gmap-marker>
                </gmap-map>
            </el-col>
            <el-col class="visit_us" :span="12">
                <h1 class="footer__heading form__heading">בואו לביקור</h1>
                <p style="direction: rtl">גם אם זה רק לכוס קפה ועוגה..</p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import ElRow from "element-ui/packages/row/src/row";
    export default {
        components: {ElRow},
        data() {
            return {
                center: {lat: 10.0, lng: 10.0},
                markers: [{
                    position: {lat: 10.0, lng: 10.0}
                }, {
                    position: {lat: 11.0, lng: 11.0}
                }]
            }

        },
        methods: {}
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .visit_us{
        position: relative;
        top:10vh;
    }
    
    .visit_us p{
        font-size: 20px;
    }
</style>
