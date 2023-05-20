<template>
  <div>
    <form @submit.prevent="formHandling" class="container">
      <div class="field">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          class="field_input"
          v-model.trim="formValues.name"
        />
      </div>

      <div class="field">
        <label for="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          class="field_input"
          v-model.trim.number="formValues.age"
        />
      </div>

      <div class="field">
        <label for="role">Role:</label>
        <select
          id="role"
          name="role"
          v-model.trim.lazy="formValues.role"
          class="field_input"
          required
        >
          <option value="">Select a role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit" class="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormPage",
  data() {
    return {
      formValues: {
        name: "",
        age: "",
        role: "",
      },
    };
  },
  methods: {
    formHandling() {
      //console.log(this.formValues);
      this.$emit("formSubmitted", this.formValues);
      this.formValues = {
        name: "",
        age: "",
        role: "",
      };
     
    },
  },
};
</script>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
}
.field_input {
  width: 50%;
  margin: auto;
  height: 1.5rem;
}
label {
  margin-left: -45%;
  padding: 0.5rem 0rem;
  color: gray;
}
.submit {
  margin: 3%;
  padding: 2% 5%;
  font-size: 1.25rem;
  background: gray;
}
</style>