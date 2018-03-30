<template>
  <div class="pro_info">
    <headnav>
      <div class="wy-header-title" slot="title">分销</div>
    </headnav>

   <div class="tishi t-c">
     <img src="../../static/images/fxkong.png">

   </div>

    <Footvue ></Footvue>
  </div>
</template>
<script >
import headnav from '../components/head-nav';
import Footvue from '../components/foot';

export default {
  components:{
    headnav,
    Footvue
  }
}
</script>
<style scoped>
.tishi img{
   width: 180px;
   height: 180px;
   margin: auto;
   margin-top: 100px;

}
</style>
