<template>
  <div class="body">
    <div class="form-div shadow">
      <h4>SIGNUP</h4>
      <form class>
        <div class="input form-group">
          <label>USERNAME</label>
          <input class="form-control" v-model="username" placeholder="Enter your username" />
        </div>

        <div class="input form-group">
          <label>EMAIL</label>
          <input
            class="form-control"
            type="email"
            v-model="email"
            placeholder="Enter your Email"
            required
          />
        </div>
        <div class="input form-group">
          <label>PASSWORD</label>
          <input
            class="form-control"
            type="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div class="input form-check">
          <input class="form-check-input" type="checkbox" />
          <label>I agree with Terms and Conditions</label>
        </div>
        <p>
          Already have an account
          <router-link to="/">Login</router-link>
        </p>
        <button type="button" class="btn shadow my-button" @click="signUp">
          SignUp
          <img src="../assets/5.gif" alt v-if="loading" />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
require("../firebaseConfig.js");
import firebase from "firebase";
export default {
  name: "signUp",

  data() {
    return {
      username: "",
      email: "",
      password: "",
      error: null,
      loading: false
    };
  },
  methods: {
    signUp() {
      const vm   = this;
      console.log(vm.username)
      console.log(vm)
      console.log(this)
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          const user = firebase.auth().currentUser;
          console.log(vm)
          console.log(this)
          user
            .updateProfile({
              displayName: vm.username 
            })
            .then(() => {
              console.log(user)
              this.$router.push({ name: "login" });
            });
        })
        .catch(err => {
          this.error = err.message;
          console.log(err);
          console.log(err.message);
        });
            alert("Your account has been created!");
            // this.$router.push({ name: "/" });
      this.email = "";
      this.password = "";
      this.username = "";
    }
  }

};
</script>
<style scoped>
.body {
  background-image: linear-gradient(to bottom right, #d76d77, #ffaf7b);
  padding-top: 100px;
  height: 100vh;
}
.input {
  padding-bottom: 10px;
}
.my-button {
  background-color: rgb(53, 48, 48);
  border: 1px solid rgb(53, 48, 48);
  border-radius: 20px;
  padding: 5px 40px;
  margin-left: 110px;
  margin-top: 10px;
  margin-bottom: 20px;
  color: #ffffff;
}

.my-button:hover {
  background-color: #ffffff;
  border: 2px solid #ffaf7b;
  color: #4d4d4d;
  transition: 0.7s;
}
h4 {
  margin-top: 20px;
  text-align: center;
  color: #ffaf7b;
  font-size: 25px;
}
div p {
  padding: 15px 10px;
  text-align: center;
  color: #4d4d4d;
}
.form-div {
  background-color: #ffffff;
  width: 400px;
  height: 450px;
  padding: 5px 35px;
  margin: 0 auto;
  border-radius: 5px;
}
</style>

