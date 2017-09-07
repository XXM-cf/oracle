<template>
  <div id="header">
    <div class="logo" ></div>
    <ul id="nav">
      <li class="active"><router-link :to="{path:'/home'}" ></router-link></li>
      <li><router-link :to="{path:'/job'}"  >就业</router-link></li>
      <li><router-link :to="{path:'/course'}" >课程</router-link></li>
      <li><router-link :to="{path:'/teachers'}" >师资</router-link></li>
      <li><router-link :to="{path:'/environment'}">环境</router-link></li>
      <li><router-link :to="{path:'/about'}" >我们</router-link></li>
    </ul>
  </div>
</template>
<style lang="less">
  @r:100rem;
  #header{
    width: 100%;
    position: absolute;
    top:0;
  }
  .logo{
    width: 100%;
    height:88/@r;
    border-bottom: 1px solid  #d97579;
    background: url("./header_02.png") no-repeat center center;
    background-size: contain;
    position: relative;
  }
  #nav{
    background: #fff;
    display: flex;
    li:nth-of-type(1){
        .nav_font{
          width: 46/@r;
          height:46/@r;
          background: url("./home.png") no-repeat center center;
          background-size: cover;
          display: inline-block;
          margin-top: 19/@r;
        }
    }
    li{
      flex: 1;
      font-size: 34/@r;
      text-align: center;
      &.active{
       a{
          width: 46/@r;
          height:46/@r;
          background: url("./home.png") no-repeat center center;
          background-size: cover;
          display: inline-block;
          margin-top: 19/@r;
        }
        a.router-link-active{
          width: 46/@r;
          height:46/@r;
          background: url("./home-active.png") no-repeat center center;
          background-size: cover;
          display: inline-block;
          margin-top: 19/@r;

        }
      }
    }
    a{
      height: 88/@r;
      line-height: 88/@r;
      display:block;
      color: #333;
      text-decoration: none;
    }
    .router-link-active{
      color: #c11920;
    }
  }
</style>
<script></script>
