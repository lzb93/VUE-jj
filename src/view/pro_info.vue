<template>
  <div class="pro_info">
    <headnav>
      <div class="wy-header-title" slot="title">商品详情{{ this.$route.query.itemid}}</div>
    </headnav>

      <div class="weui-content">
        <!--产品详情-->
        <div class="weui-tab">
          <div class="weui-tab__bd proinfo-tab-con">
            <div  class="weui-tab__bd-item weui-tab__bd-item--active">
              <!--主图轮播-->
              <swbanner :bannerimg="bannerimg"></swbanner>

              <div class="wy-media-box-nomg weui-media-box_text">
                <h4 class="wy-media-box__title">俞兆林卫衣 男2017春新款运动休闲印花大码潮人卫衣卫裤加厚外套套装男</h4>
                <div class="wy-pro-pri mg-tb-5">¥<em class="num font-20">296.00</em></div>
                <p class="weui-media-box__desc">
                  <span class="promotion-label-tit">库存：120</span>
                  <span class="promotion-label-tit">销量：100</span>
                  <a class="wyfx" href="">我要分销</a>
                </p>
              </div>
              <div class="wy-media-box2 weui-media-box_text">
                <div class="weui-media-box_appmsg">
                  <div class="weui-media-box__hd proinfo-txt-l"><span class="promotion-label-tit">优惠</span></div>
                  <div class="weui-media-box__bd">
                    <div class="promotion-message clear">
                      <i class="yhq"><span class="label-text">优惠券</span></i>
                      <span class="promotion-item-text">满197.00减40.00</span>
                    </div>
                    <div class="promotion-message clear">
                      <i class="yhq"><span class="label-text">优惠券</span></i>
                      <span class="promotion-item-text">满197.00减40.00</span>
                    </div>
                    <div class="yhq-btn clear"><a href="yhq_list.html">去领券</a></div>
                  </div>
                </div>
              </div>
            
            </div>
            
          </div>
        </div>  
      </div>

       <!-- tab -->
      <div class="weui-navbar" style="position: relative;">
          <a class="weui-navbar__item proinfo-tab-tit"  v-for="(item,index) in tabs" :key="item.index" :class="{'weui-bar__item--on': index==tabState}" @click="tabState=index">{{item}}</a>     
      </div>
      <div class="weui-tab__bd-item " v-show="tabState==0?true:false">
