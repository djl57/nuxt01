<template>
  <el-row :gutter="0" class="m-header">
    <el-col :span="6">
      <m-geo></m-geo>
    </el-col>
    <el-col :span="4">
      <m-user></m-user>
    </el-col>
    <el-col :span="14">
      <m-nav></m-nav>
    </el-col>
  </el-row>
</template>

<script>
import MGeo from './geo'
import MUser from './user'
import MNav from './nav'
export default {
  name: 'mheader',
  components: {
    MGeo,
    MUser,
    MNav
  }
}
</script>
