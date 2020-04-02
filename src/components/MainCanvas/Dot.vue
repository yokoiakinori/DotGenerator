<template>
  <li v-bind:style="dotStyle" @click="draw" @mousemove="dragDraw">
  </li>
</template>

<script>
export default{
  props:{
    drawingJudgement:Boolean
  },
  data(){
    return{
      dotStyle:{
        backgroundColor:'white',
        width:0,
        height:0
      },
    }
  },
  methods:{
    dragDraw(){
      if(this.drawingJudgement){
        this.draw()
      }
    },
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
