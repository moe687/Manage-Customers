<template>
  <div class="customers container">
    <component-a v-if="alert" v-bind:message="alert"></component-a>
    <h1 class="page-header">Manage Customers</h1>
    <input class="form-control" placeholder="Enter Last Name" />
    <br />
    <table class="table table-striped">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Number</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr :key="idx" v-for="(customer, idx) in customers">
          <td>{{ customer.name }}</td>
          <td>{{ customer.lastName }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.number }}</td>
          <td>{{ customer.address }}</td>
          <td>{{ customer.number }}</td>
          <td>
            <router-link
              class="btn btn-default"
              v-bind:to="{ name: 'customerdetails', params: {customer_id: customer.customer_id }}"
            >About</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { db } from "../main";
import Alert from "./Alert";

export default {
  name: "customers",
  data() {
    return {
      customers: [],
      alert: ""
    };
  },

  updated: function() {
    this.fetachData();
  },
  created: function() {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.fetachData();
  },
  methods: {
    async fetachData() {
      let snapshot = await db.collection("customers").get();
      let carier = [];
      snapshot.forEach(snap => {
        let handler = snap.data();
        handler.id = snap.id;
        carier.push(handler);
      });
      this.customers = carier;
    }
  },
  components: {
    "component-a": Alert
  }
};
</script>
