<template>
  <div id="thunderGirl">
    <h1>thunderGirl test page</h1>
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
    m_sec : <input v-model="m_sec" placeholder="input m_sec">
    <br> <br>
    <button style="margin: 5px" v-on:click="check">disp table data in console</button>
    <button style="margin: 5px" v-on:click="reload">reload disp table</button>
    <button style="margin: 5px" v-on:click="acc_load">acc load disp table</button>
    <router-view/>
  </div>
</template>

<script>
  import thunderGirl from "./../../lib/index.js"
  export default {
    data(){
      return{
        disp: [],
        split: 1,
        m_sec: 1000,
        table_data: [
          { number: 1, name: "a", msg: "xxxx" },
          { number: 2, name: "b", msg: "xxxx" },
          { number: 3, name: "c", msg: "xxxx" },
          { number: 4, name: "d", msg: "xxxx" },
          { number: 5, name: "e", msg: "xxxx" },
        ]
      }
    },

    methods:{
      check: function(){
        console.log("data:")
        console.log(this.disp)
      },

      reload: function(){
        thunderGirl.load(this.disp, this.table_data, parseInt(this.split), parseInt(this.m_sec))
      },

      acc_load: function(){
        thunderGirl.acc_load(this.disp, this.table_data, parseInt(this.split), parseInt(this.m_sec))
      },
    },

    created(){
      console.log("This is created prc:")
      thunderGirl.load(this.disp, this.table_data, parseInt(this.split), parseInt(this.m_sec))
    },

    mounted(){
      console.log("This is mounted prc:")
      console.log(this.disp)
    },
  }
</script>

<style>
  .center{
    border: 1px solid #aaa;
    width: 400px;
    text-align: center;
  }
</style>
