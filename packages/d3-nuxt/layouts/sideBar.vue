
<template>
  <el-container>
    <el-aside fixed style="background-color: rgb(238, 241, 246)" width="200px">
      <el-menu :default-openeds="['1', '3']" :router="true">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>d3.js
          </template>
          <el-menu-item index="/server/list">资源列表</el-menu-item>
          <el-menu-item index="/d3-demo/demo">d3.js</el-menu-item>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>导航二
          </template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px; cursor: pointer;"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>登出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
>>> .el-container {
  height: 100vh;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
body {
  padding: 0;
  margin: 0;
}
</style>

<script>
export default {
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
};
</script>