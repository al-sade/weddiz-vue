<template>
    <div class="wrapper">
        <el-row justify="center" type="flex">
            <el-col :span="16">
                <el-carousel indicator-position="outside">
                    <el-carousel-item class="hero-img" v-for="item in 4" :key="item">
                        <h3 style="color: white;">{{cart}}</h3>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
        </el-row>
        <el-row class="suppliers-box" justify="right" type="flex">
            <div id="filters">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item>
                        <el-select v-model="formInline.region" placeholder="מיקום">
                            <el-option label="מרכז" value="מרכז"></el-option>
                            <el-option label="צפון" value="צפון"></el-option>
                            <el-option label="דרום" value="דרום"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="formInline.region" placeholder="מחיר">
                            <el-option label="0-1500" value="1500"></el-option>
                            <el-option label="1501-30000" value="3000"></el-option>
                            <el-option label="3001-4500" value="4500"></el-option>
                            <el-option label="4501-6000" value="6000"></el-option>
                            <el-option label="6000+" value="6001"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
        </el-row>

        <el-row class="suppliers-box"
                v-for="i in Math.ceil(count_suppliers / 4)"
                v-bind:key="i"
                justify="center" type="flex">
            <el-col v-for="supplier in suppliers.slice((i - 1) * 4, i * 4)" v-bind:key="supplier" :span="5">
                <el-card>
                    <el-button type="text" class="button" @click="addSupplier(supplier)">Add to Wishlist</el-button>
                    <img src="../assets/images/logo.png" class="image">
                    <div style="padding: 14px;">
                        <span>{{supplier.first_name + ' ' + supplier.last_name}}</span>
                        <div class="bottom clearfix">
                            <div class="time">
                                <i v-for="i in supplier.rank" class="el-icon-star-on"></i>
                                <i v-for="i in (5-supplier.rank)" class="el-icon-star-off"></i>
                            </div>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>


    </div>
</template>

<script>
    export default {
        mounted() {
            this.getSuppliers()
        },
        data () {
            return {
                cart: this.$store.getters.getCart,
                suppliers: '',
                count_suppliers: '',
                rows: '',
                data: '',
                formInline: {
                    user: '',
                    region: ''
                }
            }
        },

        methods: {
            getSuppliers() {
                this.$http.get('http://localhost:8000/api/supplier/22')
                    .then(
                        (response) => {
                            this.suppliers = response.body.data
                            this.count_suppliers = Object.keys(this.suppliers).length
                            this.rows = this.suppliers
                        }
                    )
                    .catch(
                        (error) => console.log(error)
                    )
            },
            addSupplier(item){
                this.cart.push({name: 'john'})
                console.log(this.cart)
            }
        }

    }
</script>

<style scoped>
    .wrapper {
        padding-top: 194px;
    }

    .hero-img {
        background-image: url(../assets/images/team-video.jpg);
        background-size: cover;
        background-position: center;
    }

    .el-carousel {
        padding-top: 35px;
    }

    .suppliers-box {
        direction: rtl;
        background-image: url(../assets/images/pattern.jpg);
    }

    .el-select-dropdown__list {
        direction: rtl;
    }

    .el-card {
        margin: 10px;
    }
</style>
