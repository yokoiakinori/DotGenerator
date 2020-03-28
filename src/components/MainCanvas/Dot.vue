<template>
  <li>
    <svg v-bind:width="width" v-bind:height="height" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <rect cx="0" cy="0" v-bind:width="width" v-bind:height="height" v-bind:fill="color" @click="draw"></rect>
    </svg>
  </li>
</template>

<script>
export default{
  props:{
    width:Number,
    height:Number,
  },
  data(){
    return{
      color: 'white'
    }
  },
  methods:{
    draw(){
      this.color=this.$store.state.drawingColor
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
li{
  margin: 2.5px;
  height: 0;
}
rect{
  transition-duration: 0.3s;
}
</style>
