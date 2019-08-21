<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期" prop="date" width="180"></el-table-column>
      <el-table-column label="姓名" prop="name" width="180"></el-table-column>
      <el-table-column label="地址" prop="address"></el-table-column>
    </el-table>
    <el-pagination
      :current-page="page"
      :page-size="pageSize"
      :page-sizes="[10, 20, 50, 100]"
      :total="totalPage"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      layout="total, sizes, prev, pager, next, jumper"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  layout: 'sideBar',
  data() {
    return {
      page: 1,
      pageSize: 10,
      totalPage: 0,
    };
  },
  methods: {
    handleCurrentChange(pageSize) {},

    handleSizeChange(page) {},
  },
  async asyncData({app, params}) {
    // let obj = {
    //   order_type: '4',
    //   page: 1,
    //   length: 10,
    //   op_group_id: 1,
    //   keyword: '',
    // };
    // let res = await app.$axios.get(`/v1.0/opfault/device_list/search`, {params:obj});
    // console.log(res)

    let data = await [
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
      },
    ];
    return { tableData: data };
  },
};
</script>
