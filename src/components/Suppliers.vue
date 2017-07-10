<template>
 <div class="wrapper">
   <el-row justify="center" type="flex">
     <el-col :span="16">
         <el-carousel indicator-position="outside">
            <el-carousel-item  class="hero-img" v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
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

  <el-row class="suppliers-box" justify="center" type="flex">
     <el-col v-for="item in 4" :span="4">
       <el-card>
      <img src="../assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span>Yummy hamburger</span>
        <div class="bottom clearfix">
          <time class="time">2017</time>
          <el-button type="text" class="button" @click="get_data()">Operating button</el-button>
        </div>
      </div>
    </el-card>
     </el-col>
   </el-row>
   
   

 </div> 
</template>

<script>
export default {
  data () {
    return {
      data: [],
      formInline: {
        user: '',
        region: ''
      }
    }
  },

  methods: {
    get_data: () => {
      this.$http
      .get('localhost/weddiz-api/name=john')
      .then(response => console.log(response))
      .catch(err => console.error(err))
    }
  }
}
</script>

<style scoped>
.wrapper{
      padding-top: 194px;
}
.hero-img{
    background-image: url(../assets/team-video.jpg);
    background-size: cover;
    background-position: center;
}
.el-carousel{
  padding-top: 35px;
}
.suppliers-box{
  direction: rtl;
  background-image: url(../assets/pattern.jpg);
}
.el-select-dropdown__list {
    direction: rtl;
}
.el-card{
  margin: 10px;
}
</style>
