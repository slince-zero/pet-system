<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <CommonAsideVue />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import CommonAsideVue from '@/components/CommonAside'
  export default {
    name: 'Main',
    components: {
      CommonAsideVue,
    },
  }
</script>

<style></style>
