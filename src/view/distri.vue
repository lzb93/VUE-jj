<template>
  <div class="pro_info">
    <headnav>
      <div class="wy-header-title" slot="title">分销</div>
    </headnav>

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