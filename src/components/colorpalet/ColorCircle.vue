<template>
  <li>
    <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <circle cx="30" cy="30" v-bind:r="radius" v-bind:fill="color" @mouseover="mouseover" @mouseleave="mouseleave" @click="drawingColorInput"></circle>
    </svg>
  </li>
</template>

<script>
export default {
  props:['color'],
  data(){
    return{
      radius:15,
    }
  },
  methods:{
    mouseover(){
      this.radius=18
    },
    mouseleave(){
      this.radius=15
    },
    drawingColorInput(){
      let drawColor=this.color
      this.$store.commit('drawingColor',drawColor)
      // console.log(this.$store.state.drawingColor)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
circle{
  transition-duration: 0.2s;
}
</style>
