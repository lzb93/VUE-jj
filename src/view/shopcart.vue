<template>
  <div id="classify">
    <headnav>
      <div class="wy-header-title" slot="title">购物车</div>
    </headnav>


  <div class="weui-content" >
  

    <div class="weui-panel weui-panel_access" v-for="item in shopList" :key="item.index">
      <div  class="weui-panel__hd">
        <router-link :to="{ name:'pro_info', query:{itemid:item.itemid}}">江苏蓝之蓝旗舰店</router-link><span class="wy-dele"></span>
      </div>
      <div class="weui-panel__bd">
        <div class="weui-media-box_appmsg pd-10">
          <div class="weui-media-box__hd check-w weui-cells_checkbox">
            <label class="weui-check__label" for="cart-pto1"  @click="checkclick(item)" >
              <div class="weui-cell__hd cat-check"><input type="checkbox" class="weui-check" name="cartpro" :checked="item.check"><i class="weui-icon-checked"></i></div>
            </label>
          </div>
          <div class="weui-media-box__hd"><router-link :to="{ name:'pro_info', query:{itemid:item.itemid}}"><img class="weui-media-box__thumb" :src="item.imgSrc" alt=""></router-link></div>
          <div class="weui-media-box__bd">
            <h1 class="weui-media-box__desc"><router-link :to="{ name:'pro_info', query:{itemid:item.itemid}}" class="ord-pro-link">{{item.title}}</router-link></h1>
            <p class="weui-media-box__desc">规格：<span>红色</span>，<span>23</span></p>
            <div class="clear mg-t-10">
              <div class="wy-pro-pri fl">¥<em class="num font-15">{{item.price | forprice}}</em></div>
              <div class="pro-amount fr">
                <div class="Spinner">
                  <a class="DisDe" href="javascript:void(0)" @click="changenum(item,-1)"><i>-</i></a>
                  <input class="Amount"  autocomplete="off" disabled  v-model="item.sales">
                  <a class="Increase" href="javascript:void(0)"  @click="changenum(item,1)"><i>+</i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
</div>
<!--底部导航-->
<div class="foot-black"></div>
<div class="weui-tabbar wy-foot-menu">
  <div class="npd weui-cells_checkbox allselect" >
    <label class="weui-cell allsec-well weui-check__label"   for="all">
        <div class="weui-cell__hd">
          <input type="checkbox" class="weui-check" name="all-sec" :checked="checkALL" @click="checkALLclick()" id="all">
          <i class="weui-icon-checked"></i>
        </div>
        <div class="weui-cell__bd">
          <p class="font-14">全选</p>
        </div>
    </label>
    
  </div>
  <div class="weui-tabbar__item  npd t-r mg-r-10">
    <p class="cart-total-txt">合计：<i>￥</i><em class="num font-16" id="zong1">{{total | forprice}}</em></p>
  </div>
  <a href="order_info2.html" class="orge-color npd w-90 t-c">
    <p class="promotion-foot-menu-label">去结算</p>
  </a>
</div>

    

  <Footvue ></Footvue>
  </div>
</template>
<script>
import headnav from '../components/head-nav';
import Footvue from '../components/foot';
import data from '../../data.json';



export default {
  name: 'app',
  components:{
    headnav,
    Footvue

  },
  data () {
        return {
          shopList: [],
          checkALL:false,
          total:0,
        };
  },
  filters: {
    forprice:function(value){
       return  value.toFixed(2);
    },

    
  },
  created () {
      var me = this;
      setTimeout(function () {
        me.a = true;
      }, 2000);
      me.shopList = data.iGoods.iList;

      

    },
   mounted () {
    // 事例中只加载一次，一般用作数据请求

    this.$nextTick(function (){
      this.getdatamos();
      // 数据加载完后可执行事件

    })
    
  },
  computed: {
    // computed计算属性的方式在用属性时一般直接返回数据
  },
  methods: {
    // 每次进入页面都执行
    //  加减
    changenum (product,way) {
      if(way>0){
         product.sales++;
         if(product.sales>product.stock){
           product.sales=product.stock
         }
      }else{
        product.sales--;
        if(product.sales<1){
          product.sales=1
        }
      }
      this.totalPay();
    },

    // 选项框
    checkclick (item) {
     
      if(typeof item.check=="undefined"){
           this.$set(item,"check",true);
      }else{
        item.check=!item.check;
      }
        // 全选
        var num=0;
        for(var i=0;i<this.shopList.length;i++){
          if(this.shopList[i].check==true){
            num++
          }
        }
        if(num==this.shopList.length){
           this.checkALL=true;
        }else{
           this.checkALL=false;
        }

      this.totalPay();
    },
    //  全选
    checkALLclick () {
       this.checkALL=!this.checkALL;
       var _this=this;

       this.shopList.forEach(function (item,index){
         if(typeof item.check=="undefined"){
            _this.$set(item,"check",_this.checkALL);    
          }else{    
            item.check=_this.checkALL;
          }
       })
       this.totalPay();
    
    },
    // 计算总价格
    totalPay () {
      var total=0;
      var _this=this;
      for(var i=0;i<this.shopList.length;i++){
          if(_this.shopList[i].check==true){
            total=total+_this.shopList[i].price*_this.shopList[i].sales
          }
        }
        _this.total=total
        console.log(this.total);
    },


    
    getdatamos:function(){
      // 请求数据
      // this.axios.get("../../data.json").then((response) => {
           
      //     if(response.status==401){

      //     }
      //     if(response.status==200){
      //         console.log(response)
      //     }else{
      //       console.log(response.statusText)
      //     }
    
      //   },(err) => {

      //     console.log(err)
      //   })
      
    }
    
  }
}
</script>
<style scoped>
   .weui-tabbar .weui-cells_checkbox{
         line-height: 38px;
   }
   .weui-tabbar{
     margin-bottom: 48px;
   }
   .orge-color{
     background: linear-gradient(to right, #eb2f04, #fb671b);
   }
</style>
