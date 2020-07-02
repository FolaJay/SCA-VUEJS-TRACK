<template>
  <div>
    <layout>
        <div class="container">
          <h1>Welcome</h1>
          <div class="row">
            <div class="col-sm-4">{{Profile}}</div>
            <div class="col-sm-4">{{message}}</div>
            <div class="col-sm-4">
              <form class="form-group">
                <input
                  class="form-control"
                  type="email"
                  v-model="username"
                  required
                />
              </form>
            </div>
          </div>
        </div>
    </layout>
  </div>
</template>
<script>
import layout  from '../components/layout'
require("../firebaseConfig.js");
import firebase from "firebase";
export default {
  name: 'dashboard',
  data() {
    return {
      message: 'Dashboard',
      Profile:'',
      username: null,
    }
  },
  components: {
    layout
  },
  mounted() {
    var user = firebase.auth().currentUser;
        if (user) {
            console.log(user.email);
            this.Profile = user.email
            alert("Welcome")
            // User is signed in.
        } else {
            // No user is signed in.
        }
  }
}
</script>