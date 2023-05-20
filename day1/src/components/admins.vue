<template>
    <div>
      
       <table class="container">
        <h2 class="title">Admin</h2>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Role</th>
            <th>Action</th>
        </tr>
        <tr v-for="admin in filterAdmins" :key="admin.name">
            <td>{{ admin.name }}</td>
            <td>{{ admin.age }}</td>
            <td>{{ admin.role }}</td>
           <td>  <button @click="deleteAdmin(admin)" class="delete">
            <i class="fas fa-trash-alt"></i>
          </button></td>
       </tr>
       </table>
    </div>
</template>

<script>
    export default {
        name:'AdminPage',
        inject:['roles'],
        computed:{
            filterAdmins(){
                return this.roles.filter((admin) => admin.role === 'admin')
            }
        },
        methods: {
            deleteAdmin(admin) {
            const index = this.roles.findIndex((a) => a.name === admin.name);
            if (index !== -1) {
                this.roles.splice(index, 1);
                
        window.alert(`Admin ${admin.name} will be delete.`);
      
            }
            }
        }
    }
</script>

<style scoped>

</style>