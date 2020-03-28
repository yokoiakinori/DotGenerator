<template>
  <ul id="MainCanvas">
    <Dot v-for="item in 300" v-bind:key="item" v-bind:width="20" v-bind:height="20"></Dot>
  </ul>
</template>

<script>
import Dot from "./Dot"
export default{
  components:{
    Dot
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#MainCanvas{
  width: 600px;
  height: 400px;
  background-color: #cfcfcf;
  display: flex;
  list-style-type: none;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 15px;
}
</style>
