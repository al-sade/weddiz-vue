<template>
    <div class="wrapper">

        <el-row align="middle" type="flex">
            <el-col class="hero-img">
                <h1 class="hero-text main__headline">{{_category}}</h1>
            </el-col>
        </el-row>

        <el-row class="suppliers-box" justify="right" type="flex">
            <el-col :span="10">
                <div id="filters">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item>
                            <el-select v-model="formInline.region" placeholder="מיקום">
                                <el-option label="הכל" value="הכל"></el-option>
                                <el-option label="מרכז" value="מרכז"></el-option>
                                <el-option label="צפון" value="צפון"></el-option>
                                <el-option label="דרום" value="דרום"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-select v-model="formInline.price" placeholder="מחיר">
                                <el-option label="הכל" value="1"></el-option>
                                <el-option label="1500" value="1500"></el-option>
                                <el-option label="3000" value="3000"></el-option>
                                <el-option label="4500" value="4500"></el-option>
                                <el-option label="6000" value="6000"></el-option>
                                <el-option label="6000+" value="100001">6000+</el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>

        <el-row class="suppliers-box">
            <el-col v-for="(supplier, index) in suppliers" v-bind:key="index" v-if="filtered(supplier)" :push="2"
                    :span="5">
                <el-card>
                    <el-button type="text" class="button add frente" @click="addSupplier(supplier)">
                        <img class="smooth" src="../assets/images/icon-heart.png">Add to Wishlist
                    </el-button>
                    <router-link :to="{path: 'supplier' , query: {sid: supplier.supplier_id}}">
                        <img src="../assets/images/Photographer.jpg" class="image smooth">
                        <div style="padding: 14px;">
                            <span class="boei">{{supplier.first_name + ' ' + supplier.last_name}}</span>
                            <div class="bottom clearfix">
                                <div class="time">
                                    <i v-for="i in supplier.rank" class="el-icon-star-on"></i>
                                    <i v-for="i in (5-supplier.rank)" class="el-icon-star-off"></i>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </el-card>
            </el-col>
            <h1 v-show="!suppliers.length">לא נמצאו ספקים</h1>
        </el-row>
        <recommendations></recommendations>
    </div>
</template>

<script>
  import API from "../constants/api";

  export default {
    components: {
      'recommendations': require('./Testimonials.vue')
    },
    data () {
      return {
        cart: this.$store.getters.getCart,
        suppliers: [],
        count_suppliers: '',
        rows: '',
        data: '',
        formInline: {
          region: '',
          price: '1'
        },
        categories: [
          {category_id: 17, category_name: 'מוזיקה', slogan: 'נבחרת הדיג׳ייס שתעשה לכם שמח בחתונה'},
          {category_id: 18, category_name: 'אטרקציות וגימיקים', slogan: 'אטרקציות וגימיקים לשדרוג האירוע'},
          {category_id: 15, category_name: 'צילום וידאו', slogan: 'צלמי הוידאו שיהפכו אתכם לכוכבי הסרט'},
          {category_id: 16, category_name: 'צילום סטילס', slogan: 'נבחרת הצלמים שיתעדו לכם אירוע בלתי נשכח'}
        ],
        category_id: ''
      }
    },
    methods: {
      addSupplier(supplier){
        let name = supplier.first_name + ' ' + supplier.last_name
        this.$notify({
          title: name,
          message: 'מחכה לשמוע מכם',
          type: 'success'
        });
        this.cart.push(supplier)
      },
      getSuppliers  () {
        let category_id = this.$route.query.category
        this.$http.get(API.suppliersByCategory(category_id))
          .then(
            (response) => {
              this.suppliers = response.body.data
            }
          )
          .catch(
            (error) => console.log(error)
          )
      },
      filtered (supplier) {
        if (supplier.price <= this.formInline.price || (this.formInline.price === '1' || this.formInline.region === this.location)) {
          return true
        } else {
          return false
        }
      },
      getCatName (catId) {
        this.categories.filter(function (obj) {
          if (obj.category_id === catId) return obj.category_name
        })
      }
    },
    computed: {
      _category () {
        let catId = this.$route.query.category
        this.getSuppliers()
        var result = this.categories.filter(function (o) { return o.category_id == catId })
        return result[0].category_name
      },
      _suppliers () {
        return this.suppliers.length
      }
    }

  }
</script>
`
<style scoped>
    @import '../assets/css/style.css';

    .hero-img {
        background-image: url(../assets/images/home_background.jpg);
        background-attachment: fixed;
        background-size: cover;
        min-height: 40vh;
    }

    .hero-text {
        top: 9vh;
    }

    .el-carousel {
        padding-top: 35px;
    }

    .suppliers-box {
        direction: rtl;
        background-image: url(../assets/images/pattern.jpg);
        padding-bottom: 15px;
    }

    .el-card img:hover {
        opacity: 0.8;
    }

    .suppliers-box a {
        text-decoration: none;
    }

    .el-select-dropdown__list {
        direction: rtl;
    }

    .el-card {
        margin: 10px;
        color: #2c3e50;
    }

    .el-card > div {
        padding: 0px !important;
    }

    #filters {
        padding-top: 55px;
    }

    .suppliers-box:last-child {
        padding-bottom: 55px;
    }

    #recommendations {
        padding: 55px 0;
        background: rgba(250, 235, 215, 0.46);
    }

    .boei {
        font-size: 2rem;
    }

    .boei, i {
        color: #3a3a3a;
    }
</style>
