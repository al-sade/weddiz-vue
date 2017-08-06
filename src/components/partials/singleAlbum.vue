<template>
    <div id="album">
        <!--<h1>dd {{_sid}}</h1>-->

    </div>
</template>

<script>

    export default{
        props: ['supplier_id'],
        computed: {
            _sid(){
                return this.supplier_id
            }
        },
        data(){
            return {

            }
        }
    }
</script>

<style scoped>

</style>