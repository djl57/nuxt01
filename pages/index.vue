<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu></m-menu>
      </el-col>
      <el-col :span="19">
        <m-life></m-life>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-article></m-article>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MMenu from "@/components/index/menu.vue"
import MLife from "@/components/index/life.vue"
import MArtistic from "@/components/index/artistic.vue"

export default {
  components: {
    MMenu,
    MLife,
    MArtistic
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/index/index.scss";
</style>
