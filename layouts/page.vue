<template>
  <div class="content">
    <topbar/>

    <div class="page">
      <slot/>
    </div>

    <bottombar/>
  </div>
</template>

<script>
  import Topbar from '~/components/index/Topbar'
  import Slider from '~/components/index/Slider'
  import Bottombar from '~/components/index/Bottombar'
  import InfoBlock from '~/components/index/InfoBlock'
  export default {
    name: 'page',
    components: { InfoBlock, Bottombar, Topbar, Slider },
  }
</script>

<style scoped>

</style>
