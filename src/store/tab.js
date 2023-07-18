// 定义左侧菜单栏的一个状态，是否是折叠状态

export default {
  state: {
    isCollapse: false, //定义菜单是折叠状态还是展开状态
    // 面包屑初始数据
    tabsList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 's-home',
        url: 'Home/Home'
      }
    ]
  },
  mutations: {
    // 定义修改菜单状态的方法
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    // 更新面包屑数据
    selectMenu(state, val) {
      // 判断添加的数据是否是首页，如果不是，添加
      if (val.name !== 'home') {
        const index = state.tabsList.findIndex(item => item.name === val.name)
        if (index === -1) {
          state.tabsList.push(val)
        }
      }
    }
  },
}
