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
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" prop="birth">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.birth"
              style="width: 100%"
              value-format="yyyy-MM-DD"
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
      <el-button type="text" @click="handleAdd">+ 新增</el-button>
    </div>

    <el-table height="90%" :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="sex" label="性别">
        <template slot-scope="scope">
          <span>{{ scope.row.sex == 1 ? '男' : '女' }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="birth" label="出生日期"> </el-table-column>
      <el-table-column prop="addr" label="地址"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="danger" size="mini" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { getUser, addUser, editUser, delUser } from '../api'
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
        modelType: 0, // 0表示新增用户，1表示编辑用户
      }
    },
    methods: {
      // 提交用户表单
      submit() {
        this.$refs.form.validate((val) => {
          if (val) {
            // 添加用户
            if (this.modelType === 0) {
              addUser(this.form).then(() => {
                // 重新获取数据
                this.getList()
              })
            } else {
              editUser(this.form).then(() => {
                // 重新获取数据
                this.getList()
              })
            }

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

      // 编辑用户
      handleEdit(row) {
        this.modelType = 1
        this.dialogVisible = true
        this.form = JSON.parse(JSON.stringify(row))
      },

      // 删除用户
      handleDelete(row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            delUser({ id: row.id }).then(() => {
              this.$message({
                type: 'success',
                message: '删除成功!',
              })
              this.getList()
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除',
            })
          })
      },

      // 获取列表数据
      getList() {
        getUser().then(({ data }) => {
          // console.log(data)
          this.tableData = data.list
        })
      },
      // 添加用户
      handleAdd() {
        this.modelType = 0
        this.dialogVisible = true
      },
    },
    mounted() {
      this.getList()
    },
  }
</script>

<style lang="less" scoped>
.manage{
  height: 90%
}
</style>
