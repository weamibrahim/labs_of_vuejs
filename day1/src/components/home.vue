<template>
    <div>
        <button @click="selectedComponent = 'FormPage'">Form</button>
          <button @click="selectedComponent = 'AdminPage'">Admin</button>
        <button @click="selectedComponent = 'UserPage'">Users</button>
      

        <component :is="selectedComponent" v-if="selectedComponent" @formSubmitted="handleFormSubmission" />
    </div>
</template>

<script>
import FormPage from './form.vue'
import UserPage from './users.vue'
import AdminPage from './admins.vue'
    export default {
        name: 'HomePage',
        components: {
            FormPage,
            UserPage,
            AdminPage
        },
        data() {
            return {
            selectedComponent: FormPage,
            roles:[
                {"name":"weam", "age":"23", "role":"admin"},
                {"name":"nour", "age":"20", "role":"admin"},
                {"name":"ahmed", "age":"30", "role":"user"},
                {"name":"alaa", "age":"23", "role":"user"},
                
            ]
            };
        },
          methods: {
                handleFormSubmission(formValues) {
                this.roles.push(formValues);
                console.log(this.roles);
            }
        },
        provide(){
            return {roles: this.roles};
        }
    }
</script>
<style scoped>
button{
    
 background-color: #FFE2E2;
 font-size: 20px;
 
}

</style>