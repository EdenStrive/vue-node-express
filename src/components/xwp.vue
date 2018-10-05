<template>
  <div class="demo-4 loading">
  	<main>
        <div class="slideshow">
          <comment></comment>
          <div class="slides slides--images">
            <div class="slide slide--current">
              <div class="slide__img" style="background-image: url(static/img/1.jpg)"></div>
            </div>
            <div class="slide">
              <div class="slide__img" style="background-image: url(static/img/2.jpg)"></div>
            </div>
            <div class="slide">
              <div class="slide__img" style="background-image: url(static/img/3.jpg)"></div>
            </div>
            <div class="slide">
              <div class="slide__img" style="background-image: url(static/img/4.jpg)"></div>
            </div>
          </div>
          <div class="slides slides--titles">
            <div class="slide slide--current">
              <h2 class="slide__title">#XWP</h2>
            </div>
            <div class="slide">
              <h2 class="slide__title">#NODE</h2>
            </div>
            <div class="slide">
              <h2 class="slide__title">#VUE</h2>
            </div>
            <div class="slide">
              <h2 class="slide__title">#CZN</h2>
            </div>
          </div>
          <nav class="slidenav">
            <button class="slidenav__item slidenav__item--prev">Previous</button>
            <span>/</span>
            <button class="slidenav__item slidenav__item--next">Next</button>
          </nav>
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
      this.$ajax.get("http://localhost:3030/category")
      .then(res =>{
        console.log(res['data']);
        this.$store.state.category = res['data'];
      })
      .catch(error =>{
        console.log(error);
      })
    }
  }
</script>
<style>
</style>
