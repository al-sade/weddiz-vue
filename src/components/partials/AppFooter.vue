<template>
    <div id="footer">
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
            <el-col :span="12">
                <h1 class="footer__heading">השאירו הודעה</h1>
                <el-form >
                    <el-form-item>
                        <el-input type="text" placeholder="שם ושם משפחה"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input type="text" placeholder="טלפון"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input type="text" placeholder='דוא"ל'></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input type="date" placeholder="תאריך האירוע"></el-input>
                    </el-form-item>
                    <el-form-item >
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox-group>
                            <span>מתעניינים ב:</span>
                            <el-checkbox label="צילום סטילס" name="type"></el-checkbox>
                            <el-checkbox label="צילום וידאו" name="type"></el-checkbox>
                            <el-checkbox label="אטרקציות וגימיקים" name="type"></el-checkbox>
                            <el-checkbox label="מוזיקה" name="type"></el-checkbox>
                            <el-checkbox label="הכל" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item>
                        <el-input type="textarea"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">שלח</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <div id="sub-footer">
            <p>Made by Al Sade</p>
        </div>
    </div>
</template>

<script>
    export default{
        data () {
            return{
            }
        }
    }
</script>

<style>

    .col-container {
        display: table;
        width: 100%;
    }
    .col{
        display: table-cell;
        width: 50%;
        padding: 115px 0;
        background-color: #f5f4f2;
    }
    .el-form{
        direction: rtl;
    }
    .footer__social__icon {
        width: 45px;
        height: 46px;
        margin: 0 10px;
        display: inline-block;
    }
    .footer-img{
        background-image: url(../../assets/images/home_background.jpg);
        background-size: cover;
        background-position: center center;
    }
    .footer__heading{
        font: 400 54px "BoeiManali", sans-serif;
        color: #EB5884;
    }
    .icon-youtube-inverted{background-image: url(../../assets/icons/icon-youtube.png)}
    .icon-vimeo-inverted{background-image: url(../../assets/icons/icon-vimeo.png)}
    .icon-instagram-inverted{background-image: url(../../assets/icons/icon-instagram.png)}
    .icon-facebook-inverted{background-image: url(../../assets/icons/icon-facebook.png)}
    .footer-form{
        padding-top: 55px;
    }
    .el-checkbox+.el-checkbox{
        margin-right: 15px;
        margin-left: 0px;
    }
    p.footer__contact__info {
        font-size: 22px;
    }
</style>