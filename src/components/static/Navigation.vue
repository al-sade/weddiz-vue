<template>
  <div id="header">
      <div id="top-bar">
          <button>Wishlist</button>
          <ul>
              <li><a href="#">link</a></li>
              <li><a href="#">link</a></li>
              <li><a href="#">link</a></li>
              <li><a href="#">link</a></li>
              <li><a href="#">link</a></li>
              <li><a href="#">link</a></li>
          </ul>
      </div>
      <img src="../../assets/logo.png">
      <el-menu  :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item v-for="li in list" index="1">{{li}}</el-menu-item>
      </el-menu>
  </div>
</template>

<script>
    export default{
      name: 'navigation',
      data () {
        return {
          activeIndex: '1',
          activeIndex2: '1',
          list: [
            'צור קשר',
            'המלצות',
            'אטרקציות וגימיקים',
            'מוזיקה',
            'וידאו',
            'סטילס',
            'אודות',
            'דף הבית'
          ]
        }
      }
    }
</script>

<style>
body{
    margin: 0px !important;
}
#header{
    position: fixed;
    background-color: #FFF;
    width: 100%;
    z-index: 9999;
}
#app{
    margin-top: 0px; 
}
#top-bar{
    background-color: #333; 
}
#top-bar::after{
   content: " ";
   display: block; 
   height: 0; 
   clear: both;
}

#top-bar ul{
    display: -webkit-box;
    float: left;
    margin: 0;
}
#top-bar li{
    display: inline-flex;
    margin: 0 10px;
}
.el-menu{
    background-color: #FFF; 
    border-top: 2px double #333;
    border-bottom: 2px double #333;
}
.el-menu--horizontal .el-menu-item{
    float: none;
    display: inline-block;
}
button{
    float: left;
}
</style>

