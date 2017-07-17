<template>
    <div id="map" style="width:400px;height:400px">

    </div>
</template>

<script>
    export default {
        data() {
            return{

            }

        },

        create() {
            this.createMap();
        },

        methods: {
            createMap: function(){
                var map;

                map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: -12.1430911, lng: -77.0227697},
                    zoom: 12
                });
            }
        }
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
</style>
