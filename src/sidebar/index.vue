<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#F56C6C">
    <template v-for="r in router">
      <el-submenu v-if="r.children && r.children.length>1" :index="r.name">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{r.mate.title}}</span>
        </template>
        <el-menu-item-group>
          <router-link v-for="c in r.children" :to="r.path+'/'+c.path">
            <el-menu-item :index="r.name+'_'+c.name">
              {{c.mate.title}}
            </el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <router-link v-else :to="r.path+'/'+r.children[0].path">
        <el-menu-item :index="r.name+'_'+r.children[0].name">
          <i class="el-icon-setting"></i>
          <span slot="title">{{r.children[0].mate.title}}</span>
        </el-menu-item>
      </router-link>
    </template>
  </el-menu>
</template>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
    min-height: 400px;
  }
</style>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'sidebar',
    computed: {
      ...mapState(['router'])
    },
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {}
  }
</script>
