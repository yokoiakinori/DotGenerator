<template>
  <div id="app">
    <nav>
      <router-link to="/" exact>HOME</router-link>
      <router-link to="/user/:id">描く</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
nav{
  box-sizing:border-box;
  width: 100%;
  background-color: black;
  height: 60px;
  display: flex;
  a{
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 30px;
    text-decoration: none;
    color: white;
    &:hover{
      color:#c9c1be ;
    }
  }
}
.router-link-active{
  background:#434242 ;
}
</style>
