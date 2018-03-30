<template>
  <div class="pro_info">
    <headnav>
      <div class="wy-header-title" slot="title">编辑地址</div>
    </headnav>
    <div class="weui-content">
      <div class="weui-cell wy-address-edit">
        <div class="weui-cell__hd"><label for="" class="weui-label wy-lab">真实姓名</label></div>
        <div class="weui-cell__bd"><input class="weui-input" type="number" pattern="[0-9]*" value="weui input error" placeholder="请输入真实姓名"></div>
        <div class="weui-cell__ft"><i class="weui-icon-warn"></i></div>
      </div>
      <div class="weui-cell wy-address-edit">
        <div class="weui-cell__hd"><label class="weui-label wy-lab">手机号码</label></div>
        <div class="weui-cell__bd"><input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入手机号"></div>
      </div>
      <div class="weui-cell wy-address-edit">
        <div class="weui-cell__hd"><label class="weui-label wy-lab">验证码</label></div>
        <div class="weui-cell__bd"><input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入"></div>
        <div class="weui-cell__ft"><button class="weui-input">发送验证码</button></div>
      </div>
      <div class="weui-btn-area">
      <a href="add_card.html" class="weui-btn weui-btn_plain-default">保存</a>
      </div>
    </div>


  </div>
</template>
<script >
import headnav from '../components/head-nav';

export default {
  components:{
    headnav,
  }
}
</script>