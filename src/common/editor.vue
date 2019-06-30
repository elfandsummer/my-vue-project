<template>
  <div id="editor" style="width: 600px;height: 600px;">
  </div>
</template>

<script>
  import editor from 'monaco-editor'

  export default {
    name: "layout",
    props:{
      heigth:{},
      width:{},
      code:{},
      language:{},
      theme:{},

    },
    mounted() {
      window.monaco.editor.create(document.getElementById('editor'))
    }

  }
</script>
