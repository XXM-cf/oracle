<template>
  <div id="footer">
    <ul>
      <li>
          <router-link :to="{path:'/course'}">
            <em><img src="./tab_iocn_62.png"></em>
            <span>课程</span>
            <!--<span>申请试听</span>-->
          </router-link>
      </li>
      <li>
        <a href="javascript:;" @click="show_tle">
          <em><img src="./tab_iocn_64.png"></em>
          <span>电话咨询</span>
        </a>
      </li>
      <li>
        <router-link :to="{path:'/about'}">
          <em><img src="./tab_iocn_66.png"></em>
          <span>关于我们</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="less">
  @r:100rem;
  #footer{
    width: 750/@r;
    height:98/@r;
    position: fixed;
    bottom: 0;
    background: #c11920;

    ul{
      display: flex;
      li{
        flex: 1;
        text-align: center;
        padding-top:14/@r;
        a{
          color: #fff;
          display: block;
          font-size: 20/@r;
          line-height: 40/@r;
        }
        em img{
          width: 48/@r;
          height:48/@r;
          margin: 0 auto;
        }
      }
    }
  }

</style>
<script>
  export default{
    methods:{
      show_tle:function(){
        this.$store.dispatch("showTle")
      }
    }
  }
</script>
