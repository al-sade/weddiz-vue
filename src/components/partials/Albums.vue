<template>
    <div id="albums_wrapper">
        <!--lunar gallery-->
        <div class="lunar-gallery-ui">
            <album v-for="album in albums"  :album="{album}" :width="25"></album>
        </div>
    </div>
</template>

<script>

    import API from "../../constants/api";
    export default{
        components: {
            'album': require('./LunarAlbum.vue'),

        },
        props: ['supplier_id'],
        data(){
            return {
                albums : []
            }
        },
        ready: function () {
          this.getSupplierAlbums();
        },
        methods: {
            showAlbum(id){
                console.log(id)

            },
            getSupplierAlbums(){
                this.$http.get(API.supplierAlbums(this.supplier_id))
                    .then(
                        (response) => {
                            console.log("albums", response.body.data);
                            this.albums = response.body.data;
                        }
                    )
                    .catch(
                        (error) => console.log(error)
                    )
            },
        },
        created(){
            this.getSupplierAlbums()
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