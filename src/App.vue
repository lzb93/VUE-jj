<template>
  <div id="app">
    <!-- <Navvue></Navvue>   -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>

    
    
  </div>
</template>

<script>
// import './assets/lib/jquery-2.1.4';
// import './assets/js/jquery-weui';
// import './assets/js/swiper';
// import Navvue from './components/Head';
// import Footvue from './components/foot';



export default {
  name: 'app',
  components:{
    // Navvue,
    // Footvue,
  },
  methods:{
  //   router_food(){
  //      alert(this.$route.path)
  // }
     
  },
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  /* margin-top: 60px; */
}
input{
  background: none
}
/* .weui-content{
  margin-top: 44px;
} */
</style>
