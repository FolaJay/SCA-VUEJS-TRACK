<template>
  <div>
    <layout>
      <div class="wrapper">
        <h2>Monthly Budget</h2>
        <form @submit.prevent>
            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="(error,index) in errors" :key ="index">{{ error }}</li>
                </ul>
            </p>
            <div class="input form-group">
                <label>Date</label>
                <input
                class="form-control"
                type="date"
                v-model="date"
                placeholder="Date"
                required
                />
            </div>
            <div class="input form-group">
                <label>Budget Category</label>
                <input
                class="form-control"
                type="text"
                v-model="budgetCategory"
                placeholder="Budget Category"
                required
                />
            </div>
            <div class="input form-group">
                <label>Amount</label>
                <input
                class="form-control"
                type="text"
                v-model="amount"
                placeholder="Amount"
                required
                />
            </div>
          <button
                  type="submit"
                  class="btn shadow my-button"
                  @click="OnSaveBudget"
          >
            Save <img src="../assets/5.gif"  alt="" v-if="loading">
          </button>
        </form>
      </div>
    </layout>
  </div>
</template>
<script>
// import { incomeCollection } from "../firebaseConfig";
import { budgetCollection } from "../firebaseConfig";
import layout from "../components/layout";
import firebase from "firebase";
export default {
  name: "budget",
  components: {
    layout
  },
  data() {
    return {
      date: 0,
      budgetCategory: "",
      amount:0,
      loading: false,
      error: null,
      errors:[],

    };
  },
  methods: {
    OnSaveBudget: function() {
      this.loading = !this.loading;
        firebase.auth().onAuthStateChanged((user) => {
          budgetCollection.doc().set({
          date: this.date,
          budgetCategory: this.budgetCategory,
          amount: this.amount,
          customerId: user.uid 
          }).then(() => {
            this.$store.commit('SET_SHOW_MODAL', 'show');
            this.loading = !this.loading;
          }).catch(err => {
            this.error = err.message;
            this.errors.push(err.message);
          });
          
        })
    }
  }
};
</script>
<style scoped>
.wrapper {
  margin: 0 auto;
  width: 800px;
}
h2{
    padding-top: 30px;
}
.input {
  padding: 12px;
  text-align: left;
}
.input > label {
  font-size: 15px;
}
.my-button {
  background-color: rgb(53, 48, 48);
  border: 1px solid rgb(53, 48, 48);
  border-radius: 20px;
  padding: 5px 40px;
  margin-top: 20px;
  color: #ffffff;
  float: right;
}
.my-button:hover {
  background-color: #ffffff;
  border: 2px solid #ffaf7b;
  color: #4d4d4d;
  transition: 0.7s;
}
img{
  padding-left:10px;
}
</style>