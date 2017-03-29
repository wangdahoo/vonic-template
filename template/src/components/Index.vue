<template>
  <div class="page has-navbar" v-nav="{ title: 'Home' }">
    <div class="page-content text-center">
      <h2 class="padding" v-text="msg"></h2>

      <router-link class="button button-assertive" to="/about">
        <i class="ion-information-circled"></i> About
      </router-link>

      <div style="height: 40px;"></div>

      <swiper ref="swiper" 
        direction="horizontal" 
        width="100%" 
        height="150" 
        pager-color="#ea5a49" 
        pager-bg-color="#fff"
        hide-pager="false"
      >
        <swiper-item style="background: #0a9dc7;">
          <h3>Keep Hungry</h3>
        </swiper-item>

        <swiper-item style="background: #44cc00;">
          <h3>Keep Foolish</h3>
        </swiper-item>

        <swiper-item style="background: #ffc900;">
          <h3>..</h3>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'Hello! Vonic.'
      }
    }
  }
</script>
<style>
  h2 {
    font-family: Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif;
    color: #888;
  }

  h3 {
    font-family: Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif;
    line-height: 150px;
    color: #fff;
  }

  .page.has-navbar .page-content {
    padding-top: 100px;
  }
</style>
