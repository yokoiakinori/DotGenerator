<template>
  <div id="MainCanvas">
    <ul>
      <Dot v-for="item in allCanvasDot" v-bind:key="item"></Dot>
    </ul>
  </div>
</template>

<script>
import Dot from "./Dot"
export default{
  components:{
    Dot
  },
  computed:{
    allCanvasDot: function(){
      return this.$store.state.lineDotVolume**2
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#MainCanvas{
  width: 70%;
  height: calc(70vw);
  background-color: #cfcfcf;
  display: flex;
  justify-content: center;
  align-items: center;
  ul{
    width: 90%;
    height: 90%;
    padding: 0;
    display: flex;
    list-style-type: none;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 0;
  }
}
</style>
