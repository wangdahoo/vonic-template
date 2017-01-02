<template>
  <div class="page has-navbar" v-nav="{ title: 'Home' }">
    <div class="page-content text-center">
      <p class="padding">{{ msg }}</p>

      <a class="button button-assertive" v-link="{path: '/about'}">
        about
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Hello Vonic!'
    }
  }
}
</script>
