<template>
  <el-container class="layout-default">
    <el-header height="100%">
      <m-header></m-header>
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer height="100%">
      <m-footer></m-footer>
    </el-footer>
  </el-container>
</template>

<script>
import MHeader from '@/components/base/header/index.vue'
import MFooter from '@/components/base/footer/index.vue'
export default {
  components: {
    MHeader,
    MFooter
  }
}
</script>

<style lang="scss">
@import '@/assets/css/public/layout.scss';
</style>
