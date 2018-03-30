<template>
  <div class="pro_info">
    <headnav>
      <div class="wy-header-title" slot="title">优惠券</div>
    </headnav>

    <div>
        <ul>
            <li class="yhq-li bg-y">
                <div class="yhq-bor">
                    <div class="yhq-top">实付满79元即可使用</div>  
                    <div class="yhq-com">RMB3优惠券</div>
                    <div class="yhq-bom">立即领取</div>
                </div>
            </li>
             <li class="yhq-li bg-y">
                <div class="yhq-bor">
                    <div class="yhq-top">实付满79元即可使用</div>  
                    <div class="yhq-com">RMB3优惠券</div>
                    <div class="yhq-bom">立即领取</div>
                </div>
            </li>
            <li class="yhq-li bg-y">
                <div class="yhq-bor">
                    <div class="yhq-top">实付满79元即可使用</div>  
                    <div class="yhq-com">RMB3优惠券</div>
                    <div class="yhq-bom">立即领取</div>
                </div>
            </li>
            <li class="yhq-li bg-y">
                <div class="yhq-bor">
                    <div class="yhq-top">实付满79元即可使用</div>  
                    <div class="yhq-com">RMB3优惠券</div>
                    <div class="yhq-bom">立即领取</div>
                </div>
            </li>
            <li class="yhq-li bg-y">
                <div class="yhq-bor">
                    <div class="yhq-top">实付满79元即可使用</div>  
                    <div class="yhq-com">RMB3优惠券</div>
                    <div class="yhq-bom">立即领取</div>
                </div>
            </li>
            <li class="yhq-li bg-y">
                <div class="yhq-bor">
                    <div class="yhq-top">实付满79元即可使用</div>  
                    <div class="yhq-com">RMB3优惠券</div>
                    <div class="yhq-bom">立即领取</div>
                </div>
            </li>
        </ul>
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

<style scoped>
ul{
    display: flex;
    flex-flow: column

}
.yhq-li{
    flex: 1;
    margin: 10px;
    height: 120rpx;
    padding: 15px;
    background: steelblue;
    text-align: center;
    overflow: hidden;


}
.yhq-bor{
    border: 1px #ffffff solid;
    width: 100%;
    height: 105px;  

}
.yhq-top{
    background: #ffffff;
    font-size: 12px;
    color: red;
    padding: 2px;

}
.yhq-com{
    font-size: 30px;
    color: #ffffff;
    margin-top: 10px;

}
.yhq-bom{
    width: 100px;
    line-height: 50px;
    height: 90px;
    border-radius:100% ;
    position: relative;
    background: #ffffff;
    left: 50%;
    color:#666666; 
    margin-left: -50px;
}
.bg-y{
    background: tomato;
}
</style>

