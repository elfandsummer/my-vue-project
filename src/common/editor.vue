<template>
  <div id="summer" style="width: 600px;height: 600px;">
  </div>
</template>

<script>
  import editor from 'monaco-editor'

  export default {
    name: "layout",
    components:{
    },
    mounted() {
      window.monaco.editor.create(document.getElementById('summer'))
    }

  }
</script>

<style>

</style>
