<template>
  <div class="weui-content">
        <Navvue :postion="postion"></Navvue>

         <!--图标分类-->
        <div class="weui-flex wy-iconlist-box">
          <div class="weui-flex__item"><a href="pro_list.html" class="wy-links-iconlist"><div class="img"><img src="../assets/images/xsms.png"></div><p>限时秒杀</p></a></div>
          <div class="weui-flex__item"><a href="pro_list.html" class="wy-links-iconlist"><div class="img"><img src="../assets/images/yhq.png"></div><p>活动券区</p></a></div>
          <div class="weui-flex__item"><a href="all_orders.html" class="wy-links-iconlist"><div class="img"><img src="../assets/images/xpss.png"></div><p>新品上市</p></a></div>
          <div class="weui-flex__item"><a href="废Settled_in.html" class="wy-links-iconlist"><div class="img"><img src="../assets/images/pprz.png"></div><p>品牌入驻</p></a></div>
          <div class="weui-flex__item"><a href="pro_list.html" class="wy-links-iconlist"><div class="img"><img src="../assets/images/rmsp.png"></div><p>热门商品</p></a></div>
          <div class="weui-flex__item"><a href="pro_list.html" class="wy-links-iconlist"><div class="img"><img src="../assets/images/Fruit.png"></div><p>精品水果</p></a></div>
          <div class="weui-flex__item"><a href="all_orders.html" class="wy-links-iconlist"><div class="img"><img src="../assets/images/spzm.png"></div><p>商家招募</p></a></div>
          <div class="weui-flex__item"><a href="废Settled_in.html" class="wy-links-iconlist"><div class="img"><img src="../assets/images/sysp.png"></div><p>所有商品</p></a></div>

        </div>
         <!--商铺-->
        <div class="wy-iconlist-box">
            <div class="pd-10 t-c">
              <p>店铺街</p>
              <small>该城市暂无入驻的品牌店铺，换个城市试试</small>
            </div>  
         
        </div>
        

        <shoplist :bodyshop="bodyshop"></shoplist>
       
     
        <Footvue ></Footvue>
       
  </div>
</template>
<script>
import Navvue from '../components/Head';
import Footvue from '../components/foot';
import Shoplist from '../components/shoplist';
import data from '../../data.json';



export default {
  name: 'app',
  components:{
    Navvue,
    Footvue,
    Shoplist,
  },
  data () {
        return {
          postion:"厦门市",
          banner: {},
          menu: {},
          bodyshop: [],
          bannerList: [],
        };
  },
  created () {
      var me = this;
      setTimeout(function () {
        me.a = true;
      }, 2000);
      me.banner = data.banner;
      me.menu = data.menu;
      me.bodyshop = data.starGoods.starGoodsList;
      me.bannerList = data.banner.bannerTop;
      


      // var apix="http://w.wanshangtang.com/home/index/new_indexpage";
      // me.axios.get(apix).then((response) => {
           
      //     if(response.status==401){

      //     }
      //     if(response.status==200){
      //         console.log(response)
      //     }else{
      //       console.log(response.statusText)
      //     }
    
      //   },(err) => {
      //     console.log(22),
      //     console.log(err)
      //   })

    },
    
}
</script>
<style scoped>
  .wy-iconlist-box{
      flex-flow: row wrap;
  }
  .weui-flex__item{
      flex-basis:25%;
  }  

</style>
