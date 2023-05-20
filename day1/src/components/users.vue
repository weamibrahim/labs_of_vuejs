<template>
    <div>
    <table class="container">
        <h2 >Users</h2>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Role</th>
            <th>Action</th>
        </tr>
        <tr v-for="user in filterUsers" :key="user.name">
            <td>{{ user.name }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.role }}</td>
          <td>   <button @click="deleteUser(user)" class="delete">
            <i class="fas fa-trash-alt"></i>
          </button></td>
       </tr>
       </table>
    </div>
</template>

<script>
    export default {
        name:'UserPage',
        inject:['roles'],
        computed:{
            filterUsers(){
                return this.roles.filter((user) => user.role === 'user')
            }
        },
        methods: {
            deleteUser(user) {
            const index = this.roles.findIndex((a) => a.name === user.name);
            if (index !== -1) {
                this.roles.splice(index, 1);
               
        window.alert(`User ${user.name} will be delete.`);
      
            }
            }
        }
    }
</script>

<style scoped>

</style>