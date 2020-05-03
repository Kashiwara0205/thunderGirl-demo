<template>
  <div id="table_test">
    <h1>This is test table page</h1>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        table_data: [
          { number: 1, name: "a", msg: "xxxx" },
          { number: 2, name: "b", msg: "xxxx" },
          { number: 3, name: "c", msg: "xxxx" },
          { number: 4, name: "d", msg: "xxxx" },
          { number: 5, name: "e", msg: "xxxx" },
        ]
      }
      
    }
  }
</script>

<style>
</style>
