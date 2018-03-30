<template>
   <div class="textinp">
     <div class="weui-cell">
          <div class="weui-cell__hd"><label class="weui-label wy-lab"><slot  name="title"></slot></label></div>
          <div class="weui-cell__bd"><slot  name="inputs">sadasdsad</slot></div>
          <div class="weui-cell__fd"><slot  name="fotd" ></slot></div>
    </div>  
     
   </div>
</template>

<script>


export default {
  name: 'textinp',
  props: {
      text: {
          type: Boolean
      }
  },
  methods:{
    
   
  },
  mounted(){
    console.log(this.text)
     
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