<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
  >
    <h3>{{ isCollapse ? 'Pet' : 'Pet 系统管理系统' }}</h3>
    <el-menu-item
      v-for="item in noChildren"
      :key="item.name"
      :index="item.name"
      @click="clickMenu(item)"
    >
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      v-for="item in hasChildren"
      :key="item.label"
      :index="item.label"
    >
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <el-menu-item @click="clickMenu(subItem)" :index="subItem.path">
          {{ subItem.label }}
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    name: 'Aside',
    data() {
      return {
        menuData: [
          {
            path: '/',
            name: 'home',
            label: '首页',
            icon: 's-home',
            url: 'Home/Home',
          },
          {
            path: '/mail',
            name: 'mail',
            label: '商品管理',
            icon: 'video-play',
            url: 'MallManage/MallManage',
          },
          {
            path: '/user',
            name: 'user',
            label: '用户管理',
            icon: 'user',
            url: 'userManage/UserManage',
          },
          {
            label: '其他',
            icon: 'location',
            children: [
              {
                path: '/page1',
                name: 'page1',
                label: '页面1',
                icon: 'setting',
                url: 'Other/PageOne',
              },
              {
                path: '/page2',
                name: 'page2',
                label: '页面2',
                icon: 'setting',
                url: 'Other/PageTwo',
              },
            ],
          },
        ],
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      },
      clickMenu(item) {
        if (
          this.$route.path !== item.path &&
          !(this.$route.path === '/home' && item.path === '/')
        ) {
          this.$router.push(item.path)
        }
        this.$store.commit('selectMenu', item)
      },
    },
    computed: {
      // 为了遍历左侧菜单，需要区分出来有子菜单和没有子菜单的
      // 无子菜单
      noChildren() {
        return this.menuData.filter((item) => !item.children)
      },
      // 有子菜单
      hasChildren() {
        return this.menuData.filter((item) => item.children)
      },
      // 左侧菜单是否折叠
      isCollapse() {
        return this.$store.state.tab.isCollapse
      },
    },
  }
</script>

<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
    height: 100vh;
    border-right: none;
    h3 {
      color: #ffff;
      text-align: center;
      line-height: 48px;
      font-size: 16px;
    }
  }
</style>
