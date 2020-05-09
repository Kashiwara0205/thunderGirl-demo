<template>
  <div id="thunderGirl">
    <h1>thunderGirl demo page(ts)</h1>
    <table border="1" align="center">
      <tr>
        <th>number</th>
        <th>name</th>
        <th>msg</th>
      </tr>        
      <tr v-for="item in disp" :key="item.id">
        <td>{{item.number}}</td>
        <td>{{item.name}}</td>
        <td>{{item.msg}}</td>
      </tr>
    </table>
    <br>
    split : <input v-model="split" placeholder="input split">
    mSec : <input v-model="mSec" placeholder="input mSec">
    <br> <br>
    <button style="margin: 5px" v-on:click="check">disp table info in console</button>
    <button style="margin: 5px" v-on:click="reload">reload table</button>
    <button style="margin: 5px" v-on:click="accLoad">acc load table</button>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import thunderGirl from "thunder-girl"
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class DemoTs extends Vue {
    disp: object[] = []
    split = "1"
    mSec = "1000"
    tableData: object[] = [
      { number: 1, name: "a", msg: "xxxx" },
      { number: 2, name: "b", msg: "xxxx" },
      { number: 3, name: "c", msg: "xxxx" },
      { number: 4, name: "d", msg: "xxxx" },
      { number: 5, name: "e", msg: "xxxx" },
    ]

    created(){
      console.log("This is created prc:")
      thunderGirl.load<object>(this.disp, this.tableData, parseInt(this.split), parseInt(this.mSec))
    }
    
    mounted(){
      console.log("This is mounted prc:")
      console.log(this.disp)
    }

    check(){
      console.log("data:")
      console.log(this.disp)
    }

    async reload(){
      await thunderGirl.load<object>(this.disp, this.tableData, parseInt(this.split), parseInt(this.mSec))
      console.log("complete reload")
    }

    async accLoad(){
      await thunderGirl.acc_load<object>(this.disp, this.tableData, parseInt(this.split), parseInt(this.mSec))
      console.log("complete accLoad")
    }
  }
</script>

<style>
  .center{
    border: 1px solid #aaa;
    width: 400px;
    text-align: center;
  }
</style>