<template>

  <div class="page landing">
    {{msg}} works!
  </div>

</template>

<script>

  export default {

    name: 'LandingPage',

    inheritAttrs: false,

    data(){

      return {

        msg: 'LandingPage'

      }

    }

  }

</script>