// 定义左侧菜单栏的一个状态，是否是折叠状态

export default {
  state: {
    isCollapse: false, //定义菜单是折叠状态还是展开状态
  },
  mutations: {
    // 定义修改菜单状态的方法
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
  },
}
