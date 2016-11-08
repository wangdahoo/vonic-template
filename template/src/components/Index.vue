<template>
  <div class="page has-navbar" v-nav="{title: '首页', showBackButton: false}">
    <div class="page-content">
      <p>{{ msg }}</p>

      <a v-link="{path: '/about'}">
        about
      </a>
    </div>
  </div>
</template>

<style lang='scss' scoped>
  .page-content {
    p {
      padding: 50px 0 10px 0;
      text-align: center;
      font-size: 18px;
    }

    a {
      text-align: center;
      display: block;
    }
  }
</style>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vonic!'
    }
  }
}
</script>