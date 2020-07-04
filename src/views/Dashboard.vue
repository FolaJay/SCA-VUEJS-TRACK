<template>
  <div>
    <layout>
        <div class="wrapper">
      <div class="inner-wrapper">
          <h1>Welcome</h1>
          <div class="row">
            <div class="col-sm-4">
              <div class="box shadow">
                <h3>Hello</h3>
                <p>Problem Solving</p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="box shadow">
                <h3>Hello</h3>
                <p>Problem Solving</p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="box shadow">
                <h3>Hello</h3>
                <p>Problem Solving</p>
              </div>
            </div>
          </div>
      </div>
    </div>
    </layout>
  </div>
</template>
<script>
import layout  from '../components/layout'
require("../firebaseConfig.js");
// import firebase from "firebase";
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
  // created() {
  //   var user = firebase.auth().currentUser;
  //       if (user) {
  //           console.log(user.email);
  //           this.Profile = user.email
  //           alert("Welcome")
  //           // User is signed in.
  //       } else {
  //           // No user is signed in.
  //       }
  // }
}
</script>
<style scoped>
.wrapper{
  background-color: azure;
}
.inner-wrapper{
  margin:0 auto;
  width:80%; 
}
.box{
  background-color: #ffffff;
}
</style>