<template>
  <div class="login-container">
    <el-form
      label-width="70px"
      :inline="true"
      :model="form"
      :rules="rules"
      :hide-required-asterisk="true"
    >
      <h3 class="login-title">登录</h3>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        form: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
        },
      }
    },
  }
</script>

<style scoped lang="less">
  .login-container {
    width: 350px;
    margin: 180px auto;
    padding: 15px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 25px #cac6c6;
    box-sizing: border-box;
    .login-title {
      text-align: center;
      margin-bottom: 40px;
      color: #a5aaaf;
    }
    .el-input{
        width: 198px;
    }
    .el-button{
        margin: 0 124px;
    }
  }
</style>
