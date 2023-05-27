<template>
  <h1 v-theme="'primary'">All users</h1>
 

  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">firstname</th>
      <th scope="col">lastname</th>
      
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users.value" :key="user.id">
      <th>{{ user.id }}</th>
      <td>{{ user.first_name }}</td>
      <td>{{ user.last_name }}</td>
     
      <td>
        <router-link class="btn btn-info me-1" :to="`/users/${user.id}`">show</router-link>
      </td>
    </tr>

  </tbody>
</table>
</template>

<script>
  import axios from 'axios'
  import {reactive} from 'vue'
  export default {

    name:'allusersApp',

    setup(){
      let users = reactive([]);

      let getAllusers = function(){
        axios.get("http://localhost:3000/users")
        .then((res) =>{
          // console.log(res.data);
          users.value = res.data;
        })
      }
      getAllusers();

      console.log(users.value);

      return {
        users,
      }
    },



  }
</script>

<style scoped>

</style>