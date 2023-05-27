<template>
  <h1 v-theme="'warning'">user details</h1>

  <div class="card" >
  <div class="card-body" v-if="user.value">
    <h5 class="card-title">firstName :  {{ user.value.first_name  }}</h5>
    <h5 class="card-text">lastName : {{ user.value.last_name }}.</h5>
    
   <button  class="btn btn-primary" @click="back()">back </button>
  </div>
</div>
</template>

<script>
  import axios from 'axios';
  import {reactive} from 'vue';
  import { useRoute ,useRouter} from 'vue-router';

  export default {
    name:'userDetails',

    setup(){

    let user = reactive({});
    const route = useRoute();
   const router = useRouter();
    let getUserById = function(){
        let id  = route.params.id;
        axios.get(`http://localhost:3000/users/${id}`)
        .then((res) => {
          user.value = res.data
        })
      }
    
      getUserById();

   const back = function () {
      router.push('/');
    };
      return {
        user,
        back,
      }
    


    }
 

   
  }
</script>

<style scoped>

</style>