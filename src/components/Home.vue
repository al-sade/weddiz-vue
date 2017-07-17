<template>
    <div id="home">
        <div class="row">
            <div class="hero-img">
                <div class="hero-text">היום שלכם
                <hr class="title_seperator">
                הספקים שלנו</div>
            </div>
        </div>
        <div class="row">
            <h1 class="section__headline">הנבחרת שלנו</h1>
            <el-row justify="center" type="flex">
                <el-col v-for="category in categories" v-bind:key="category" :span="4">
                    <div class="grid-content bg-purple">
                        <div class="category-box">
                            <h2>{{category.name}}</h2>
                        </div>
                        <div class="slogan"><p>{{category.slogan}}</p></div>
                    </div>
                </el-col>
            </el-row>
        </div>

        <!--space for recommendations-->
        <recommendations></recommendations>

        <div class="row">
            <h1 class="section__headline">השראות</h1>
            <el-row type="flex" justify="center">
                <el-col :span="16">
                    <div id="img_feature">
                        <img src="../assets/icons/icon-inspired.png">
                    </div>
                    <el-carousel :interval="5000" arrow="never">
                        <el-carousel-item v-for="item in 4" :key="item">
                        <h3>{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
  components: {
    'recommendations' : require('./Recommendations.vue')
  },
  data () {
    return {
      Acontent: '',
      name: 'Welcome to Your Vue.js App',
      categories: [
        {name: 'מוזיקה', slogan: 'נבחרת הדיג׳ייס שתעשה לכם שמח בחתונה'},
        {name: 'אטרקציות וגימיקים', slogan: 'אטרקציות וגימיקים לשדרוג האירוע'},
        {name: 'צילום וידאו', slogan: 'צלמי הוידאו שיהפכו אתכם לכוכבי הסרט'},
        {name: 'צילום סטילס', slogan: 'נבחרת הצלמים שיתעדו לכם אירוע בלתי נשכח'}
      ]
    }
  },
  methods: {
      onSubmitted() {
        this.$http.post('http://localhost:8000/api/supplier', {content: this.Acontent})
            .then(
                (response) => {
                    this.name = response.body
                }
            )
            .catch(
                (error) => console.log(error)
            )
      }
  }
}
</script>

<style scoped lang="css">
@import '../assets/css/style.css';

.hero-img{
    background-image: url(../assets/images/home_background.jpg);
    background-attachment: fixed;
    background-size: cover;
    min-height: 72vh;
}

.hero-text {
    font-size: 46px;
    background: rgba(255, 255, 255, 0.2);
    color: #3a3a3a;
    position: relative;
    top:25vh;
}
h2{
    background-color: #d4d7c4;
    box-shadow: inset 0px 0px 3px 0px black;
    padding: 10px;
}

.category-box{
    margin: 0 15px;
}
.category-box:hover{
    cursor: pointer;
}
.category-box:first-child{
    background-image: url(../assets/images/team-video.jpg);
    min-height: 300px;
    background-size: cover;
    background-position: center;
}

.row:nth-child(2),.row:nth-child(4){
    position: relative;
    background-image: url(../assets/images/pattern.jpg);
    padding-bottom: 90px;
}

.slogan{
    margin: 0 15px;
    padding: 5px;
    background: #FFF;
    font-size: 22px;
    border: 4px double #d4d7c4;
}
.el-carousel{
    padding-bottom: 60px;
}
.el-carousel__item h3 {
color: #475669;
font-size: 18px;
opacity: 0.75;
line-height: 300px;
margin: 0;
}

.el-carousel__item:nth-child(2n) {
background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
background-color: #d3dce6;
}
div#img_feature {
    z-index: 5;
    right: 50px;
    top: 50px;
    float: right;
    position: absolute;
}
</style>
