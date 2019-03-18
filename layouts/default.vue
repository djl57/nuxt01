<template>
  <el-container class="layout-default">
    <el-header height="100%">
      <m-header></m-header>
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import MHeader from '@/components/base/header/index.vue'
export default {
  components: {
    MHeader
  }
}
</script>

<style lang="scss">
@import '@/assets/css/public/layout.scss';
</style>
