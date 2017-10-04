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
                <h1>{{supplier.first_name + ' ' + supplier.last_name}}</h1>
                <div class="time">
                    <i v-for="i in _supplierRank" class="el-icon-star-off"></i>
                    <i v-for="i in supplier.rank" class="el-icon-star-on"></i>
                </div>
            </el-col>
        </el-row>
        <el-row align="middle" type="flex" class="desc-wrapper">
            <el-col :push="2" :span="19" class="desc">
                <hr>
                <p> {{supplier.desc}}</p>
                <hr>
            </el-col>

        </el-row>

        <recommendations></recommendations>

        <albums :supplierId="this.supplierId"></albums>
    </div>
</template>

<script>
  import API from '../constants/api'

  export default{
    components: {
      'recommendations': require('./Testimonials.vue'),
      'albums': require('./partials/Albums.vue')
    },
    mounted () {
      let supplierId = this.$route.query.sid
      this.getSupplier(supplierId)
    },
    computed: {
      _supplierRank () {
        return typeof this.supplier.rank === 'undefined' ? 0 : 5 - this.supplier.rank
      }
    },
    data () {
      return {
        cart: this.$store.getters.getCart,
        supplierId: '',
        supplier: []
      }
    },
    methods: {
      addSupplier(supplier) {
        let name = supplier.first_name + ' ' + supplier.last_name
        this.$notify({
          title: name,
          message: 'מחכה לשמוע מכם',
          type: 'success'
        })
        this.cart.push(supplier)
      },
      getSupplier (supplierId) {
        this.$http.get(API.supplierById(supplierId))
          .then(
            (response) => {
              let data = response.body.data;
              let key = Object.keys(data)[0];
              this.supplier = data[key];
            }
          )
          .catch(
            (error) => console.log(error)
          )
      }
    }
  }
</script>

<style scoped>
    #recommendations {
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