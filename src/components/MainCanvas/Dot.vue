<template>
  <li v-bind:style="dotStyle" @click="draw">
  </li>
</template>

<script>
export default{
  data(){
    return{
      dotStyle:{
        backgroundColor:'white',
        width:0,
        height:0
      }
    }
  },
  methods:{
    draw(){
      this.dotStyle.backgroundColor=this.$store.state.drawingColor
    },
    dotWidth(){
      this.dotStyle.width=100/this.$store.state.lineDotVolume+'%'
      this.dotStyle.height=100/this.$store.state.lineDotVolume+'%'
    }
  },
  mounted:function(){
    this.dotWidth()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
li{
  transition-property: background-color;
  transition-duration: 0.3s;
  list-style: none;
}
</style>
