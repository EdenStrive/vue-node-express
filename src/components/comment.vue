<template>
	<nav class="navbar navbar-default kongbai" role="navigation">
   <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" 
         data-target="#example-navbar-collapse">
         <span class="sr-only">切换导航</span>
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand"><router-link to="/xwp">￥邢文鹏</router-link></a>
   </div>
   <div class="collapse navbar-collapse nag-flex" id="example-navbar-collapse">
      <ul class="nav navbar-nav nav-p">
         <li><a href="#"><router-link to="/article">{{Onetitle}}</router-link></a></li>
         <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">{{Twotitle}}<b class="caret"></b>
            </a>
            <ul class="dropdown-menu nav-w">
               <li v-for="(arr,index) in Childs" :key="index"><a href="#">{{arr}}</a></li>
            </ul>
          </li>
      </ul>
      <ul class="nav navbar-nav nav-rr navbar-right" v-if="wel">
          <li><a>欢迎:{{wel}}</a></li>
          <li><a><router-link to="/admin">进入后台</router-link></a></li>
          <li class="nav-rr navbar-right"><button v-on:click="logininfe" type="button" class="btn btn-default navbar-btn button-r">退出登录</button></li>
      </ul>
      <ul class="nav navbar-nav navbar-right nav-rr" v-else>
          <li class="nav-rr"><button type="button" class="btn btn-default navbar-btn button-r"><a><router-link to="/login">登录</router-link></a></button></li>
          <li class="nav-rr navbar-right"><button type="button" class="btn btn-default navbar-btn button-r"><router-link to="/sign">注册</router-link></button></li>
      </ul>
   </div>
   </nav>
</template>
<script>
import {delcookie} from '@/main'
export default {
  name: 'comment',
  data:()=>{
      // var res =  this.$store.state.nav;
      // console.log(res);
      return{
        Onetitle:'',
        Twotitle:'',
        Childs:'',
        wel:'',
        roles:''
    }
  },
  created(){
      var navbar;
      var nav = new Array();
      var navChild = new Array();
      if (this.$Cookies.get('cookie')!=null) {
          var cookie = this.$Cookies.get('cookie');
          var jsObject = JSON.parse(cookie);//将cookie里面的值转换成json的格式
          console.log(jsObject);
          if (jsObject['name']==null) {
            this.wel = jsObject['user_id'];
          } else {
            this.wel = jsObject['name'];
          }
          this.roles = jsObject['role'];
      }
      this.$ajax.get("http://localhost:3030/nav")
      .then(res =>{
        this.$store.state.nav=res["data"];
        // console.log(this.$store.state.nav);//）共同点： 能够修改state里的变量，并且是响应式的（能触发视图更新）2）不同点：若将vue创建 store 的时候传入 strict: true, 开启严格模式，那么任何修改state的操作，只要不经过mutation的函数，
        navbar = this.$store.state.nav;
        for (var index = 0; index < navbar.length; index++) {
            if (navbar[index]['pid']==0) {
              nav[index]=navbar[index]['name']
            }
        }
        var guanlian = navbar[1]['id'];
        var xwp = 0;
        for (let inde = 0; inde < navbar.length; inde++) {
            if (navbar[inde]['pid']==guanlian) {
              navChild[xwp++]=navbar[inde]['name']
            }
        }
        this.Onetitle=nav[0];
        this.Twotitle= nav[1];
        this.Childs = navChild;
        console.log(this.Childs);
        console.log(nav);
      })
      .catch(error => {
        console.log(error);
      })
  },
  methods:{
    logininfe:function(){
      console.log('退出登录');
      delcookie();
      if (delcookie()) {
      this.$message({
        showClose:true,
        message:'退出失败，登录时效已过',
        type:'error',
        duration:2000,
        customClass:'message-type'
      })
      } else {
      this.$message({
        showClose:true,
        message:'退出成功',
        type:'success',
        duration:2000,
        customClass:'message-type'
      })
      this.wel = null;
      }
    }
  }
}
</script>
<style scoped>
  a:hover {
    color:#4499EE;
    text-decoration:none; /*CSS下划线效果：无下划线*/
  }
  .nav-p{
    position: relative;
    padding-left: 40px;
  }
  .kongbai{
    margin-bottom: 0;
  }
  .button-r{
    margin-right: 5px;
  }
  .nav-rr{
    margin-right: 10px;
  }
</style>
