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
        <el-menu-item><router-link to="/contact">צור קשר</router-link></el-menu-item>
        <el-menu-item><router-link to="/recommendations">המלצות</router-link></el-menu-item>
        <el-menu-item><router-link to="/suppliers?cat=גימיקים">אטרקציות וגימיקים</router-link></el-menu-item>
        <el-menu-item><router-link to="/suppliers?cat=מוזיקה">מוזיקה</router-link></el-menu-item>
        <el-menu-item><router-link to="/suppliers?cat=וידאו">וידאו</router-link></el-menu-item>
        <el-menu-item><router-link to="/suppliers?cat=סטילס">סטילס</router-link></el-menu-item>
        <el-menu-item><router-link to="/about">אודות</router-link></el-menu-item>
        <el-menu-item><router-link to="/">דף הבית</router-link></el-menu-item>
      </el-menu>
  </div>
</template>

<script>
    export default {
      name: 'navigation',
      data () {
        return {
          activeIndex: '1',
          activeIndex2: '1',
          list: [
            {name: 'צור קשר', link: '/contact'},
            {name: 'המלצות', link: 'contact'},
            {name: 'אטרקציות וגימיקים', link: 'contact'},
            {name: 'מוזיקה', link: 'contact'},
            {name: 'וידאו', link: 'contact'},
            {name: 'סטילס', link: 'contact'},
            {name: 'אודות', link: 'contact'},
            {name: 'דף הבית', link: 'contact'}
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

