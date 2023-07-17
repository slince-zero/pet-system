<template>
  <div>
    <el-row>
      <el-col :span="8">
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
      <el-col :span="16">
        <!-- 右侧宠物订单 -->
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        tableData: [
          {
            date: '2016-05-02',
            name: '橘猫',
            address: '北京市第二大街333号',
          },
          {
            date: '2016-05-04',
            name: '狸花猫',
            address: '北京市第二大街333号',
          },
          {
            date: '2016-05-01',
            name: '牛奶猫',
            address: '北京市第二大街333号',
          },
          {
            date: '2016-05-03',
            name: '蓝猫',
            address: '北京市第二大街333号',
          },
          {
            date: '2016-05-03',
            name: '红猫',
            address: '北京市第二大街333号',
          },
        ],
        tableLabel: {
          date: '日期',
          name: '猫名',
          address: '地址',
        },
        countData: [
          {
            name: '今日支付订单',
            value: 1234,
            icon: 'success',
            color: '#2ec7c9',
          },
          {
            name: '今日支付订单',
            value: 1234,
            icon: 'success',
            color: '#2ec7c9',
          },
          {
            name: '今日支付订单',
            value: 1234,
            icon: 'success',
            color: '#2ec7c9',
          },
          {
            name: '今日支付订单',
            value: 1234,
            icon: 'success',
            color: '#2ec7c9',
          },
          {
            name: '今日支付订单',
            value: 1234,
            icon: 'success',
            color: '#2ec7c9',
          },
          {
            name: '今日支付订单',
            value: 1234,
            icon: 'success',
            color: '#2ec7c9',
          },
        ],
      }
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
      margin-bottom: 20px;
    }
  }
</style>
