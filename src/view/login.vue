<template>
  <div class="login">
        <div class="login-box">
            <div class="lg-title">欢迎登陆商城</div>
            <div class="login-form">
                <form action="#">
                    <div class="login-user-name common-div">
                        <span class="eamil-icon common-icon">
                            <img src="../../static/images/eamil.png" />
                        </span>
                        <input type="email" name="username" v-model="mobile" placeholder="请输入您的手机号" />        
                    </div>
                    <div class="login-user-pasw common-div">
                        <span class="pasw-icon common-icon">
                            <img src="../../static/images/password.png" />
                        </span>
                        <input type="password" name="password" v-model="password" placeholder="请输入您的密码" />        
                    </div>
                    <a href="javascript:;" class="login-btn common-div" @click='logins'>登陆</a>
                    <router-link to="regist" class="login-oth-btn common-div">免费注册</router-link>
                    <router-link to="regist" class="fr dede">忘记密码？</router-link>
                </form>
            </div>
       
        </div>
  </div>
</template>
<script>

export default {
  name: 'login',
  components:{

  },
   data(){
    return {
        mobile:'',
        tanzhengma:'',
        password:'',
      
    }
  },

  mounted () {
    // 事例中只加载一次，一般用作数据请求

    this.$nextTick(function (){
      
      // 数据加载完后可执行事件

    })
    
  },
  computed: {
    // computed计算属性的方式在用属性时一般直接返回数据
  },
  methods: {
    // 每次进入页面都执行
    
    logins:function(){
       var me=this;
       // 请求数据
       
       if(me.mobile.length!=11){
            alert("请输入正确的手机号码!!")
            return
        }
        if(me.password.length<6){
            alert("密码不能少于6位！")
            return
        }
       var apix="http://shop.glxqw.cn/api.php/user/login";
       var params = new URLSearchParams();
        params.append('mobile', me.mobile);
        params.append('password', me.password);
        me.axios({
            method: 'post',
            url:apix,
            data:params
        }).then((res)=>{

          if(res.status == 401){
              alert("登陆过期！");
          }

          if(res.status == 200){
              alert("立即登录··");
              window.localStorage.setItem('usid', res.data.usid);
            //   window.localStorage.getItem('usid');
              console.log(window.localStorage.getItem('usid'))
              me.$router.push({ path: '/index'})
          }else{
            alert(res.data.result.msg);
          }
    
          },(err) => {
           console.log(err)
        
        })
     
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
}
</script>
<style scoped>
.login{
   background: #3a3a3a;
   height: 100%;
   position: fixed;
   width:100%;
}
.dede{
    color: #8b8b8b;
}

</style>

