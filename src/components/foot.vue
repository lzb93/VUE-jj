<template>
  <div  class="Footvue">
<!--底部导航-->
<div class="foot-black"></div>
<div class="weui-tabbar wy-foot-menu">
  <router-link class="weui-tabbar__item" v-for="(item, index) in products" :to="{ path: item.path }" tag="li" :key="item.index">
      <span class="weui-badge" style="position: absolute;top: -.4em;right: 1em;" v-if="item.badge!=null">{{item.badge}}</span>
      <div :class="item.classis" class="weui-tabbar__icon"></div>
      <p class="weui-tabbar__label">{{ item.name }}</p>
  </router-link>

</div>

  </div>
</template>
<script>
export default {
  name: 'Footvue',
  data () {
    return {
      products: [
        {
            name: '首页',
            path: '/index',
            classis:'foot-menu-home'

        },
        {
            name: '分类',
            path: '/classify',
            classis:'foot-menu-list'
        },
        {
            name: '分销',
            path: '/distri',
            classis:'foot-menu-fenxiao'         
        },
        {
            name: '购物车',
            path: '/shopcart',
            classis:'foot-menu-cart',
            badge:'8'
        },
        {
            name: '我的',
            path: '/mine',
            classis:'foot-menu-member'
        }
      ]
    }
  }
}

</script>
<style>

</style>
