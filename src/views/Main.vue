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
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAsideVue from "@/components/CommonAside";
import CommonHeaderVue from "@/components/CommonHeader";
export default {
  name: "Main",
  components: {
    CommonAsideVue,
    CommonHeaderVue,
  },
};
</script>

<style>
.el-header {
  padding: 0;
}
</style>
