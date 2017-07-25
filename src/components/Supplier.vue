<template>
    <div id="supplier_wrapper">
        <el-row>
            <el-col :span="8">
                <el-button type="text" class="button" @click="addSupplier(supplier)">Add to Wishlist</el-button>
            </el-col>
            <el-col :span="4" :push="4">
                <div class="time">
                    <i v-for="i in (5-_supplier.rank)" class="el-icon-star-off"></i>
                    <i v-for="i in _supplier.rank" class="el-icon-star-on"></i>
                </div>
            </el-col>
            <el-col :span="8">
                <h1>{{_supplier.first_name + ' ' + _supplier.last_name}}</h1>
            </el-col>
        </el-row>
        <el-row justify="center" type="flex">
            <el-col :span="16">
                <p> {{_supplier.desc}}</p>
            </el-col>

        </el-row>
    </div>
</template>

<script>
    export default{
        mounted(){
            this._supplier
        },
        data(){
            return {
                cart: this.$store.getters.getCart,
                supplier: []
            }
        },
        methods: {
            addSupplier(item){
                let name = item.first_name + ' ' + item.last_name
                this.$notify({
                    title: name,
                    message: 'נוסף בהצלחה',
                    type: 'success'
                });
                this.cart.push({name: name})
                console.log(this.cart)
            }
        },
        computed: {
            _supplier(){
                this.supplier= this.$route.query.q_supplier
                return this.supplier
            }
        }
    }
</script>

<style scoped>

</style>