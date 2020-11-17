<!--
 * @Author: yincheng.deng
 * @Date: 2020-11-16 15:10:26
 * @Description: file content
-->
<template>
  <div class="excel">
    <el-button style="margin-bottom: 20px" type="primary" size="small" plain @click="$router.push({ path: '/' })">返回上层</el-button>
    <el-button style="margin-bottom: 20px" type="success" size="small" plain @click="save">保存截图</el-button>
    <el-upload class="upload" drag action="" :show-file-list="false" :on-change="selectImportExcel" :accept="SheetJSFT" :auto-upload="false">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将excel文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传excel文件</div>
    </el-upload>
    <h1>预览</h1>
    <preview :table-data="tableData" :title="title"></preview>
  </div>
</template>

<script>
import XLSX from 'xlsx'
import html2canvas from 'html2canvas'
import Preview from '@/components/Preview'

export default {
  components: {
    Preview
  },
  data() {
    return {
      SheetJSFT: ['xlsx', 'xlsb', 'xlsm', 'xls', 'xml', 'csv', 'txt', 'ods', 'fods', 'uos', 'sylk', 'dif', 'dbf', 'prn', 'qpw', '123', 'wb*', 'wq*', 'html', 'htm']
        .map(x => {
          return '.' + x
        })
        .join(','),
      tableData: null,
      title: ''
    }
  },
  methods: {
    selectImportExcel(file) {
      file.raw && this.importGoods(file.raw)
    },
    importGoods(file) {
      /* Boilerplate to set up FileReader */
      const reader = new FileReader()
      reader.onload = e => {
        /* Parse data */
        const bstr = e.target.result
        const wb = XLSX.read(bstr, { type: 'binary', cellText: false, cellDates: true })
        /* Get first worksheet */
        const wsname = wb.SheetNames[0]
        const ws = wb.Sheets[wsname]
        /* Convert array of arrays */
        const data = XLSX.utils.sheet_to_json(ws, { range: 0, header: 'A', dateNF: 'yyyy/mm/dd', raw: false })
        this.title = data[0].A
        this.tableData = data.slice(2)
      }
      reader.readAsBinaryString(file)
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

<style lang="less">
.excel {
  min-width: 1400px;
  padding: 0 20px 20px;
  overflow: scroll;
}
</style>
