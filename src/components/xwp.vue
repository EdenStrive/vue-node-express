<template>
  <div class="demo-4 loading">
  	<main>
        <div class="slideshow">
          <comment></comment>
          <div class="slides slides--images">
            <div class="slide slide--current">
              <div class="slide__img" style="background-image: url(static/img/1.jpg)"></div>
            </div>
            <!-- <div class="slide">
              <div class="slide__img" style="background-image: url(static/img/2.jpg)"></div>
            </div>
            <div class="slide">
              <div class="slide__img" style="background-image: url(static/img/3.jpg)"></div>
            </div>
            <div class="slide">
              <div class="slide__img" style="background-image: url(static/img/4.jpg)"></div>
            </div> -->
          </div>
          <div class="slides slides--titles">
            <div class="slide slide--current">
              <h2 class="slide__title">#XWP</h2>
            </div>
            <!-- <div class="slide">
              <h2 class="slide__title">#NODE</h2>
            </div>
            <div class="slide">
              <h2 class="slide__title">#VUE</h2>
            </div>
            <div class="slide">
              <h2 class="slide__title">#CZN</h2>
            </div> -->
          </div>
          <nav class="slidenav">
            <button class="slidenav__item slidenav__item--prev" @click="denglu">Personal</button>
            <span>/</span>
            <button class="slidenav__item slidenav__item--next" @click="biji">Note</button>
          </nav>
        </div>
        <div class="back-color">
          <img src="static/img/head.jpg" alt="" class="tupian">
          <span class="ziti">Hi~我是Eden，欢迎来到我的学习与生活的地方(可点击导航中个人笔记)。记得给我留言哦~</span>
        </div>
		</main>
  </div>
</template>
<script>
// <router-link to="/home">go home</router-link>
  import qs from "qs"
  import comment from './comment'
  export default {
    name: 'xwp',
    components:{
      comment
    },
    created(){
    },
    methods:{
      biji(){
        this.$router.push('/article')
      },
      denglu(){
        this.$router.push('/login')
      }
    }
  }
</script>
<style>
.ziti{
  color: rgb(255, 255, 255);
  font-size: 120%;
  line-height: 200%;
  text-indent: 2px
}
.tupian{
  display:block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-left: 60px;
  margin-top: 20px;
}
.back-color{
  padding: 20px;
  position: fixed;
  width: 200px;
  height: 300px;
  background-color: rgb(0, 0, 0,0.5);
  right: 0px;
  top: 50px;
  border-radius: 20px
}
</style>
