<template>
    <!--lunar album-->
    <div class="lunar-album" :data-width="width" :data-thumbimage="getAlbumThumbnailSrc()">

        <div class="lunar-albumcover-content">
            <h3 class="lunar-album-title">{{album.album.album_name}}</h3>
            <div class="lunar-album-about">{{album.album.album_description || album.album.album_name }}</div>
        </div>
        <div class="lunar-gallery" v-for="image in album.album.images">
            <a :href="buildImageSrc(image)" :data-imagelarge="buildImageSrc(image)"></a>
        </div>
    </div>
    <!--/lunar album-->
</template>

<script>
    import config from "../../constants/config";
    export default{
        props: ['album', 'width'],
        computed: {
            _sid(){
                return this.supplier_id
            },

        },
        data(){
            return {
            }
        },
        methods: {
            buildImageSrc(image){
                return config.storage.host + image;
            },
            getAlbumThumbnailSrc(){
                let imageSrc = config.storage.host + this.album.album.images[0];
                console.log(imageSrc);
                return imageSrc;
            }

        },
        mounted: function () {
            console.log(this.album.album);
            try{
                SakuraPlugins.Lunar.getInstance().proxyWrapper();
            }catch (e){
                console.log(e);
            }
        }
    }
</script>

<style scoped>

</style>