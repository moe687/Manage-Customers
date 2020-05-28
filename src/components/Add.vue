<template>
  <div class="add container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">Add Customer</h1>
    <form @submit.prevent="addCustomer">
      <div class="well">
        <h4>Customer Info</h4>
        <div class="form-group">
          <label>First Name</label>
          <input type="text" class="form-control" placeholder="First Name" v-model="customer_name" />
        </div>
        <div class="form-group">
          <label>Employee Id</label>
          <input type="text" class="form-control" placeholder="Employee Id" v-model="customer_id" />
        </div>
        <div class="form-group">
          <label>Last Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Last Name"
            v-model="customer_lastName"
          />
        </div>
      </div>
      <div class="well">
        <h4>Customer Contact</h4>
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" placeholder="Email" v-model="customer_email" />
        </div>
        <div class="form-group">
          <label>Address</label>
          <input type="text" class="form-control" placeholder="Address" v-model="address" />
        </div>
        <div class="form-group">
          <label>Number</label>
          <input type="text" class="form-control" placeholder="Number" v-model="number" />
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { db } from "../main";
import Alert from "./Alert";

export default {
  data() {
    return {
      customer_name: null,
      customer_lastName: null,
      customer_email: null,
      address: null,
      number: null,
      customer_id: null,
      alert: ""
    };
  },
  methods: {
    addCustomer() {
      db.collection("customers")
        .add({
          name: this.customer_name,
          lastName: this.customer_lastName,
          email: this.customer_email,
          adress: this.address,
          number: this.number,
          customer_id: this.customer_id
        })
        .then(doc => {
          this.$router.push({ path: "/", query: { alert: "Customer Added" } });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  components: {
    Alert
  }
};
</script>
