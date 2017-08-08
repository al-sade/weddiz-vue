<template>
    <div id="recommendations">
        <el-row justify="center" type="flex">
            <el-col :span="16">
                <h1 class="section__headline">זוגות מספרים</h1>
                <div class="reco-box">
                    <div class="box-column arrow smooth" :span="2">
                        <img src="../assets/images/arrow-left.png" @click="scrollLeft">
                    </div class="box-column">
                    <div class="box-column left-box">
                        <h2 class="testimonial__heading">
                            {{this.testimonials[current].testimonial_name}}
                            <span class="testimonial__date">{{testimonials[current].testimonial_date}}</span>
                        </h2>
                        <p class="testimonial__text">{{testimonials[current].text}}</p>
                        <p class="testimonial__providers" style="direction: rtl">ספקי Weddiz שהיו בחתונה:</p>
                        <img class="rel-icon" src="../assets/icons/icon-team-attractions.png">
                        <img class="rel-icon" src="../assets/icons/icon-team-music.png">
                        <img class="rel-icon" src="../assets/icons/icon-team-photo.png">
                        <img class="rel-icon" src="../assets/icons/icon-team-video.png">

                    </div class="box-column">
                    <div class="box-column right-box">
                        <img class="testimonial-img" src="../assets/images/testimonial-img.jpg">
                    </div class="box-column">
                    <div class="box-column arrow smooth" :span="2">
                        <img src="../assets/images/arrow-right.png" @click="scrollRight">
                    </div class="box-column">
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  export default{
    data() {
      return {
        current: 0,
        testimonials: [],
        reco: [
          {
            name: "אולגה ואמיר",
            date: "26-02-2017",
            content: "של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספקהמלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק,המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק ",
            suppliers: [1, 2, 3, 4],
            img_url: "../assets/images/testimonial-img.jpg"
          },
          {
            name: "אל ומרטין",
            date: "26-07-2017",
            content: "של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספקהמלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק,המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק המלצות של הזוג המתארות את הספקים שהם לקחו ומה דעתם על כל ספק ",
            suppliers: [1, 2, 3, 4],
            img_url: "../assets/images/testimonial-img.jpg"
          }
        ]
      }
    },
    methods: {
      scrollLeft () {
        this.current + 1 === this.reco.length ? this.current = 0 : this.current++
      },
      scrollRight () {
        this.current - 1 < 0 ? this.current = this.reco.length - 1 : this.current--
      },
      getTestimonials () {
        this.$http.get(`http://public.weddiz.co.il/api/testimonials`)
          .then(
            (response) => {
              this.testimonials = response.body.data
              console.log(this.testimonials )
              return this.testimonials
            }
          )
          .catch(
            (error) => console.log(error)
          )
      }
    },
    mounted () {
      this.getTestimonials()
    }
  }
</script>

<style>
    @import "../assets/css/style.css";

    #recmmendations {
        padding: 35px 0;
    }

    .right-box img {
        border-radius: 50%;
        max-width: 233px;
    }

    .left-box {
        max-width: 60%;
        padding-right: 30px;
    }

    .reco-box {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: right;
    }

    .box-column:nth-child(1), .box-column:nth-child(4) {
        width: 5%;
    }

    .arrow:hover {
        cursor: pointer;
        zoom: 115%;
    }

    .arrow:nth-child(1) {
        text-align: left;
    }

    .testimonial-img {
        border-radius: 50%;
        -webkit-transition: -webkit-transform .8s ease-in-out;
        transition: transform .8s ease-in-out;
        -webkit-filter: grayscale(62%); /* Safari 6.0 - 9.0 */
        filter: grayscale(62%);
    }

    .testimonial-img:hover {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }

    p.testimonial__providers {
        font-size: 20px;
        position: relative;
        float: right;
        margin-left: 15px;
    }

    .rel-icon {
        padding: 10px;
    }

    .rel-icon:hover {
        cursor: pointer;
        box-shadow: inset 0px 0px 2px 2px #d3dce6;
        border-radius: 40%;
        transition: 0.2s;
    }

</style>

