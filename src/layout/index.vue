<template>
  <div style="height:100%;">
    <el-row type="flex" style="height:100%;">
      <el-col style="width: 200px;">
      <sidebar></sidebar>
      </el-col>
      <el-row>
        <router-view></router-view>
      </el-row>
    </el-row>
  </div>
</template>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
    min-height: 400px;
  }
</style>

<script>
  import Sidebar from "../sidebar/index";

  export default {
    components: {Sidebar},
    comments: {Sidebar},
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
