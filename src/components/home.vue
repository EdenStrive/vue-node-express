<template>
<div>
	<nav class="navbar-default baise">
	<div class="nav-logo">
		<a href="###"><img src="img/logo.png" alt=""></a>
	</div>
	<div class="nav-menu">
		<span></span>
		<span></span>
		<span></span>
	</div>
  <a class="navbar-brand juzhongba"><router-link to="/xwp"><strong><i>Eden Strive</i></strong></router-link></a>
	<ul class="nav-list" v-if="role==='100'">
		<li>
			<a class="active">文章<div class="carect"></div></a>
			<ul class="menu">
				<li><a><router-link to="/admin">查看文章</router-link></a></li>
				<li><a><router-link to="/Release">发布文章</router-link></a></li>
			</ul>
		</li>
    <li><a><router-link to="/said">留言</router-link></a></li>
		<li><a><router-link to="/saidto">查看留言</router-link></a></li>
    <li><a><router-link to="/Inser">添加用户</router-link></a></li>
		<li><a v-on:click="logininfe">注销</a></li>
		<li><a><router-link to="/xwp">返回主页</router-link></a></li>
	</ul>

  <ul class="nav-list" v-else-if="role==='管理员'">
		<li>
			<a class="active">文章<div class="carect"></div></a>
			<ul class="menu">
				<li><a><router-link to="/admin">查看文章</router-link></a></li>
				<li><a><router-link to="/admin">发布文章</router-link></a></li>
			</ul>
		</li>
    <li><a><router-link to="/said">留言</router-link></a></li>
		<li><a><router-link to="/saidto">查看留言</router-link></a></li>
		<li><a v-on:click="logininfe">注销</a></li>
		<li><a><router-link to="/xwp">返回主页</router-link></a></li>
	</ul>

  <ul class="nav-list" v-else-if="role==='游客'">
    <li><a><router-link to="/said">留言</router-link></a></li>
		<li><a><router-link to="/saidto">查看留言</router-link></a></li>
		<li><a v-on:click="logininfe">注销</a></li>
		<li><a><router-link to="/xwp">返回主页</router-link></a></li>
	</ul>

</nav>
</div>
</template>

<script>
import {delcookie} from '@/main'

export default {
  name: 'home',
  data(){
  	return {
      role:''
  	}
  },
  created(){
        if (this.$Cookies.get('cookie')) {
					console.log("进入后台");
        }else{
			alert("你怕是想黑进我的后台吧,先去登录去");
          	setTimeout(() => {
               this.$router.push("/login")
          	},0);
      }
      var cookie = JSON.parse(this.$Cookies.get('cookie'));
      console.log(cookie);
      this.role = cookie['role'];
      console.log(this.role);
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
      setTimeout(()=>{
        this.$router.push("/xwp")
      },1000)
      }
    }
  },
  mounted(){
	  	$(document).click(function(){
      $('.nav-list').removeClass('open')
      })
      $('.nav-menu,.nav-list').click(function(e){e.stopPropagation()})
      $('nav').find('.nav-menu').click(function(e){
        $('.nav-list').toggleClass('open')
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@charset "UTF-8";
* {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
}
a{
  cursor: pointer;
}
body, html {
  height: 100%;
  overflow: hidden;
}
.juzhongba{
  height: 100%;
  line-height: 200%;
}
.admin-nav{
  line-height: 35px;
}
.container-fluid {
  width: 100%;
  padding-bottom: 10px;
}

.carect {
  position: relative;
  width: 0;
  height: 0;
  margin-left: 5px;
  margin-bottom: 2px;
  border-top: 6px solid;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-radius: 10px;
  display: inline-block;
}

/*
    导航组件
*/
nav {
  width: 100%;
  height: 60px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 0 2px 4px #ccc;
  box-shadow: 0 2px 4px #ccc;
  padding: 10px 0;
}
nav li, nav a {
  text-decoration: none;
  list-style: none;
}
nav .nav-logo {
  width: auto;
  height: 100%;
  margin-left: 20px;
  float: left;
}
nav .nav-logo a, nav .nav-logo li, nav .nav-logo ol, nav .nav-logo span, nav .nav-logo p {
  font-size: 30px;
  font-weight: bold;
  list-style: none;
  color: #1f79ec;
  text-decoration: none;
}
nav .nav-logo img {
  max-width: 100%;
  max-height: 100%;
}
nav ::-webkit-scrollbar {
  display: none;
}
nav .nav-list {
  /*nav-list*/
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  float: right;
  margin-right: 20px;
  z-index: 100;
}
@media (max-width: 1200px) {
  nav .nav-list {
    position: fixed;
    height: 100%;
    top: 0;
    padding-top: 10px;
    width: 60%;
    background: #fff;
    left: -60%;
    -webkit-transition: 1s;
    transition: 1s;
    -webkit-box-shadow: 3px 0px 10px #f0eded;
    box-shadow: 3px 0px 10px #f0eded;
  }
}
nav .nav-list > li {
  position: relative;
  list-style: none;
  float: left;
  text-align: center;
}
@media (max-width: 1200px) {
  nav .nav-list > li {
    width: 100%;
    margin: 0;
    overflow: hidden;
  }
  nav .nav-list > li {
    margin-bottom: 15px;
  }
}
nav .nav-list > li .active {
  color: #fff;
  background: #094fb7;
}
nav .nav-list > li a {
  color: #5a5c5f;
  display: inline-block;
  line-height: 32px;
  padding: 1px 15px;
  margin: 0 10px;
  font-size: 15px;
  border-radius: 5px;
  text-decoration: none;
}
@media (max-width: 1200px) {
  nav .nav-list > li a {
    width: 100%;
    border-radius: 0;
    margin: 0;
  }
}
nav .nav-list > li a:hover {
  color: #fff;
  background-color: #094fb7;
}
nav .nav-list > li .menu {
  min-width: 100px;
  background: #fff;
  -webkit-box-shadow: 0 2px 10px #ccc;
  box-shadow: 0 2px 10px #ccc;
  position: absolute;
  border-radius: 5px;
  white-space: nowrap;
  left: 0;
  height: 0;
  overflow: hidden;
  -webkit-transition: 1s;
  transition: 1s;
}
@media (max-width: 1200px) {
  nav .nav-list > li .menu {
    position: relative;
    width: 100%;
    text-align: center;
    border-radius: 0;
    -webkit-box-shadow: 0 -1px 7px #ccc inset;
    box-shadow: 0 -1px 7px #ccc inset;
  }
}
nav .nav-list > li .menu li a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0;
}
nav .nav-list > li:hover .menu {
  height: auto;
}
nav .nav-menu {
  display: none;
  z-index: 999;
  background: #fff;
  cursor: pointer;
}
@media (max-width: 1200px) {
  nav .nav-menu {
    display: block;
    float: right;
    padding: 8px 5px;
    position: relative;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 15px;
  }
  nav .nav-menu span {
    height: 2px;
    width: 25px;
    display: block;
    background: #CCC;
    border-radius: 10px;
  }
  nav .nav-menu span + span {
    margin-top: 6px;
  }
}
nav .open {
  left: 0%;
  overflow: auto;
}
.baise{
  background-color: rgb(255, 255, 255)
}

/*# sourceMappingURL=zd-1.0.css.map */

</style>
