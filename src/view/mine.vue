<template>
  <div class="pro_info">
    <header class="wy-header">
        <div class="wy-header-icon-back"  @click="$router.go(-1)"><span class="ion-chevron-left"></span></div>
        <div class="wy-header-title">个人中心</div>
        <router-link to="dataset" class="wy-header-right" ><span class="ion-chevron-left"></span></router-link>
    </header>


<div class='weui-content'>
  <div class="wy-center-top">
    <div class="weui-media-box weui-media-box_appmsg">
      
      <div class="weui-media-box__bd t-c">
        <!-- 修改头像 -->
        <transition name="slide">
          <div class="head-field" v-show="appear">
            <span class="head-field-pic">
              <span class="img-hover" @click.stop="uploadHeadImg">
                  <img class="touxian" src="../../static/images/touxian.png" alt="">
                
                  <h4 class="weui-media-box__title user-name">飞翔的小土豆</h4>
                </span>
              </span>
          </div>
        </transition>
        <input type="file" accept="image/*"  @change="handleFile" class="hiddenInput" />


        
        
    
      </div>
    </div>

  </div>
  <div class="weui-panel weui-panel_access">
     


    <div class="weui-panel__hd">
      <a href="all_orders.html" class="weui-cell weui-cell_access center-alloder">
        <div class="weui-cell__bd wy-cell">
          
          <div class="weui-cell__bd weui-cell_primary"><p class="center-list-txt">查看订单</p></div>
        </div>
        <span class="weui-cell__ft"></span>
      </a>   
    </div>
    <div class="weui-panel__bd">
      <div class="weui-flex">

        <!-- 循环 -->
        <div class="weui-flex__item" v-for="k in allorders" :key="k.id" >
            <router-link  tag="a" :to="{ path: k.path }" class="center-ordersModule">
                <span class="weui-badge" style="position: absolute;top:5px;right:10px; font-size:10px;">{{k.newsnum}}</span>
                <div class="imgicon"><img :src="k.classimg"  /></div>
                <div class="name">{{k.name}}</div>
            </router-link>
            
        </div> 


       
      </div>
    </div>
  </div>

  
  
  <div class="weui-panel">
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_small-appmsg">
            <div class="weui-cells">
              <!-- 循环 -->
              <router-link class="weui-cell weui-cell_access" tag="a" v-for="k in mepenl" :key="k.id" :to="{ path: k.path }">
                  <div class="weui-cell__bd weui-cell_primary">
                    <p class="center-list-txt">{{k.name}}</p>
                  </div>
                  <span class="weui-cell__ft"></span>
              </router-link>
              
          
            </div>
          </div>
        </div>
  </div>

  <div class="weui-panel">
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_small-appmsg">
            <div class="weui-cells">
              <!-- 循环 -->
              <router-link class="weui-cell weui-cell_access" tag="a" v-for="k in mepenltwo" :key="k.id" :to="{ path: k.path }">
                  <div class="weui-cell__bd weui-cell_primary">
                    <p class="center-list-txt">{{k.name}}</p>
                  </div>
                  <span class="weui-cell__ft"></span>
              </router-link>
              
          
            </div>
          </div>
        </div>
  </div>
  
  
  
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
  },
   data () {
    return {
      appear: false,  // 控制进场
      mepenl: [
        {
            name: '我的收藏',
            path: 'shoucang',
        },
        {
            name: '优惠券',
            path: 'classify',
        },
        {
            name: '地址管理',
            path: 'address_list',
        },
        {
            name: '绑定手机',
            path: 'addtel',
        },
      ],
      mepenltwo: [
        {
            name: '申请分销',
            path: 'shoucang',
        },
        {
            name: '申请店面入驻',
            path: 'classify',
        },
        {
            name: '关于我们',
            path: 'address_list',
        },
      
      ],
      allorders:[
        {
            name: '待付款',
            path: 'all_orders',
            classimg:'../../static/images/dindan1.png',
            newsnum:'1'
            
        },
        {
            name: '待发货',
            path: 'all_orders',
            classimg:'../../static/images/dindan2.png',
            newsnum:'1'
        },
        {
            name: '待收货',
            path: 'all_orders',
            classimg:'../../static/images/dindan3.png',
            newsnum:'1'
        },
        {
            name: '待评价',
            path: 'all_orders',
            classimg:'../../static/images/dindan4.png',
            newsnum:'1'
        },
        {
            name: '售后/退换',
            path: 'all_orders',
            classimg:'../../static/images/dindan5.png',
            newsnum:'1'
        },
      
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.appear = true
    })
  },  
 methods: {
    handleFile (e) {
      this.$bus.$emit('loading')
      let $target = e.target || e.srcElement
      let file = $target.files[0]
      var reader = new FileReader()
      reader.onload = (data) => {
        let res = data.target || data.srcElement
        let img = new Image()
        img.onload = () => {
          // 回调更新父组件数据
          this.saveImg(res.result).then(() => {
            // 本地实在太快了，为了让你们看到loading效果, 加个延时
            setTimeout(() => {
              this.$bus.$emit('unload')
              this.$emit('update-userinfo', {headUrl: res.result})
            }, 1500)
          })
        }
        img.src = res.result
      }
      reader.readAsDataURL(file)
    },
    // 打开图片上传
    uploadHeadImg () {
      this.$el.querySelector('.hiddenInput').click()
    },
    // 保存上传图片
    saveImg (dataUrl) {
      return this.$axios.get('./static/api.json')
        .then((data) => {
          localStorage.setItem('headImg', dataUrl)
        })
        .catch((data) => {
          console.log(data)
          this.$bus.$emit('unload')
        })
    }
  }
}
</script>
<style scoped>
.slide-enter-active,
    .slide-leave-active {
      transform: translateY(0);
      transition: transform 1s;
    }
    .slide-enter,
    .slide-leave-to/* .fade-leave-active in below version 2.1.8 */
    {
      transform: translateY(-50px);
    }

 .touxian{
   width: 100px;
   height: 100px;
   margin: 10px
 }
 /* 隐藏的输入框 */
    .hiddenInput {
      opacity: 0;
      position: absolute;
    }
</style>
