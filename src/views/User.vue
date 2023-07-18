<template>
  <div class="manage">
    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%">
      <!-- 用户的表单信息 -->
      <el-form
        ref="form"
        :rules="rules"
        :inline="true"
        :model="form"
        label-width="80px"
        :before-close="handleClose"
      >
        <el-form-item label="姓名" prop="name">
          <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input placeholder="请输入年龄" v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" prop="birth">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.birth"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input placeholder="请输入地址" v-model="form.addr"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>

    <div class="manage-header">
      <el-button type="text" @click="dialogVisible = true">+ 新增</el-button>
    </div>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { getUser } from '../api'
  export default {
    name: 'User',
    data() {
      return {
        dialogVisible: false,
        form: {
          name: '',
          age: '',
          sex: '',
          birth: '',
          addr: '',
        },
        rules: {
          name: [
            {
              required: true,
              message: '请输入姓名',
            },
          ],
          age: [
            {
              required: true,
              message: '请输入年龄',
            },
          ],
          sex: [
            {
              required: true,
              message: '请选择性别',
            },
          ],
          birth: [
            {
              required: true,
              message: '请选择日期',
            },
          ],
          addr: [
            {
              required: true,
              message: '请输入地址',
            },
          ],
        },
        tableData: [],
      }
    },
    methods: {
      // 提交用户表单
      submit() {
        this.$refs.form.validate((val) => {
          if (val) {
            console.log(this.form)

            // 提交后关闭弹窗
            this.handleClose()
            this.dialogVisible = false
          }
        })
      },
      handleClose() {
        this.$refs.form.resetFields()
      },
      cancel() {
        this.handleClose()
        this.dialogVisible = false
      },
    },
    mounted() {
      getUser().then(({ data }) => {
        console.log(data)
      })
    },
  }
</script>

<style></style>
