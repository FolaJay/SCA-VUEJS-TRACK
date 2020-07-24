<template>
  <div class="body">
    <div class="form-div shadow">
      <h4>SIGNUP</h4>
      <form class>
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="(error,index) in errors" :key ="index">{{ error }}</li>
          </ul>
        </p>
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
          <img src="../assets/5.gif" alt v-if="loadingSignUp" />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
require("../firebaseConfig.js");
export default {
  name: "signUp",

  data() {
    return {
      username: "",
      email: "",
      password: "",
      customerId:"",
      error: null,
      errors:[],
      loadingSignUp: false
    };
  },
  methods: {
    // sanity check function to help check form validity
    async signUp() {
      this.loadingSignUp = !this.loadingSignUp
      await this.$store.dispatch('signUp', {
        username : this.username,
        email : this.email,
        password :this.password
      }).catch(err => {
          this.error = err.message;
          if (this.email && this.password) {
            return true;
          }
          if (!this.email && !this.password) {
            this.errors.push(err.message);
          }
          // console.log(err);
          // console.log(err.message);
        });
      //  if (!this.$store.getters.error)  {
      //   alert("Your account has been created!");
      // this.$router.push({ name: "/" });
      // }else{
      //   this.error = this.$store.getters.error;
      //   console.log(this.error)
      // }
      
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading  
    }
  },
  watch: {
    loading: (val) => val
  },
  clearField() {
      this.email = "";
      this.password = "";
      this.username = "";
  }

};
</script>
<style scoped>
.body {
  background-image: linear-gradient(to bottom right, #d76d77, #ffaf7b);
  padding-top: 100px;
  min-height: 100vh;
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

