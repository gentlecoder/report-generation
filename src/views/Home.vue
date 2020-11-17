<template>
  <div class="home">
    <el-button type="primary" plain @click="$router.push({ path: 'excel' })">从Excel导入</el-button>
    <el-button type="primary" plain @click="$router.push({ path: 'manul' })">手动录入</el-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {}
}
</script>
