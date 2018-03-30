<template>
  <div  class="shoplist">
    <div class="wy-Module">
      <div class="wy-Module-con">
        <ul class="wy-pro-list clear" v-if='bodyshop'>
          
          <!-- <router-link  tag="li" v-for="k in bodyshop" :key="k.id" :to="{ name:'pro_info', params:{itemid:k.itemid}}"> -->
          <router-link  tag="li" v-for="k in bodyshop" :key="k.id" :to="{ name:'pro_info', query:{itemid:k.itemid}}">
            <div class="proimg"><img :src="k.imgSrc"></div>
              <div class="protxt">
                <div class="name">{{k.title}}</div>
                <div class="wy-pro-pri">¥<span>{{k.price}}</span></div>
                <div ><span>新上架</span><span class="fr">销量：100</span></div>
              </div>
          </router-link>
        </ul>
        <div class="morelinks"><a href="pro_list.html">点击查看更多</a></div>
      </div>
   </div>

  </div>
</template>

<script>


export default {
  name: 'Shoplist',
  props:['bodyshop'],

  created () {
       var me = this;
      //  console.log(me.props)
    },

}
</script>
<style>
  .morelinks a{
    border: 1px solid #666;
    background-color: #ffffff;
    padding: 5px 20px;
    border-radius: 8px;
  }
</style>

