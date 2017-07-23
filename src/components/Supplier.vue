<template>
    <div id="supplier_wrapper">
        <el-row>
            <el-col>
                <h1>{{supplier}}</h1>
                <img src="../assets/images/testimonial-img.jpg">
                <p> מךגלגדמלכגדמךגלגדמלכגדמךגלגדמלכגדמךגלגדמלכגדמךגלגדמלכגדמךגלגדמלכגדמךגלגדמלכגד</p>
                <p> מךגלגדמלכגדמךגלגדמלכגדמךגלגדמלכגדמךגלגדמלכגדמךגלגדמלכגדמךגלגדמלכגדמךגלגדמלכגד</p>
                <el-button type="text" class="button" @click="addSupplier(supplier)">Add to Wishlist</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                supplier: [
                    {
                        name: "Al",
                        content: "dsfdsf",
                        img_url: "../assets/images/testimonial-img.jpg"
                    }
                ]
            }
        },
        methods: {
            addSupplier(item){
                this.$notify({
                    title: item.first_name + ' ' + item.last_name,
                    message: 'נוסף בהצלחה',
                    type: 'success'
                });
                this.cart.push({name: 'john'})
                console.log(this.cart)
            }
        }
    }
</script>

<style scoped>

</style>