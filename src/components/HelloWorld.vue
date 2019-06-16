<template>
  <div class="login">
    <div>
      <el-button class="login-text" type="text" @click="$router.push('basic')">
        Get Start
      </el-button>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {}
  }
</script>

<style scoped>
  .login {
    width: 100%;
    height: 100%;
    background-color: #555c63;
  }

  .login-text {
    position: absolute;
    color: #000;
    font-size: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .login-text:hover {
    color: #F56C6C;

  }
</style>
