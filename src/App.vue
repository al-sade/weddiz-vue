<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
    <footer>
      <div class="col-container">
        <div class="col">
          <div class="footer__social">
              <h1 class="footer__heading">השארו מחוברים</h1>
              <!-- Social Icons -->
              <a href="#" class="footer__social__icon icon-youtube-inverted"></a>
              <a href="#" class="footer__social__icon icon-vimeo-inverted"></a>
              <a href="#" class="footer__social__icon icon-instagram-inverted"></a>
              <a href="#" class="footer__social__icon icon-facebook-inverted"></a>
          </div>
        </div>
        <div class="col footer-img">
        </div>
      </div>
      <div class="col-container">
        <div class="col footer-img">s</div>
        <div class="col">
            <h1 class="footer__heading">צרו קשר</h1>
            <p class="footer__contact__info">התקשרו אלינו</p>
            <p class="footer__contact__info">03-608765</p>
            <p class="footer__contact__info">או שלחו דו״אל</p>
            <p class="footer__contact__info">info@weddis.co.il</p>
        </div>
      </div>
      <el-row class="footer-form" justify="center" type="flex">
        <el-col :span="14">
                      <h1 class="footer__heading">השאירו הודעה</h1>
          <el-form >
            <el-form-item>
              <el-input type="text" palceholder="שם ושם משפחה"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="text" palceholder="טלפון"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="text" palceholder='דוא"ל'></el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="date" palceholder="תאריך האירוע"></el-input>
            </el-form-item>
            <el-form-item >
              <el-input></el-input>
            </el-form-item>
              <el-form-item>
              <el-checkbox-group>
                <el-checkbox label="Online activities" name="type"></el-checkbox>
                <el-checkbox label="Promotion activities" name="type"></el-checkbox>
                <el-checkbox label="Offline activities" name="type"></el-checkbox>
                <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item>
              <el-input type="textarea"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">Submit</el-button>
              <el-button>Reset</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </footer>
    <div id="sub-footer">
      <p>Made by Al Sade</p>
    </div>
  </div>
</template>

<script>
import Navigation from './components/static/Navigation.vue'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.col-container {
    display: table;
    width: 100%;
}
.col{
  display: table-cell;
  width: 50%;
  padding: 50px 0;
}
.footer__social__icon {
    width: 45px;
    height: 46px;
    margin: 0 10px;
    display: inline-block;
}
.footer-img{
  background-image: url(assets/home_background.jpg);
  background-size: cover;
  background-position: center center;
}
.footer__heading{
    font: 400 54px "BoeiManali", sans-serif;
    color: #EB5884;
}
.icon-youtube-inverted{background-image: url(assets/icons/icon-youtube.png)}
.icon-vimeo-inverted{background-image: url(assets/icons/icon-vimeo.png)}
.icon-instagram-inverted{background-image: url(assets/icons/icon-instagram.png)}
.icon-facebook-inverted{background-image: url(assets/icons/icon-facebook.png)}
.footer-form{
  padding-top: 55px;
}
</style>
