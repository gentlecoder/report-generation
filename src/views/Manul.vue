<!--
 * @Author: yincheng.deng
 * @Date: 2020-11-16 15:10:41
 * @Description: file content
-->
<template>
  <div class="manul">
    <el-button style="margin-bottom: 20px" type="primary" size="small" plain @click="$router.push({ path: '/' })">返回上层</el-button>
    <el-button style="margin-bottom: 20px" type="success" size="small" plain @click="save">保存截图</el-button>
    <el-form ref="form" :model="form" label-width="80px" style="width: 500px">
      <el-form-item label="标题">
        <el-input v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="制单日期">
        <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.A" style="width: 100%"></el-date-picker>
      </el-form-item>
      <el-form-item label="票据类型">
        <el-input v-model="form.B"></el-input>
      </el-form-item>
      <el-form-item label="商品编码">
        <el-input v-model="form.C"></el-input>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-select v-model="form.D" placeholder="请选择商品名称">
          <el-option label="黄葵胶囊" value="黄葵胶囊"></el-option>
          <el-option label="蒲参胶囊" value="蒲参胶囊"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="规格">
        <el-select v-model="form.E" placeholder="请选择规格">
          <el-option label="0.5g*30粒" value="0.5g*30粒"></el-option>
          <el-option label="0.43g*30粒" value="0.43g*30粒"></el-option>
          <el-option label="0.25g*12粒*4板" value="0.25g*12粒*4板"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="生产企业">
        <el-input v-model="form.F"></el-input>
      </el-form-item>
      <el-form-item label="批号">
        <el-input v-model="form.G"></el-input>
      </el-form-item>
      <el-form-item label="往来单位">
        <el-input v-model="form.H"></el-input>
      </el-form-item>
      <el-form-item label="支出数量">
        <el-input v-model="form.I"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">新增一条</el-button>
      </el-form-item>
    </el-form>
    <h1>预览</h1>
    <preview :table-data="tableData" :title="title"></preview>
  </div>
</template>

<script>
import Preview from '@/components/Preview'
import html2canvas from 'html2canvas'

export default {
  components: {
    Preview
  },
  data() {
    return {
      form: {
        A: '',
        B: '销售',
        C: '',
        D: '',
        E: '',
        F: '江苏苏中药业集团股份有限公司',
        G: '',
        H: '温州叶同仁医药连锁有限公司药城',
        i: ''
      },
      tableData: [],
      title: '温州叶同仁控股有限公司黄葵胶囊.蒲参胶囊2020年8月-10月配送'
    }
  },
  methods: {
    onSubmit() {
      this.tableData.push(this.form)
    },
    save() {
      html2canvas(document.querySelector('.preview')).then(canvas => {
        const link = document.createElement('a')
        link.href = canvas.toDataURL('image/jpg')
        link.download = '流向截图.jpg'
        link.click()
      })
    }
  }
}
</script>

<style>
.manul {
  min-width: 1400px;
  padding: 0 20px 20px;
  overflow: scroll;
}
</style>
