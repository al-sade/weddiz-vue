<template>
    <div id="footer">
        <div class="col-container">
            <div class="col">
                <div class="footer__social">
                    <h1 class="footer__heading">השארו מחוברים</h1>
                    <!-- Social Icons -->
                    <a href="#" class="smooth footer__social__icon icon-youtube-inverted"></a>
                    <a href="#" class="smooth footer__social__icon icon-vimeo-inverted"></a>
                    <a href="#" class="smooth footer__social__icon icon-instagram-inverted"></a>
                    <a href="#" class="smooth footer__social__icon icon-facebook-inverted"></a>
                </div>
            </div>
            <div class="col footer-img">
            </div>
        </div>
        <div class="col-container">
            <div class="col footer-img"></div>
            <div class="col">
                <h1 class="footer__heading">צרו קשר</h1>
                <p class="footer__contact__info">התקשרו אלינו</p>
                <p class="footer__contact__info">03-608765</p>
                <p class="footer__contact__info">או שלחו דו״אל</p>
                <p class="footer__contact__info">info@weddis.co.il</p>
            </div>
        </div>
        <el-row class="footer-form" justify="center" type="flex">
            <el-col :span="8">
                <h1 id="form_title" class="footer__heading form__heading">השאירו הודעה</h1>
                <el-form>
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
                        <el-input type="textarea" :rows="7"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <button type="primary" class="submit_button">שלח</button>
                    </el-form-item>
                </el-form>
                <!--<img class="form_border second" src="../../assets/images/right-border.png">-->
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
            return {}
        }
    }
</script>

<style>

    .col-container {
        display: table;
        width: 100%;
    }

    .col {
        display: table-cell;
        width: 50%;
        padding: 115px  0;
    }

    .el-form {
        direction: rtl;
    }

    div#footer {
        background: linear-gradient(141deg, #f6f5f3 0%, #e6eeef 51%, #f6f5f3 75%);
    }

    .footer__social__icon {
        width: 45px;
        height: 46px;
        margin: 0 10px;
        display: inline-block;
    }

    .footer__social__icon:hover {
        opacity: 0.6;
    }

    .footer-img {
        background-image: url(../../assets/images/home_background.jpg);
        background-size: cover;
        background-position: center center;
    }

    .footer__heading {
        font: 400 54px "BoeiManali", sans-serif;
        color: #EB5884;
    }

    #form__heading .footer__heading, #form_title {
        float: right;
        margin: 10px 0;
    }

    #form_title {
        font-size: 5rem;
    }

    .footer-form {
        background: antiquewhite;
    }

    img.form_border.second {
        position: absolute;
        right: 28%;
        bottom: 0;
    }

    .form_border:nth-child(2) {
        position: absolute;
        left: 28%;
        top: 17%;
    }

    #sub-footer {
        padding: 10px;
        margin: 0;
        background: antiquewhite;
    }

    .icon-youtube-inverted {
        background-image: url(../../assets/icons/icon-youtube.png)
    }

    .icon-vimeo-inverted {
        background-image: url(../../assets/icons/icon-vimeo.png)
    }

    .icon-instagram-inverted {
        background-image: url(../../assets/icons/icon-instagram.png)
    }

    .icon-facebook-inverted {
        background-image: url(../../assets/icons/icon-facebook.png)
    }

    .footer-form {
        padding: 125px 0;
        background-image: url("../../assets/images/pattern.jpg");
    }
    .footer-form>.el-col {
        border: 4px double #d4d7c4;
        padding: 25px;
    }


    .el-checkbox + .el-checkbox {
        margin-right: 15px;
        margin-left: 0px;
    }

    p.footer__contact__info {
        font-size: 22px;
    }

    .submit_button {
        color: #eb5884;
        background-color: #bbdddd;
        border: 2px double #eb5884;
        padding: 13px;
        min-width: 200px;
        float: left;
        font-size: 26px;
    }

    .submit_button:hover {
        cursor: pointer;
        color: #bbdddd;
        background-color: #eb5884;
        border: 2px double #bbdddd;
    }
</style>