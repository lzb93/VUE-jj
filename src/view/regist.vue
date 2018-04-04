<template>
  <div class="regist">
    <div class="weui-content">
        <div class="weui-cells weui-cells_form wy-address-edit">
            <div class="weui-cell weui-cell_vcode">
            <div class="weui-cell__hd"><label class="weui-label wy-lab">手机号</label></div>
            <div class="weui-cell__bd"><input class="weui-input" type="tel" placeholder="请输入手机号" v-model="mobile"></div>
            <div class="weui-cell__ft"><button class="weui-vcode-btn">获取验证码</button></div>
            </div>
            <div class="weui-cell weui-cell_vcode"  style="height:44px">
            <div class="weui-cell__hd"><label class="weui-label wy-lab" >验证码</label></div>
            <div class="weui-cell__bd"><input class="weui-input" type="number" placeholder="请输入验证码" v-model="tanzhengma"></div>
            <!-- <div class="weui-cell__ft"><img class="weui-vcode-img" src="images/vcode.jpg"></div> -->
            </div>
            <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label wy-lab">设置密码</label></div>
            <div class="weui-cell__bd"><input class="weui-input" type="password"  placeholder="请输入新密码" v-model="password"></div>
            </div>
            <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label wy-lab">确认密码</label></div>
            <div class="weui-cell__bd"><input class="weui-input" type="password"  placeholder="请再次输入新密码" v-model="passwordtwo"></div>
            </div>
        </div>
        <!-- <label for="weuiAgree" class="weui-agree">
            <input id="weuiAgree" type="checkbox" class="weui-agree__checkbox" checked="checked">
            <span class="weui-agree__text">阅读并同意<a href="javascript:void(0);">《注册协议》</a></span>
        </label> -->
        <div class="weui-btn-area"><div class="weui-btn weui-btn_warn" @click="getdatamos">注册并登陆</div></div>
        <div class="weui-cells__tips t-c font-12">登陆账号为您输入的手机号码</div>
       
        
    </div>      
  </div>
</template>
<script>
export default {
  name: "regist",
  components: {},
  data() {
    return {
      mobile: "",
      tanzhengma: "",
      password: "",
      passwordtwo: ""
    };
  },

  mounted() {
    // 事例中只加载一次，一般用作数据请求

    this.$nextTick(function() {
      // 数据加载完后可执行事件
    });
  },
  computed: {
    // computed计算属性的方式在用属性时一般直接返回数据
  },
  methods: {
    // 每次进入页面都执行

    getdatamos: function() {
      if (this.mobile.length != 11) {
        alert("请输入正确的手机号码!!");
        return;
      }
      if (this.tanzhengma.length != 6) {
        alert("请输入正确的验证码!!");
        return;
      }
      if (this.password.length < 6) {
        alert("密码不能少于6位！");
        return;
      }
      if (this.passwordtwo.length != this.password.length) {
        alert("两次输入密码不一致");
        return;
      }
      var me = this;
      // 请求数据
      var apix = "http://shop.glxqw.cn/api.php/user/register";
      var params = new URLSearchParams();
      params.append("pid", "1"); //你要传给后台的参数值 key/value
      params.append("mobile", me.mobile);
      params.append("password", me.password);
      me.axios({
          method: "post",
          url: apix,
          data: params
     })
    .then(function (res) {
        console.log(res);
        if (res.status == 200) {
              console.log(res.data.result.code);
              alert("注册成功！立即登录··");
              me.$router.push({ path: "/login" });
            } else {
               alert(res.data.result.msg);
               console.log(res.data.result.code);
            }
    })
    .catch(function (error) {
        alert(error);
    });
       

      //   me.axios.get(apix).then((response) => {

      //       if(response.status==401){

      //       }
      //       if(response.status==200){
      //           console.log(response)
      //       }else{
      //         console.log(response.statusText)
      //       }

      //     },(err) => {
      //       console.log(22),
      //       console.log(err)
      //     })
    }
  }
};
</script>
<style scoped>
.login {
  background: black;
  height: 100%;
  position: fixed;
  width: 100%;
}
</style>