<template>
  <div>
    <div  class="animated fadeInRight">
    <div id="banner">
      <div class="swiper-container" keep-alive>
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="./banner_07.jpg"></div>
          <div class="swiper-slide"><img src="./banner_08.png"></div>
          <div class="swiper-slide"><img src="./banner_09.jpg"></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div id="icon_list">
      <ul>
        <li>
          <img src="./icon_18.png">
          <p>PHP开发工程师</p>
        </li>
        <li>
          <img src="./icon_20.png">
          <p>JavaEE</p>
        </li>
        <li>
          <img src="./icon_22.png">
          <p>UI设计师</p>
        </li>
        <li>
          <img src="./icon_24.png">
          <p>H5全栈开发师</p>
        </li>
      </ul>
      <ul>
        <li>
          <img src="./icon_30.png">
          <p>云计算Linux</p>
        </li>
        <li>
          <img src="./icon_31.png">
          <p>大数据</p>
        </li>
        <li>
          <img src="./icon_32.png">
          <p>4G开发工程师</p>
        </li>
        <li>
          <img src="./icon_33.png">
          <p>UE交互设计师</p>
        </li>
      </ul>
    </div>
  <!--选项卡---->
      <Tab></Tab>
   <!--选项卡 end---->
    <div id="foot">
      <div class="foot_wrap clear">
        <div class="pic_left">
          <img src="./btn_46.png"/>
          <img src="./btn_48.png"/>
          <img src="./btn_54.png"/>
          <img src="./btn_55.png"/>
        </div>
        <div class="pic_right">
          <img src="./info_50.png">
        </div>
      </div>
      <div class="foont_font">版权所有：杭州天眼教育咨询有限公司 浙 ICP 备 11049466</div>
    </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @r:100rem;

  #banner{
    width: 100%;
    height: 273/@r;
    img{
      width: 100%;
      height: 273/@r;
    }
  }

  /***图标列表***/
  #icon_list{
     ul{
       display: flex;
       li{
         flex: 1;
         text-align: center;
         img{
           width: 100/@r;
           height: 100@r;
           margin: 0 auto;
           padding:33/@r 0 20/@r 0;
         }
         p{
           font-size: 20/@r;
           color: #333;
         }
       }
     }
  }
  /***图标列表 end***/






  /***底部图标列表***/
  .foot_wrap{
    padding: 26/@r 0 0 0;
  }
  #foot{
    width:632/@r;
    margin: 0 auto;
    border-top:1px dashed #ccc;
    font-size:20/@r;
    .pic_left{
      width: 412/@r;
      float: left;
      img{
        width: 196/@r;
        height:144/@r;
        background: #f2f2f2;
        float: left;
        margin-right: 10/@r;
        margin-bottom: 10/@r;
      }
    }
    .pic_right{
      float: left;
      img{
        width: 220/@r;
        height: 298/@r;
      }
    }
    .foont_font{
      height: 72/@r;
      line-height: 72/@r;
      background: #f2f2f2;
      font-size: 20/@r;
      color: #333;
      text-align: center;
    }
  }
  /***底部图标列表 end***/

</style>
<script>
  import Tab from '../tab/Tab.vue'
  export default{
    components:{
      Tab
    },
    data(){
      return{
        mySwiper:null,
      }
    },
    methods:{
      aotuPlayPic:function(){
        this.mySwiper = new Swiper ('.swiper-container', {
          loop: true,
          autoplay: 1000,
          autoplayDisableOnInteraction:false,
          pagination: '.swiper-pagination'
        })
      }
    },
    watch:{
      $route(to){
        if(to.path=='/home'){
          this.mySwiper.stopAutoplay()
          this.aotuPlayPic();
        }
      }
    },
    mounted(){
        this.aotuPlayPic();
    }
  }
</script>
