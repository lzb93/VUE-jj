<template>
  <div  class="Navvue">
      <header class="wy-header">
          <div class="wy-header-left">{{postion}}<span class="ion-ios-arrow-down"></span></div>
          <div class="wy-header-title" style=" padding: 8px 0;">
            <div class="search-bg">
              <span class="weui-icon-search"></span>
            </div>
          </div>
          <div class="wy-header-right "><span class="ion-plus"></span></div>
      </header>
      <div class="swiper-container swiper-banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><a href=""><img src="../assets/upload/ban1.jpg" /></a></div>
          <div class="swiper-slide"><a href=""><img src="../assets/upload/ban2.jpg" /></a></div>
          <div class="swiper-slide"><a href=""><img src="../assets/upload/ban3.jpg" /></a></div>
          <div class="swiper-slide"><a href=""><img src="../assets/upload/ban4.jpg" /></a></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

  <!--顶部搜索-->
  

  </div>
</template>

<script>


export default {
  name: 'Navvue',
  props:['postion'],

  methods:{
   
  },
  mounted(){
         $(".swiper-banner").swiper({
           loop: true,
           autoplay: 3000
        });
     
    },
   ready(){

       
    }
}
</script>
<style>
.swiper-pagination-bullet-active{
      background: #fb671b;
}
.search-bg{
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: left;
  background: rgba(255, 255, 255, 0.2);
  border-radius:50px;
  padding-left: 10px;
  
}
.search-bg, .weui-icon-search{
  color: #ffffff;
}

</style>



