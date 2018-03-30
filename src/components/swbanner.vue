<template>
  <div  class="swbanner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"  v-for="(item,index) in bannerimg" :key="item.index"><img :src="item" /></div>
            </div>
            <div class="swiper-pagination"></div>
            
        </div>

  </div>
</template>
<script>


export default {
  name: 'swbanner',
  props:['bannerimg'],

  created () {
       console.log(this.bannerimg)
    },  
  mounted(){
         $(".swiper-container").swiper({
           loop: true,
           autoplay: 3000
        });
     
    }

}
</script>
<style>

</style>