111
 
      </div>
      <div class="weui-tab__bd-item "  v-show="tabState==1?true:false">
          <div class="pro-detail">
            <img src="upload/xq1.jpg" /><img src="upload/xq2.jpg" /><img src="upload/xq3.jpg" /><img src="upload/xq4.jpg" /><img src="upload/xq5.jpg" /><img src="upload/xq6.jpg" /><img src="upload/xq7.jpg" /><img src="upload/xq8.jpg" /><img src="upload/xq9.jpg" />
          </div>
      </div>
      <div class="weui-tab__bd-item"  v-show="tabState==2?true:false">
        3
      </div>

      <span id="tophovertree" title="返回顶部"></span>
      <!--底部导航-->
      <div class="foot-black"></div>
      <div class="weui-tabbar wy-foot-menu">
        <a href="javascript:;" class="promotion-foot-menu-items">
          <div class="weui-tabbar__icon promotion-foot-menu-kefu"></div>
          <p class="weui-tabbar__label">客服</p>
        </a>
        <a href="javascript:;" id='show-toast' class="promotion-foot-menu-items">
          <div class="weui-tabbar__icon promotion-foot-menu-collection"></div>
          <p class="weui-tabbar__label">收藏</p>
        </a>
        <a href="shopcart.html" class="promotion-foot-menu-items">
          <span class="weui-badge" style="position: absolute;top: -.4em;right: 1em;">8</span>
          <div class="weui-tabbar__icon promotion-foot-menu-cart"></div>
          <p class="weui-tabbar__label">购物车</p>
        </a>
        <a href="javascript:;" class="weui-tabbar__item yellow-color open-popup"  @click="shopskutab=true">
          <p class="promotion-foot-menu-label">加入购物车</p>
        </a>
        <a href="javascript:;" class="weui-tabbar__item red-color open-popup" @click="shopskutab=true">
          <p class="promotion-foot-menu-label">立即购买</p>
        </a>
      </div>

      <!-- 弹窗 -->
      <div id="selcet_sku" class=' popup-bottom' style="z-index:600;" v-show="shopskutab" >
        <div class="weui-popup__overlay" style="opacity:1;" @click="shopskutab=false"></div>
        <div class="weui-popup">
          <div class="toolbar">
            <div class="toolbar-inner">
              <a href="javascript:;" class="picker-button close-popup" @click="shopskutab=false">关闭</a>
              <h1 class="title">商品属性</h1>
            </div>
          </div>
  
          <div class="modal-content">
            <div class="weui-msg" style="padding-top:0;">
              <div class="wy-media-box2 weui-media-box_text" style="margin:0;">
                <!-- 头信息 -->
                <div class="pro-items">
                  <a href="pro_info.html" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd"><img class="weui-media-box__thumb" :src="bannerimg[0]" alt=""></div>
                    <div class="weui-media-box__bd">
                      <div class="wy-pro-pri t-l">¥<em class="num font-15">296.00</em></div>
                      <div class="wy-pro-pri t-l font-14"><p>库存：13135</p></div>
                      <ul class="weui-media-box__info prolist-ul">
                        <li class="weui-media-box__info__meta">商品属性</li>
                        <li class="weui-media-box__info__meta">商品属性</li>
                      </ul>
                    </div>
                  </a>
                </div>
                <!-- 尺寸 -->
                <div class="weui-media-box_appmsg">
                  <div class="weui-media-box__hd proinfo-txt-l"><span class="promotion-label-tit">尺码</span></div>
                  <div class="weui-media-box__bd">
                    <div class="promotion-sku clear">
                      <ul>
                        <li><a href="javascript:;">25</a></li>
                        <li><a href="javascript:;">30</a></li>
                        <li><a href="javascript:;">34</a></li>
                        <li><a href="javascript:;">40</a></li>
                        <li><a href="javascript:;">45</a></li>
                        <li><a href="javascript:;">50</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="weui-media-box_appmsg">
                  <div class="weui-media-box__hd proinfo-txt-l"><span class="promotion-label-tit">颜色</span></div>
                  <div class="weui-media-box__bd">
                    <div class="promotion-sku clear">
                      <ul>
                        <li><a href="javascript:;">黑色</a></li>
                        <li><a href="javascript:;">红色</a></li>
                        <li><a href="javascript:;">白色</a></li>
                        <li><a href="javascript:;">蓝色</a></li>
                        <li><a href="javascript:;">橘黄色</a></li>
                        <li><a href="javascript:;">绿色</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

               <!-- 数量 -->
                <div class="weui-media-box_appmsg">
                  <div class="weui-media-box_appmsg">
                  <div class="weui-media-box__hd proinfo-txt-l"><span class="promotion-label-tit">数量</span></div>
                  <div class="weui-media-box__bd">
                    <div class="pro-amount fr">
                      <div class="Spinner">
                        <a class="DisDe" href="javascript:void(0)" @click="changenum(item,-1)"><i>-</i></a>
                        <input class="Amount"  autocomplete="off" disabled >
                        <a class="Increase" href="javascript:void(0)"  @click="changenum(item,1)"><i>+</i></a>
                      </div>
                    </div>
                  </div>
                </div>
                  

                  
                </div>


              </div>
              <!-- 底部 -->
              <div class="weui-msg__opr-area">
                <a href="javascript:;" class="weui-tabbar__item yellow-color open-popup">
                    <p class="promotion-foot-menu-label">加入购物车</p>
                  </a>
                  <a href="javascript:;" class="weui-tabbar__item red-color open-popup" >
                    <p class="promotion-foot-menu-label">立即购买</p>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 弹窗 -->
      <!-- <div class="js_dialog" id="iosDialog1">
            <div class="weui-mask"></div>
            <div class="weui-dialog">
                <div class="weui-dialog__hd"><strong class="weui-dialog__title">弹窗标题</strong></div>
                <div class="weui-dialog__bd">弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>
                <div class="weui-dialog__ft">
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default">辅助操作</a>
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">主操作</a>
                </div>
            </div>
        </div> -->
        
        

        



 
  </div>
 
  
</template>
<script >
import headnav from '../components/head-nav';
import swbanner from '../components/swbanner';

import data from '../../data.json';


export default {
  components:{
    headnav,
    swbanner,

  },
  data () {
        return {
          bannerimg:{},
          shopalert:true,
          alerts:false,
          shopskutab:false,

        

          // 页面固定数据
          tabState:0,
          tabs:["商品","详情","介绍"]
        };
        
  },
  
  created () {
    
      var me = this;
      me.bannerimg = data.banner.bannerTop;


      var apix="http://w.wanshangtang.com/home/index/new_indexpage";
      me.axios.get(apix).then((response) => {
            console.log(response)
          if(response.status==401){
            alert(1)

          }
          if(response.status==200){
              console.log(response)
              

               
          }else{
            console.log(response.statusText)
          }
    
        },(err) => {
          console.log(22),
          console.log(err)
        })

    },
    methods: {
  

  
  },

 
}
</script>
<style scoped>
.wy-foot-menu{
  line-height:0px;
}
.weui-media-box_appmsg .weui-media-box__hd {
  line-height: 30px;
}
.weui-popup{
  position: fixed;
  z-index: 999;
  bottom: 0;
  opacity: 1;
  background: none;
  height: auto;
  
}
.weui-msg__opr-area{
  margin-bottom: 0px;
}
.weui-msg__opr-area{
  display: flex;
}
.weui-tab__bd-item{
  min-height: 100px;
}


</style>

