<template>
  <div id="audition">
    <div  class="animated fadeInRight">
    <form>
      <ul>
        <li><input type="text" value="" name="name" placeholder="姓名"></li>
        <li><input type="text" value="" name="phone" placeholder="手机"></li>
        <li><input type="text" value="" name="qq" placeholder="QQ"></li>
        <li>
          <select name="list">
            <option>111</option>
            <option>111</option>
            <option>111</option>
          </select>
        </li>
        <li><input id="sub_btn" type="submit" value="申请试听"></li>
      </ul>
    </form>
      </div>
  </div>
</template>
<style lang="less"scoped>
  @r:100rem;
  #audition{
    height: 100%;
    background:#fff;
    border-top:1px solid #8c8c8c;
    ul{
      padding: 56/@r 60/@r 0;
      li{
        input{
          width: 100%;
          height: 86/@r;
          border: 1px solid #8c8c8c;
          text-indent: 26/@r;
          font-size: 34/@r;
        }
        select{
          width: 100%;
          height: 86/@r;
          overflow: hidden;
          margin: 0;
          padding:0;
        }
      }
    }
    #sub_btn{
      border-radius: 20/@r;
      background: #c11920;
      text-align: center;
      color: #fff;
    }
  }
</style>
