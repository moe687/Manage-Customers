<template>
  <div id="view-customer">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{{name}}</h4>
      </li>
      <li class="collection-item">Customer ID#: {{customer_id}}</li>
      <li class="collection-item">Last Name: {{lastName}}</li>
      <li class="collection-item">Email: {{email}}</li>
    </ul>
    <router-link to="/" class="btn grey">Back</router-link>
    <button @click="deleteCustomer" class="btn red">Delete</button>
  </div>
</template>

<script>
import { db } from "../main";

export default {
  name: "customerdetails",
  data() {
    return {
      name: null,
      customer_id: null,
      email: null,
      lastName: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("customers")
      .where("customer_id", "==", to.params.customer_id)
      .get()
      .then(snapshot => {
        snapshot.forEach(snap => {
          next(vm => {
            vm.customer_id = snap.data().customer_id;
            vm.name = snap.data().name;
            vm.lastName = snap.data().lastName;
            vm.email = snap.data().email;
          });
        });
      });
  },
  created: function() {
    this.fetchDetails();
  },
  methods: {
    fetchDetails() {
      db.collection("customers")
        .where("customer_id", "==", this.$route.params.customer_id)
        .get()
        .then(snapshot => {
          snapshot.forEach(snap => {
            this.name = snap.data().name;
            this.customer_id = snap.data().customer_id;
            this.email = snap.data().email;
            this.lastName = snap.data().lastName;
          });
        });
    },

    deleteCustomer() {
      db.collection("customers")
        .where("customer_id", "==", this.$route.params.customer_id)
        .get()
        .then(snapshot => {
          snapshot.forEach(item => {
            item.ref.delete(), this.$router.push("/");
          });
        });
    }
  }
};
</script>

<style>
</style>