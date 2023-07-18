<template>
  <div class="tabs">
    <el-tag
      v-for="(item, index) in tags"
      :key="item.path"
      :closable="item.name !== 'home'"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
      @click="changeMenu(item)"
      v-on:click="handelClose(item, index)"
      size="small"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'Tag',
    computed: {
      ...mapState({
        tags: (state) => state.tab.tabsList,
      }),
    },
    methods: {
      ...mapMutations(['closeTag']),
      // 切换tag
      changeMenu(item) {
        this.$router.push({ name: item.name })
      },
      // 删除tag
      handelClose(item, index) {
        console.log(item)
        this.closeTag(item)
        const length = this.tags.length - 1

        if (item.name === 'home') {
          this.$router.push({
            name: 'home',
          })
        }

        // 删除之后的跳转逻辑
        if (item.name !== this.$route.name) {
          return
        }
        if (index === length) {
          // 表示删除的是最后一项
          this.$router.push({
            name: this.tags[index - 1].name,
          })
        } else {
          // 表示删除的是中间一项
          this.$router.push({
            // name: this.tags[index].name,
          })
        }
      },
    },
  }
</script>

<style lang="less" scoped>
  .tabs {
    // margin-top: 20px;
    margin: 5px;
    .el-tag {
      margin-right: 15px;
      cursor: pointer;
    }
  }
</style>
