<template>
    <div id="wishlist">
        <h1>wishlist</h1>
        <el-row justify="center" type="flex">
            <el-col :span="10">
                <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item label="Activity name">
                        <el-input v-model="form.first_name"></el-input>
                    </el-form-item>
                    <el-form-item label="Activity name">
                        <el-input v-model="form.last_name"></el-input>
                    </el-form-item>
                    <el-form-item label="Activity form">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">Create</el-button>
                        <el-button>Cancel</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="12">
                <div v-for="(supplier, index) in  cart" v-bind:key="index">
                    <i class="el-icon-close" @click="removeItem(index)"></i> {{supplier.name}} ||  {{supplier.price.price}}
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                cart: this.$store.getters.getCart,
                form: {
                    fisrt_name: '',
                    last_name: '',
                    phone: '',
                    email: '',
                    date: '',
                    message: ''
                }
            }
        },
        methods: {
            removeItem(item){
                this.cart.splice(item, 1)
            },
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>
</style>