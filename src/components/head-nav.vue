<template>
   <div class="headnav">
     <header class="wy-header">
        <div class="wy-header-icon-back"  @click="$router.go(-1)"><span class="ion-chevron-left"></span></div>
        <slot  name="title"></slot>
     </header>
   </div>
</template>

<script>


export default {
  name: 'headnav',

  methods:{
   
  },
  mounted(){
 
     
    },
   ready(){

       
    }
}
</script>
<style scoped>
  .wy-header{
    width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
  
}
</style>