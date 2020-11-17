<!--
 * @Author: yincheng.deng
 * @Date: 2020-11-16 15:49:22
 * @Description: file content
-->
<template>
  <el-container class="preview">
    <el-header class="preview-header">
      <span class="company-name">温州叶同仁控股有限公司</span>
      <span class="intro">{{ title }}</span>
      <span class="quit">退出</span>
      <span class="first-page">首页</span>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu default-active="1" class="el-menu-vertical">
          <el-menu-item index="1">
            <i class="el-icon-location"></i>
            <span slot="title">流向查询</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">用户中心</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">产品管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">系统设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <el-table :data="tableData" style="width: calc(">
          <el-table-column prop="A" label="制单日期" min-width="100"> </el-table-column>
          <el-table-column prop="B" label="票据类型" min-width="80"> </el-table-column>
          <el-table-column prop="C" label="商品编码" min-width="80"> </el-table-column>
          <el-table-column prop="D" label="商品名称" min-width="100"> </el-table-column>
          <el-table-column prop="E" label="规格" min-width="80"> </el-table-column>
          <el-table-column prop="F" label="生产企业" min-width="150"> </el-table-column>
          <el-table-column prop="G" label="批号" min-width="100"> </el-table-column>
          <el-table-column prop="H" label="往来单位" min-width="160"> </el-table-column>
          <el-table-column prop="I" label="支出数量" min-width="80"> </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: null
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      // tableData: [
      //   {
      //     date: '2016-05-02',
      //     name: '王小虎',
      //     address: '上海市普陀区金沙江路 1518 弄'
      //   },
      //   {
      //     date: '2016-05-04',
      //     name: '王小虎',
      //     address: '上海市普陀区金沙江路 1517 弄'
      //   },
      //   {
      //     date: '2016-05-01',
      //     name: '王小虎',
      //     address: '上海市普陀区金沙江路 1519 弄'
      //   },
      //   {
      //     date: '2016-05-03',
      //     name: '王小虎',
      //     address: '上海市普陀区金沙江路 1516 弄'
      //   }
      // ]
    }
  }
}
</script>

<style lang="less">
.preview {
  background: #eaeefa;
  .preview-header {
    position: relative;
    height: 40px !important;
    line-height: 40px;
    background: linear-gradient(180deg, #042452, #254e83);
    color: white;
    .company-name {
      color: #eee;
      font-size: 18px;
    }
    .intro {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      font-size: 12px;
    }
    .first-page,
    .quit {
      float: right;
      margin-left: 10px;
      font-size: 14px;
      color: #eee;
    }
  }
  .el-main {
    padding: 0;
  }
}
</style>
