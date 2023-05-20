<template>
    <HomePage/>
</template>

<script>
import HomePage from './components/home.vue'
export default {
  name: "App",
  components:{
  HomePage
  },
  
};
</script>

<style>

#app {

  text-align: center;
  color: #2c3e50;
  margin-top: 80px;
}
button{
  cursor: pointer;
  padding: 1% 2%;
  margin: 0% 2% ;
  border-radius:30px;
 
}

  
.container{
 width:60%;
    margin: 6% auto;
    padding:2%;
    border-radius: 20px;
    background-color:#FFC7C7;
}

h2 {
  display:flex;
  justify-content:center;
  background-color: #f2f2f2;
  padding: 10px;
  animation-name: color-change;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
 
}

@keyframes color-change {
  0% {
    background-color: #f2f2f2;
   
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #f2f2f2;
  }
}
  table.container th, table.container td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }

  table.container th {
    background-color: #ddd;
  }

  table.container tr:nth-child(odd) {
    background-color: #f2f2f2;
  }

  table.container tr:nth-child(even) {
    background-color: #e6e6e6;
  }

.delete{
 background-color: red;
    color: white;
    border: none;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
  padding: 5% 10%
}
</style>
