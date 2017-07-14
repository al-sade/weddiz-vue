<template>
    <div id="recmmendations">
      <el-row justify="center" type="flex">
        <el-col :span="16">
          <h1 class="section__headline">זוגות מספרים</h1>
          <div class="reco-box">
            <div class="box-column" :span="2">
              <img src="../assets/arrow-left.png">
            </div class="box-column">
            <div class="box-column left-box">
                <h2 class="testimonial__heading">אולגה ואמיר <span class="testimonial__date">2.2.16</span></h2>
                <p class="testimonial__text">״המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק, המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספקהמלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק,המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק המלצות של הזוג המתארות את!״</p>
                <p class="testimonial__providers">ספקי weddis שהיו בחתונה</p>
                <i class="testimonial__icon icon-photo-bg"></i>
                <i class="testimonial__icon icon-camera-bg"></i>
                <i class="testimonial__icon icon-plane-bg"></i>
                <i class="testimonial__icon icon-headset-bg"></i>
            </div class="box-column">
            <div class="box-column right-box">
              <img src="../assets/testimonial-img.jpg">
            </div class="box-column">
            <div class="box-column" :span="2">
              <img src="../assets/arrow-right.png">
            </div class="box-column">
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default{

}
</script>

<style>
#recmmendations{
  padding: 35px 0;
  /*background-image: url(../assets/pattern.jpg);*/
}
.right-box img{
  border-radius: 50%;
  max-width: 233px;
}
.left-box{
  max-width: 60%;
  padding-right: 30px;
}
.reco-box{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: right;
}
.box-column:nth-child(1), .box-column:nth-child(4){
  width: 5%;
}

.testimonial__text{
  border-bottom: 2px solid #3a3a3a;
  padding-bottom: 15px;
}
</style>

