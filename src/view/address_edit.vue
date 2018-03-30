<template>
  <div class="pro_info">
    <headnav>
      <div class="wy-header-title" slot="title">编辑地址</div>
    </headnav>


    <div class="weui-content">
      <div class="weui-cells weui-cells_form wy-address-edit">
        <textinp >
          <div slot="title">132123</div>
          <div slot="inputs">222222222</div>
          <div slot="fotd" :text="true"></div>
        </textinp>
        <div class="weui-cell">
          <div class="weui-cell__hd"><label class="weui-label wy-lab">收货人</label></div>
          <div class="weui-cell__bd"><input class="weui-input" type="text"  :value="ress.name"></div>
        </div>

        <div class="weui-cell">
          <div class="weui-cell__hd"><label class="weui-label wy-lab">手机号</label></div>
          <div class="weui-cell__bd"><input class="weui-input" type="number" pattern="[0-9]*" placeholder="18951263540" :value="ress.phone"></div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd"><label for="name" class="weui-label wy-lab">所在地区</label></div>
          <div class="weui-cell__bd"><input class="weui-input" id="address" type="text" :value=" ress.province + ress.dist + ress.city" readonly="" data-code="420106" data-codes="420000,420100,420106">
          
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd"><label class="weui-label wy-lab">详细地址</label></div>
          <div class="weui-cell__bd">
            <textarea class="weui-textarea" :placeholder="ress.street" :value="ress.street"></textarea>
          </div>
        </div>
        <div class="weui-cell weui-cell_switch">
          <div class="weui-cell__bd">设为默认地址</div>
          <div class="weui-cell__ft"><input class="weui-switch" type="checkbox" :checked="ress.status" @click="ress.status=!ress.status"></div>
        </div>
      </div> 
      <div class="weui-btn-area">
        <a class="weui-btn weui-btn_primary" href="javascript:" id="showTooltips">保存此地址</a>
        <a href="javascript:;" class="weui-btn weui-btn_warn">删除此地址</a>
      </div>

    </div>

    <div class="citiesLinkage">
      <select class="provinces" v-model="province"><option v-for="(item,key) in provincesName" :value="key">{{item}}</option></select><select class="citys" v-model="city"><option v-for="(item,key) in citysName" :value="key">{{item}}</option></select><select class="countys" v-model="county"><option v-for="(item,key) in countysName" :value="key">{{item}}</option></select>
  </div>

  </div>
</template>
<script >
import headnav from '../components/head-nav';
import textinp from '../components/textinp';
import data from '../../data.json';
import { addrobj, addrname } from '../../addr.js'



export default {
  name: 'app',
  components:{
    headnav,
    textinp

  },
  data () {
    return {
      province:10,
      city:20,
      county:31,

      ress: []
    }
  },
  created () {
    
      this.ress = data.address.datas[0];


    },
  computed:{
         provincesName:function(){
             var provinceName={};
             for(var i in addrobj){
                  provinceName[i]=addrname[i];
             }
             return provinceName
         },
         citysName:function(){
             var cityName={};
             for(var i in addrobj[this.province]){
                 cityName[i]=addrname[i]
             }
             return cityName
         },
         countysName:function(){
             var countyName={};
             for(var i in addrobj[this.province][this.city]){
                 var county=addrobj[this.province][this.city][i];
                 countyName[county]=addrname[county]
             }
             return countyName
         },
    },
    watch:{
        'province':function(n,o){
            if(n!=o) this.city=Object.getOwnPropertyNames(this.citysName)[0];
        },
        'city':function(n,o){
            if(n!=o) this.county=Object.getOwnPropertyNames(this.countysName)[0];
        }
    }
}
</script>