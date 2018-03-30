<template>
  <div class="pro_info">
    <headnav style="position: fixed;width: 100%;"> 
      <div class="wy-header-title" slot="title">订单管理</div>
    </headnav>

    <div class='weui-content'>
      <div class="weui-tab">
        <div class="weui-navbar" style="position:fixed; top:44px; left:0; right:0; height:44px; background:#fff;">
          <a class="weui-navbar__item proinfo-tab-tit font-14" href="javascript:;"  v-for="(kitem, index) in navleft" :key="kitem.index"
            :class="{'weui-bar__item--on':index==currentindex}" @click="currentindex=index">{{kitem.name }}</a>
        

        </div>
        <div class="weui-tab__bd proinfo-tab-con" style="padding-top:87px;">
          <div id="tab1" class="weui-tab__bd-item weui-tab__bd-item--active">
            <div class="weui-panel weui-panel_access">
              <div class="weui-panel__hd"><span>单号：2132165457654545</span><span class="ord-status-txt-ts fr">交易成功</span></div>
              <div class="weui-media-box__bd  pd-10">
                <div class="weui-media-box_appmsg ord-pro-list">
                  <div class="weui-media-box__hd"><a href="pro_info.html"><img class="weui-media-box__thumb" src="upload/pro3.jpg" alt=""></a></div>
                  <div class="weui-media-box__bd">
                    <h1 class="weui-media-box__desc"><a href="pro_info.html" class="ord-pro-link">蓝之蓝蓝色瓶装经典Q7浓香型白酒500ml52度高端纯粮食酒2瓶装包邮</a></h1>
                    <p class="weui-media-box__desc">规格：<span>红色</span>，<span>23</span></p>
                    <div class="clear mg-t-10">
                      <div class="wy-pro-pri fl">¥<em class="num font-15">296.00</em></div>
                      <div class="pro-amount fr"><span class="font-13">数量×<em class="name">1</em></span></div>
                    </div>
                  </div>
                </div>
                <div class="weui-media-box_appmsg ord-pro-list">
                  <div class="weui-media-box__hd"><a href="pro_info.html"><img class="weui-media-box__thumb" src="upload/pro3.jpg" alt=""></a></div>
                  <div class="weui-media-box__bd">
                    <h1 class="weui-media-box__desc"><a href="pro_info.html" class="ord-pro-link">蓝之蓝蓝色瓶装经典Q7浓香型白酒500ml52度高端纯粮食酒2瓶装包邮</a></h1>
                    <p class="weui-media-box__desc">规格：<span>红色</span>，<span>23</span></p>
                    <div class="clear mg-t-10">
                      <div class="wy-pro-pri fl">¥<em class="num font-15">296.00</em></div>
                      <div class="pro-amount fr"><span class="font-13">数量×<em class="name">1</em></span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ord-statistics">
                <span>共<em class="num">2</em>件商品，</span>
                <span class="wy-pro-pri">总金额：¥<em class="num font-15">592.00</em></span>
                <span>(含运费<b>￥0.00</b>)</span>
              </div>
              <div class="weui-panel__ft">
                <div class="weui-cell weui-cell_access weui-cell_link oder-opt-btnbox">
                  <a href="javascript:;" class="ords-btn-dele">删除订单</a>
                  <a href="comment.html" class="ords-btn-com">评价</a>
                  <a href="order_info2.html" class="ords-btn-com">去付款</a>
                  <a href="order_info2.html" class="ords-btn-com">确认收货</a>
                  <a href="order_info2.html" class="ords-btn-com">退款</a>
                </div>    
                 <!-- <div class="weui-cell weui-cell_access weui-cell_link oder-opt-btnbox">
                   商品正在打包中，请您耐心等待....
                 </div>   -->
              </div>
            </div>
            
            <div class="weui-panel weui-panel_access">
              <div class="weui-panel__hd"><span>单号：2132165457654545</span><span class="ord-status-txt-ts fr">交易成功</span></div>
              <div class="weui-media-box__bd  pd-10">
                <div class="weui-media-box_appmsg ord-pro-list">
                  <div class="weui-media-box__hd"><a href="pro_info.html"><img class="weui-media-box__thumb" src="upload/pro3.jpg" alt=""></a></div>
                  <div class="weui-media-box__bd">
                    <h1 class="weui-media-box__desc"><a href="pro_info.html" class="ord-pro-link">蓝之蓝蓝色瓶装经典Q7浓香型白酒500ml52度高端纯粮食酒2瓶装包邮</a></h1>
                    <p class="weui-media-box__desc">规格：<span>红色</span>，<span>23</span></p>
                    <div class="clear mg-t-10">
                      <div class="wy-pro-pri fl">¥<em class="num font-15">296.00</em></div>
                      <div class="pro-amount fr"><span class="font-13">数量×<em class="name">1</em></span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ord-statistics">
                <span>共<em class="num">1</em>件商品，</span>
                <span class="wy-pro-pri">总金额：¥<em class="num font-15">296.00</em></span>
                <span>(含运费<b>￥0.00</b>)</span>
              </div>
              <div class="weui-panel__ft">
                <div class="weui-cell weui-cell_access weui-cell_link oder-opt-btnbox">
                  <a href="javascript:;" class="ords-btn-dele">删除订单</a><a href="comment.html" class="ords-btn-com">评价</a>
                </div>    
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
import headnav from '../components/head-nav';


export default {
  components:{
    headnav,
  },
  data(){
    return {
      currentindex:0,
      navleft:[{
        name:'全部',
        itemid:'jiu'
      },
      {
        name:'待付款',
        itemid:'shui'
      },
      {
        name:'待发货',
        itemid:'shui'
      },
      {
        name:'待收货',
        itemid:'cai'
      },
      {
        name:'待评价',
        itemid:'shui'
      },
      {
        name:'退换/售后',
        itemid:'shui'
      }
      ]
    }
  },

}
</script>