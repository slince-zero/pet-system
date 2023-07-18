<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <CommonAsideVue />
      </el-aside>
      <el-container>
        <el-header>
          <CommonHeaderVue />
        </el-header>
        <CommonTag/>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import CommonAsideVue from '@/components/CommonAside'
  import CommonHeaderVue from '@/components/CommonHeader'
  import CommonTag from '@/components/CommonTag'
  export default {
    name: 'Main',
    components: {
      CommonAsideVue,
      CommonHeaderVue,
      CommonTag,
    },
  }
</script>

<style>
  .el-header {
    padding: 0;
  }
</style>
