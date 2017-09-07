<template>
  <div id="about">
    <div  class="animated fadeInRight">
    <div class="banner">
      <img src="./ab_1.gif" />
    </div>
    <div class="h_group">
      <h2>集团介绍</h2>
      <p>GROUP INTRODUCTION</p>
    </div>
    <p class="cont">
      Oracle天眼（http://www.skeyedu.com）,杭州下沙高新区人才中心，创立于有天堂硅谷美誉的杭州，致力于中国IT人才的培养工程，
      成立甲骨文（浙江）运营学习中心，为学员提供真正的原厂课程内容、认证、实训、就业一体化服务。公司总部位于杭州和平广场，目前建有和平基地、新天地基地、富阳基地、嘉兴基地四大实训中心，并在湖南长沙成立了分公司，湖北武汉设立办事处
    </p>
    <a class="read_more" href="#">查看详情</a>
    <img class="banner1" src="./ab_2.gif" />
    <img class="banner2" src="./ab_3.gif" />
      <div class="swiper-container">
        <div class="swiper-wrapper" keep-alive>
          <div class="swiper-slide"><img src="./ab_4.gif"></div>
          <div class="swiper-slide"><img src="./ab_4.gif"></div>
          <div class="swiper-slide"><img src="./ab_4.gif"></div>
          <div class="swiper-slide"><img src="./ab_4.gif"></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    <p class="cont cont_1">
      2016年，天眼在杭州市下城区高新技术产业园成立————新天地基地，环境更优良，规模更宏大
    </p>
    <img class="banner3" src="./ab_5.gif" />
    <div class="h_group">
      <h2>荣誉资质</h2>
      <p>QUALIFICATION HONOR</p>
    </div>
      <div class="swiper-container">
        <div class="swiper-wrapper" >
          <div class="swiper-slide"><img src="./ab_6.gif"></div>
          <div class="swiper-slide"><img src="./ab_6.gif"></div>
          <div class="swiper-slide"><img src="./ab_6.gif"></div>
          <div class="swiper-slide"><img src="./ab_6.gif"></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
     </div>
  </div>
</template>
<style lang="less" scoped>
  @r:100rem;
  #about{

    .banner{
      img{
        width: 750/@r;
        height: 200/@r;
      }
    }
    .h_group{
      color:#333;
      text-align: center;
      padding:40/@r 0 20/@r 0;
      h2{
        font-size: 63/@r;
      }
      p{
        line-height: 28/@r;
        font-size: 20/@r;
      }
    }
    .cont{
      line-height: 40/@r;
      font-size: 30/@r;
      color: #333;
      padding:0 24/@r;
      text-align:justify
    }
    .read_more{
      width: 248/@r;
      height: 90/@r;
      line-height: 90/@r;
      text-align: center;
      display: block;
      background: #c11920;
      color: #fff;
      border-radius: 20/@r;
      font-size: 30/@r;
      margin:46/@r auto 58/@r;
    }
    .banner1{
      width: 750/@r;
      height: 200/@r;
      margin-bottom: 43/@r;
    }
    .banner2{
      width: 81/@r;
      height: 172/@r;
      margin: 0 auto 20/@r;
    }
    .banner3{
      width: 750/@r;
      height: 172/@r;
      margin: 0 auto;
    }
    #swper{
      li{
        width: 306/@r;
        height: 206/@r;
        overflow: hidden;
        border-radius: 20/@r;
        img{
          width: 306/@r;
          height: 206/@r;
        }
      }
    }
    .cont_1{
      padding: 16/@r 0 32/@r 0;
      text-align: center;
    }
  }


  .swiper-container {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 306/@r;
    height: 206/@r;
    border-radius: 20/@r;
    overflow: hidden;
    img{
      width: 306/@r;
      height: 206/@r;
    }
  }
</style>
<script>
  export default{
    data(){
      return{
        mySwiper:null
      }
    },
    methods:{
      aotuPlay:function(){

        this.mySwiperObj = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          autoplay: 2000,
          loop: true,
          autoplayDisableOnInteraction:false,
          coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          }
        });
      }
    },
    watch:{

    },
    mounted:function(){

      this.aotuPlay()
    }
  }
</script>
