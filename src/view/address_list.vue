<template>
  <div class="shoucang">
    <headnav>
      <div class="wy-header-title" slot="title">地址管理</div>
    </headnav>
<div class="weui-content">
  <div class="weui-panel address-box">

    <div class="weui-panel__bd" v-for="item in ress" :key="item.index">
      <div class="weui-media-box weui-media-box_text address-list-box">
        <router-link tag="a" to="address_edit" class="address-edit"></router-link>
        <h4 class="weui-media-box__title"><span>{{item.name}}</span><span>{{item.phone | forphone}}</span></h4>
        <p class="weui-media-box__desc address-txt">{{item.province}}{{item.dist}}{{item.city}}{{item.street}}</p>
        <span class="default-add" v-show="item.status==2">默认地址</span>
      </div>
    </div>
    
  </div>
  <div class="weui-btn-area">
    <router-link tag="a" class="weui-btn weui-btn_primary" to="address_edit" id="showTooltips">添加收货地址</router-link>
  </div>
</div>
  </div>
</template>
<script >
import headnav from '../components/head-nav';
import data from '../../data.json';


export default {
  name: 'app',
  components:{
    headnav,

  },
  data () {
        return {
          ress: [],
        };
  },
  filters: {
    forphone:function(value){
       return  value.substr(0, 4) + "****" + value.slice(-4);
    },

    
  },
  created () {
    
      this.ress = data.address.datas;

      

    },
   mounted () {
    // 事例中只加载一次，一般用作数据请求

    this.$nextTick(function (){
      this.getdatamos();
      // 数据加载完后可执行事件

    })
    
  },
  computed: {
    // computed计算属性的方式在用属性时一般直接返回数据
  },
  methods: {
    // 每次进入页面都执行
   


    
    getdatamos:function(){
      // 请求数据
      // this.axios.get("../../data.json").then((response) => {
           
      //     if(response.status==401){

      //     }
      //     if(response.status==200){
      //         console.log(response)
      //     }else{
      //       console.log(response.statusText)
      //     }
    
      //   },(err) => {

      //     console.log(err)
      //   })
      
    }
    
  }
}

</script>
<style scoped>
.weui-content{
  margin-top: 8px;
}
</style>
