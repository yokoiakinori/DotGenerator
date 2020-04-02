<template>
  <div id="MyDrawing">
    <MainCanvas></MainCanvas>
    <ColorPalet></ColorPalet>
  </div>
</template>

<script>
import ColorPalet from "../components/colorpalet/ColorPalet.vue"
import MainCanvas from "../components/MainCanvas/MainCanvas.vue"
  export default{
    components:{
      ColorPalet,
      MainCanvas
    }
  }
</script>

<style lang="scss" scoped>
#MyDrawing{
  display: flex;
  box-sizing:border-box;
  width: 100%;
}
</style>
