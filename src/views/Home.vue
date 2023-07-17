<template>
  <div>
    <el-row>
      <el-col :span="8" style="padding-right: 10px">
        <!-- 头像显示 -->
        <el-card class="box-card">
          <div class="user">
            <img src="../assets/g1.jpeg" alt="" />
            <div class="user-info">
              <p class="name">铲屎官～</p>
              <p class="access">super管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>最后铲屎时间:<span>2023-1-1</span></p>
            <p>最后复活地点:<span>M78星云</span></p>
          </div>
        </el-card>

        <!-- 宠物信息显示 -->
        <el-card style="margin-top: 20px; height: 420px">
          <el-table :data="tableData" stripe style="width: 100%">
            <!-- <el-table-column prop="date" label="日期"> </el-table-column>
            <el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column> -->
            <!-- 多写一遍这个的:key="key" 原因是开启了eslint，不然代码会报错-->
            <el-table-column
              v-for="(val, key) in tableLabel"
              :label="val"
              :key="key"
              :prop="key"
            ></el-table-column>
          </el-table>
        </el-card>
      </el-col>

      <el-col :span="16" style="padding-left: 10px">
        <div class="num">
          <el-card
            v-for="item in countData"
            :key="item.name"
            :body-style="{ display: 'flex', padding: 0 }"
          >
            <i
              class="icon"
              :class="`el-icon-${item.icon}`"
              :style="{ background: item.color }"
            ></i>
            <div class="detail">
              <p class="price">{{ item.value }}</p>
              <p class="desc">{{ item.name }}</p>
            </div>
          </el-card>
        </div>
        <el-card style="height: 280px">
          <!-- 折线图 -->
          <div ref="echarts1" style="height: 280px"></div>
        </el-card>
        <div class="graph">
          <el-card style="height: 260px">
            <!-- 柱状图 -->
            <div ref="echarts2" style="height: 260px"></div>
          </el-card>
          <el-card style="height: 260px">
            <!-- 饼状图 -->
            <div ref="echarts3" style="height: 240px"></div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { getData } from '../api'
  import * as echarts from 'echarts'
  export default {
    name: 'Home',
    data() {
      return {
        tableData: [],
        tableLabel: {
          date: '日期',
          name: '猫名',
          address: '地址',
        },
        countData: [
          {
            name: '今日撸猫次数',
            value: 12,
            icon: 'success',
            color: '#2ec7c9',
          },
          {
            name: '今日吸猫次数',
            value: 22,
            icon: 'success',
            color: '#a1a4d4',
          },
          {
            name: '今日rua猫次数',
            value: 23,
            icon: 'success',
            color: '#3478c6',
          },
          {
            name: '今日洗澡次数',
            value: 34,
            icon: 'success',
            color: '#3d7690',
          },
          {
            name: '今日吹风次数',
            value: 5,
            icon: 'success',
            color: '#6d5218',
          },
          {
            name: '今日晒晒次数',
            value: 6,
            icon: 'success',
            color: '#b3c891',
          },
        ],
      }
    },
    mounted() {
      getData().then(({ data }) => {
        const { tableData } = data.data
        this.tableData = tableData

        // 折线图
        // 基于准备好的dom，初始化echarts实例
        const echarts1 = echarts.init(this.$refs.echarts1)
        // 指定图表的配置项和数据
        const echarts1Option = {}
        // 处理数据xAxis
        const { orderData, userData, videoData } = data.data
        const xAxis = Object.keys(orderData.data[0])
        const xAxisData = {
          data: xAxis,
        }
        echarts1Option.xAxis = xAxisData
        echarts1Option.yAxis = {}
        echarts1Option.legend = xAxisData
        echarts1Option.series = []
        xAxis.forEach((key) => {
          echarts1Option.series.push({
            name: key,
            data: orderData.data.map((item) => item[key]),
            type: 'line',
          })
        })
        echarts1.setOption(echarts1Option)

        // 柱状图
        const echarts2 = echarts.init(this.$refs.echarts2)
        const echarts2Option = {
          legend: {
            // 图例文字颜色
            textStyle: {
              color: '#333',
            },
          },
          grid: {
            left: '20%',
          },
          // 提示框
          tooltip: {
            trigger: 'axis',
          },
          xAxis: {
            type: 'category',
            data: userData.map((item) => item.date),
            axisLine: {
              lineStyle: {
                color: '#17b3a3',
              },
            },
          },
          yAxis: [
            {
              type: 'value',
              axisLine: {
                lineStyle: {
                  color: '#17b3a3',
                },
              },
            },
          ],
          color: ['#2ec7c9', '#b6a2de'],
          series: [
            {
              name: '新来的🐱',
              data: userData.map((item) => item.new),
              type: 'bar',
            },
            {
              name: '活跃的🐱',
              data: userData.map((item) => item.active),
              type: 'bar',
            },
          ],
        }
        echarts2.setOption(echarts2Option)

        // 饼状图
        const echarts3 = echarts.init(this.$refs.echarts3)
        const echarts3Option = {
          tooltip: {
            trigger: 'item',
          },
          color: [
            '#0f78f4',
            '#dd536b',
            '#9462e5',
            '#ce4548',
            '#e1bb22',
            '#39c362',
            '#3ed1cf',
          ],
          series: [
            {
              data: videoData,
              type: 'pie',
            },
          ],
        }
        echarts3.setOption(echarts3Option)
      })
    },
  }
</script>

<style lang="less" scoped>
  .user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    img {
      margin-right: 40px;
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
    .user-info {
      .name {
        font-size: 32px;
        margin-bottom: 10px;
      }
      .access {
        color: grey;
      }
    }
  }

  .login-info {
    align-items: center;
    p {
      line-height: 28px;
      font-size: 14px;
      color: #999;
      span {
        color: #999;
        margin-left: 60px;
      }
    }
  }

  .num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .icon {
      width: 80px;
      height: 80px;
      font-size: 30px;
      text-align: center;
      line-height: 80px;
      color: #fff;
    }
    .detail {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .price {
        font-size: 30px;
        margin-bottom: 10px;
        line-height: 30px;
        height: 30px;
      }
      .desc {
        font-size: 14px;
        color: #999;
        text-align: center;
      }
    }
    .el-card {
      width: 32%;
      margin-bottom: 10px;
    }
  }

  .graph {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    .el-card {
      width: 48%;
    }
  }
</style>
