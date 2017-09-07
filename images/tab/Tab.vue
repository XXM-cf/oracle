<template>
  <div>
    <div id="tab" ref="tab">
      <ul class="btn_group">
        <li :class="item.active" v-for="(item,index) in tabs" @click="tabToggle(index)">{{item.name}}</li>
      </ul>
      <div>
        {{getDate}}
      </div>
      <component :is='currentView' keep-alive></component>
      <div>

      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  var tab0 = Vue.extend({
      template:`
        <div class="cont">
            <ul>
              <li>来自Java学院的一封信</li>
              <li>来自Java学院的一封信</li>
              <li>来自Java学院的一封信</li>
              <li>来自Java学院的一封信</li>
            </ul>
           <!-- <p class="more"><a href="#">| 更多 |</a></p>-->
          </div>`
      })
  var tab1= Vue.extend({
    template:`
        <div class="cont">
            <ul>
              <li>行业111</li>
              <li>行业111</li>
              <li>行业111</li>
              <li>行业111</li>
            </ul>
          </div>`
  })
  export default{
    props:['getDate'],
    data(){
      return{
        tabs:[
          {'name':'公司新闻','active':'active'},
          {'name':'行业动态','active':''},
        ],
        currentView:'tab0',
      }
    },
    components:{
      tab0:tab0,
      tab1:tab1
    },
    methods:{
      tabToggle:function(num){
        this.currentView='tab'+num;
        this.tabs.forEach((val,index) => {
            this.tabs[index].active='';
        })
        this.tabs[num].active='active';
      }
    }
  }
</script>
<style lang="less" >
  @r:100rem;
  /***选项卡 end***/
  #tab{
    .btn_group{
      margin-top:42/@r;
      li{
        width: 50%;
        height: 98/@r;
        line-height: 98/@r;
        font-size: 34/@r;
        float: left;
        background: #f2f2f2;
        text-align: center;
        &.active{
          background: #c11920;
          color:#fff;
         }
      }
    }
    .cont{
      li{
        line-height: 80/@r;
        font-size: 34/@r;
        margin-left: 90/@r;
        color:#666;
        &:before{
          width: 14/@r;
          height:14/@r;
          content: '';
          background: #666;
          display:inline-block;
          border-radius: 8/@r;
          margin-right: 20/@r;
        }
      }
      .more{
        overflow: hidden;
        font-size: 34/@r;
        padding-bottom:30/@r;
        a{
          float: right;
          margin-right: 60/@r;
          color:#666;
        }
      }
    }
  }

</style>
