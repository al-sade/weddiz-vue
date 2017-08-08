<template>
    <div id="wishlist">
        <h1 class="frente"><img src="../assets/images/icon-heart.png"> My wishlist <img
                src="../assets/images/icon-heart.png"></h1>
        <el-row justify="center" type="flex">
            <el-col :span="10">
                <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item>
                        <el-input placeholder="שם פרטי" v-model="form.first_name"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="שם משפחה" v-model="form.last_name"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="טלפון" v-model="form.phone"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="אימייל" v-model="form.email"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="form.date" type="date"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="ספרו לנו עליכם" type="textarea" v-model="form.desc" :rows=5></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">שלח</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="12">
                <div v-for="category in $store.getters.getCategories" v-if="catHasSuppliers(category.category_id)">
                    <h1 class="boei category">{{category.category_name}}</h1>
                    <hr class="sep">
                    <div class="cat_suppliers">
                        <div class="supplier" v-for="(supplier, index) in  cart" v-bind:key="index"
                             v-if="supplier.category_id== category.category_id">
                            <i class="el-icon-close" @click="removeItem(index)"></i>
                            {{supplier.first_name + ' ' + supplier.last_name}}
                        </div>
                    </div>
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
                    first_name: '',
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
                this.$http.post('http://public.weddiz.co.il/api/mail', {"form_data": this.form, "suppliers": this.cart})
                    .then(
                        (res) => {
                            console.log(res.body)
                        }
                    )
                    .catch(
                        (error) => console.log(error)
                    )
            },
            catHasSuppliers(cid){
                for (let i = 0; i < this.cart.length; i++) {
                    if(this.cart[i].category_id == cid){
                        return true
                    }
                }
                return false
            }
        }
    }
</script>

<style scoped>
    @import '../assets/css/style.css';

    #wishlist {
        background-image: url("../assets/images/pattern.jpg");
        padding-bottom: 55px;
    }

    .sep {
        max-width: 60%;
        position: relative;
        left: 20%;
    }

    .frente {
        font-size: 4rem !important;
        margin: 0px;
        padding: 35px 0;
    }

    .frente img {
        left: 0px;
        bottom: 10px;
    }

    .category {
        margin: 0px;
        text-align: right;
    }

    .boei {
        font-size: 3rem;
    }

    hr {
        text-align: right;
    }

    .supplier {
        text-align: right;

        font-size: 32px;
        padding: 10px 0;
    }

    i.el-icon-close {
        position: absolute;
        right: 32%;
        cursor: pointer;
    }

    form.el-form {
        padding-top: 5vh;
    }

    .cat_suppliers h1 {
        text-align: right;
    }
</style>