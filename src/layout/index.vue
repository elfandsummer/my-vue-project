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

<script>
  import Sidebar from "../sidebar/index";

  export default {
    components: {Sidebar},
    comments: {Sidebar},
    data() {
      return {
      };
    },
    methods: {
    }
  }
</script>
