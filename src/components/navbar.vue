<template>
  <div class="navbar-wrapper shadow ">
    <div class="row">
      <div class="col-sm-2">
        <div v-if="isBurgerActive">
          <img class="burger" @click="togglePanel" src="../assets/menu.png" />
        </div>
        <div v-else>
          <img  class="burger" @click="togglePanel" src="../assets/cancel.png" />
        </div>
      </div>
      <div class="col-sm-10">
        <div class="navbar-menu">
          <router-link class="navbar-link" to="/expenselist">Expenses</router-link>
          <router-link class="navbar-link" to="/budget">Budget</router-link>
          <router-link class="navbar-link" to="/createSavings">Savings</router-link>

          <router-link class="navbar-link" to="/login" v-if="!user.loggedIn">Login</router-link>
          <router-link class="navbar-link" to="/" @click="logout" v-else>
          Logout
          <img src="../assets/5.gif"  alt="" v-if="loading">
          </router-link>

          <router-link class="navbar-link3 shadow" to="/signup" v-if="!user.loggedIn">SignUp</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
require('../firebaseConfig.js')
import firebase from 'firebase'
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isBurgerActive: true,
      loading:false
    };
  },
  components: {},
  methods: {
    logout() {
      // this.$store.commit("SET_LOGGED_OUT");
      // this.$router.push("/");
      this.loading = !this.loading
      firebase.auth().signOut().then(function() {
  // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
        console.log(error)
      });
    },
    togglePanel: function() {
      this.$emit("toggle");
      this.isBurgerActive = !this.isBurgerActive
    }
  },
  computed: {
    user() {
      console.log(this.$store.getters.user);
      return this.$store.getters.user;
    }
  },
  watch: {
    user(value) {
      if (value !== null) return value;
    }
  },
  mounted() {
    return this.$store.getters.user;
  }
};
</script>
<style scoped>
.row{
  margin-right: 0;
}
.navbar-wrapper{
  background-color: #ffffff;
  margin-bottom: 3px;
}
.navbar-menu {
  float: right;
  padding: 25px 20px;
}
.navbar-link {
  padding: 0 40px 0px 40px;
  color: #000;
  font-size: 16px;

  text-decoration: none;
}
.navbar-link:hover {
  color: #28334aff;
}
.navbar-link3 {
  background-color: #28334aff;
  padding: 8px 30px;
  border-radius: 20px;
  font-size: 14px;
  color: #ffffff;
  text-decoration: none;
}
.navbar-link3:hover {
  background-color: #ffffff;
  color: #28334aff;
  border: 1px solid #ffffff;
  transition: 0.9s;
}
.burger {
  margin-top: 25px;
  padding-left:60px;
}
</style>