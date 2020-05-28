// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
// import Vue from "vue";
import VueRouter from "vue-router";
import vueResource from "vue-resource";
import Customers from "./components/Customers";
import * as firebase from "firebase/app";
import "firebase/firestore";

// import About from "./components/About.vue";
import Add from "./components/Add.vue";

// import Edit from './components/Edit'

import CustomerDetails from "./components/CustomerDetails.vue";

firebase.initializeApp({
  apiKey: "AIzaSyA-xnrh3T1uZvm34JIamQtldKRpZj3iwA0",
  authDomain: "newproj-5f61b.firebaseapp.com",
  databaseURL: "https://newproj-5f61b.firebaseio.com",
  projectId: "newproj-5f61b",
  storageBucket: "newproj-5f61b.appspot.com",
  messagingSenderId: "1079943884781",
  appId: "1:1079943884781:web:ebd629cb26723602f541e4",
  measurementId: "G-XZBNVSQPGY",
});

export const db = firebase.firestore();
Vue.use(vueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Customers },
    // { path: "/about", component: About },
    { path: "/add", component: Add },

    {
      path: "/:customer_id",
      name: "customerdetails",
      component: CustomerDetails,
    },
  ],
});

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">vCustomers</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/add">Add Customer</router-link></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
      <router-view></router-view>
    </div>
  `,
}).$mount("#app");
