<template>
    <div id="supplier_wrapper">
        <el-row align="middle" type="flex">
            <el-col class="hero-img">
                <h1 class="hero-text main__headline">"סלוגן של הספק הנבחר..."</h1>
            </el-col>
        </el-row>
        <el-row align="middle" type="flex" class="info">
            <el-col :span="8">
                <el-button type="text" class="button add frente" @click="addSupplier(supplier)">
                    Add to Wishlist<img src="../assets/images/icon-heart.png">
                </el-button>
            </el-col>
            <el-col :span="8"></el-col>
            <el-col :span="7">
                <h1>{{_supplier.first_name + ' ' + _supplier.last_name}}</h1>
                <div class="time">
                    <i v-for="i in (5-_supplier.rank)" class="el-icon-star-off"></i>
                    <i v-for="i in _supplier.rank" class="el-icon-star-on"></i>
                </div>
            </el-col>
        </el-row>
        <el-row align="middle" type="flex" class="desc-wrapper">
            <el-col :push="2" :span="19" class="desc">
                <hr>
                <p> {{_supplier.desc}}</p>
                <hr>
            </el-col>

        </el-row>

        <recommendations></recommendations>

    </div>
</template>

<script>
    export default{
        components: {
            'recommendations': require('./Testimonials.vue')
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
                    message: 'מחכה לשמוע מכם',
                    type: 'success'
                });
                this.cart.push({name: name})
            }
        },
        computed: {
            _supplier(){
                this.supplier = this.$route.query.q_supplier
                return this.supplier
            }
        }
    }
</script>

<style scoped>
    #recommendations{
        background-image: url(../assets/images/pattern.jpg) !important;
    }
    .hero-img {
        background-image: url(../assets/images/sabah.png);
        background-attachment: fixed;
        background-size: cover;
        min-height: 40vh;
    }

    .hero-text {
        top: 5vh;
        line-height: 6rem;
        direction: rtl;
    }

    .add {
        box-shadow: inset 0px 0px 10px -2px #333333;
        background: #8ff3bc;
        padding: 8px 20px;
        color: #000;
    }

    .add :hover {
        cursor: pointer;
        color: #3a3a3a;
    }

    .add img:hover {
        bottom: 10px;
    }

    .desc p {
        text-align: right;
        padding: 55px 0;
        font-size: 24px;
        line-height: 30px;
    }

    .info {
        padding: 35px 0;
        background-image: url(../assets/images/pattern.jpg);
    }

    .desc-wrapper {
        padding: 35px;
    }
</style>