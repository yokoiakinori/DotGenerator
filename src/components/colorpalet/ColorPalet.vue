<template>
  <div>
    <color-circle v-bind:color="this.$store.state.drawingColor"></color-circle>
    <ul class="palet">
      <ColorCircle v-for="paletcolor in paletcolors" v-bind:key="paletcolor.id" v-bind:color="paletcolor.color"></ColorCircle>
    </ul>
  </div>
</template>

<script>
import ColorCircle from "./ColorCircle.vue"
export default {
  components:{
    ColorCircle
  },
  data(){
    return{
      paletcolors:[
      {id:1,color:'black'},
      {id:2,color:'rgb(50%, 50%, 50%)'},
      {id:3,color:'white'},
      {id:4,color:'#f45757'},
      {id:5,color:'#27c227'},
      {id:6,color:'#4587d4'},
      {id:7,color:'#f3d54f'},
      {id:8,color:'#f488e1'},
      {id:9,color:'#57dcd5'},
      {id:10,color:'#62c3ae'},
      {id:11,color:'#e78f34'},
      {id:12,color:'#a03ee4'},
    ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div{
  width: 25%;
}
.palet{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 400px;
  background-color: #cfe8cf;
  padding: 20px;
}
li{
  list-style-type: none;
}
</style>
