<template>
  <div id="classify">
    <headnav>
      <div class="wy-header-title" slot="title">分类页</div>
    </headnav>

    <!-- 主体左 -->
    <aside>
      <div class="menu-left scrollbar-none">
        <ul v-for="(k, index) in navleft" :key="k.index" >
          <li :class="{'active':index==currentindex}" @click="currentindex=index">{{ k.name }}</li>
          <!-- <router-link tag="li" v-for="k in navleft" :key="k.id" :to="{ name:'clifycon', query:{itemid:k.itemid}}">酒水食品</router-link> -->
          <!-- <router-link v-for="(k, index) in navleft" tag="li" :key="k.index" :to="{path: '/clifycon'}">{{ k.name }}</router-link> -->
         
        </ul>
      </div>
    </aside>
    <!-- 主体右 -->
    <!-- <clifycon></clifycon> -->
    <!-- <router-view></router-view> -->
    <section class="menu-right padding-all j-content">
      <h5>{{ this.$route.query.itemid}}</h5>
     
      <ul>
        <li class="w-2"><a href="pro_list.html"></a> <img src="upload/pro3.jpg"><span>酒水食品</span><p>￥19.00</p></li>
        <li class="w-2"><a href="pro_list.html"></a> <img src="upload/pro3.jpg"><span>酒水食品</span><p>￥19.00</p></li>
        <li class="w-2"><a href="pro_list.html"></a> <img src="upload/pro3.jpg"><span>酒水食品</span><p>￥19.00</p></li>
        <li class="w-2"><a href="pro_list.html"></a> <img src="upload/pro3.jpg"><span>酒水食品</span><p>￥19.00</p></li>
        <li class="w-2"><a href="pro_list.html"></a> <img src="upload/pro3.jpg"><span>酒水食品</span><p>￥19.00</p></li>
        <li class="w-2"><a href="pro_list.html"></a> <img src="upload/pro3.jpg"><span>酒水食品</span><p>￥19.00</p></li>

 
      </ul>
      <h5>酒水食品</h5>
     
    </section>

    <Footvue ></Footvue>
  </div>
</template>
<script>
import headnav from '../components/head-nav';
import Footvue from '../components/foot';




export default {
  name: 'app',
  components:{
    headnav,
    Footvue,
  },
   data(){
    return {
      currentindex:0,
      navleft:[{
        name:'酒',
        itemid:'jiu'
      },
      {
        name:'水',
        itemid:'shui'
      },
      {
        name:'菜',
        itemid:'cai'
      }
      ]
    }
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
       // var apix="http://w.wanshangtang.com/home/index/new_indexpage";
      // me.axios.get(apix).then((response) => {
           
      //     if(response.status==401){

      //     }
      //     if(response.status==200){
      //         console.log(response)
      //     }else{
      //       console.log(response.statusText)
      //     }
    
      //   },(err) => {
      //     console.log(22),
      //     console.log(err)
      //   })
      
    }
    
  }
}
</script>
<style scoped>
.menu-left ul .router-link-exact-active{
    background: #fff;
    position: relative;
}
.menu-left ul .router-link-exact-active:before {
    content: " ";
    position: absolute;
    display: block;
    width: 2px;
    height: 100%;
    background: #fb671b;
    top: 0;
    left: 0;
}
.headnav{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
}
.menu-right ul li img {
    width: 100%;
    min-height: 100px;
    height: auto;
}
</style>



