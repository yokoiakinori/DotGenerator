<template>
  <ul id="UserProductions">
    <li v-for="production in productionList" :key="production.id" ><router-link :to="{name:'user-production',params:{pid:production.id}}"></router-link></li>
    <li id="createProduction" @click="createProduction">＋</li>
  </ul>
</template>

<script>
export default{
  data(){
    return{
      id:0,
      productionList:[]
    }
  },
  props:{
    pid:Number
  },
  methods:{
    createProduction(){
      this.id++
      this.productionList.push({id:this.id,name:"sample"})
    }
  }
}

</script>

<style lang="scss" scoped>
ul{
    width:15%;
    height: 60vw;
    padding: 15px;
    margin: 0;
    background: white;
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
}
li{
  width: 100%;
  height: 20%;
  border-radius: 20px;
  list-style: none;
  background-color:#afafaf ;
  a{
    display: block;
    width: 100%;
    height: 100%;
  }
}
#createProduction{
  background-color: white;
      border: solid 5px #afafaf;
      color:#afafaf ;
      font-size: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }
</style>
