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
        <el-card style="height: 280px">
          <!-- 折线图 -->
          <div ref="echarts1" style="height: 280px"></div>
        </el-card>
        <div class="graph">
          <el-card style="height: 260px"></el-card>
          <el-card style="height: 260px"></el-card>
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
      }
    },
    mounted() {
      getData().then(({ data }) => {
        const { tableData } = data.data
        this.tableData = tableData

        // 基于准备好的dom，初始化echarts实例
        const echarts1 = echarts.init(this.$refs.echarts1)
        // 指定图表的配置项和数据
        const echarts1Option = {}
        // 处理数据xAxis
        const { orderData } = data.data
        console.log(orderData);
        const xAxis = Object.keys(orderData.date[0])
        const xAxisData = {
          data: xAxis,
        }
        echarts1Option.xAxis = xAxisData
        echarts1Option.yAxis = {}
        echarts1Option.legend = xAxisData
        echarts1Option.series=[]
        xAxis.forEach((key) => {
          echarts1Option.series.push({
            name: key,
            data: orderData.date.map((item) => item[key]),
            type: 'line',
          })
        })
        echarts1.setOption(echarts1Option)
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

  .graph {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .el-card {
      width: 48%;
    }
  }
</style>
