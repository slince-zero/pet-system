<template>
  <div class="header-container">
    <div class="l-content">
      <el-button
        @click="handleMenu"
        icon="el-icon-menu"
        size="mini"
        style="margin-right: 20px"
      ></el-button>
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in tags"
          :key="item.path"
          :to="{ path: item.path }"
          >{{ item.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <img class="user-image" src="../assets/g1.jpeg" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'Header',
    methods: {
      handleMenu() {
        this.$store.commit('collapseMenu')
      },
    },
    computed: {
      ...mapState({
        tags: (state) => state.tab.tabsList,
      }),
    },
    mounted() {
      // console.log(this.tags)
    },
  }
</script>

<style lang="less" scoped>
  .header-container {
    padding: 0 20px;
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .l-content {
      .text {
        color: aliceblue;
        font-size: 14px;
        margin-left: 10px;
      }
    }

    .r-content {
      .user-image {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }

    .l-content {
      display: flex;
      align-items: center;
      border-radius: 50%;
      /deep/.el-breadcrumb__item {
        .el-breadcrumb__inner {
          font-weight: normal;
          &.is-link {
            color: #666;
          }
        }
        &:last-child {
          .el-breadcrumb__inner {
            color: #fff;
          }
        }
      }
      
    }
  }
</style>
