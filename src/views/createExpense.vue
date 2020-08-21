<template>
  <div>
    <layout>
      <div class="expenseForm">
        <h2>Expenses</h2>
        <form>
          <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="(error,index) in errors" :key ="index">{{ error }}</li>
          </ul>
          </p>
          <p>Your Available income balance is :{{this.balance}}</p>
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
            <label>Expense Category</label>
            <input
              class="form-control"
              type="text"
              v-model="expenseCategory"
              placeholder="Expense Category"
              required
            />
          </div>
          <div class="input form-group">
            <label>Amount</label>
            <input
              class="form-control"
              type="text"
              v-model="amount"
              placeholder="Enter Amount Spent"
              required
            />
          </div>
          <button
                  type="button"
                  class="btn shadow my-button"
                  @click="OnSaveExpense"
          >
            Save <img src="../assets/5.gif"  alt="" v-if="loading">
          </button>
        </form>
      </div>
    </layout>
  </div>
</template>
<script>
// import firebase from "firebase";
import { expensesCollection } from "../firebaseConfig";
import layout from "../components/layout";
import firebase from "firebase";
export default {
  name: "expenselist",
  components: {
    layout
  },
  data() {
    return {
      expenseCategory: "",
      amount: 0,
      date: 0,
      loading: false,
      error: null,
      errors:[],

    };
  },
  methods: {
    OnSaveExpense: function() {
      this.loading = !this.loading;
      if(this.expenseCategory == "" || this.amount == "" || this.date == "") {
        this.errors.push("Field cannot be empty")
        this.loading = !this.loading;
      }else if(this.$store.getters.total == 0 || this.$store.getters.total < this.amount) {
        this.errors.push("You have no Income,You can't create an expense");
        this.loading = !this.loading;
        this.clearField();
      } else{
        firebase.auth().onAuthStateChanged((user) => {
          expensesCollection.doc().set({
          expenseCategory: this.expenseCategory,
          amount: this.amount,
          date: this.date,
          customerId: user.uid 
          }).then(() => {
            this.$store.commit('SET_SHOW_MODAL', 'show');
            this.loading = !this.loading;
            this.clearField();
          }).catch(err => {
            this.error = err.message;
            this.errors.push(err.message);
            
          })
        })
      }
    },
    getIncome() {
      console.log(this.Expenses);
      this.$store.dispatch('getIncome')
    }, 
    getExpenses() {
      this.$store.dispatch('getExpenses');
    },
    clearField() {
      this.date = "";
      this.amount = "";
      this.expenseCategory = "";
    },
    
  },
  created () {
    this.getIncome();
    this.getExpenses();
  },
  computed:{
    totalIncome() {
      return this.$store.getters.totalIncome;
    },
    Expenses() {
      return this.$store.getters.Expenses;
    },
    balance(){
      return this.totalIncome - this.Expenses
    }

  },
  watch:{
    totalIncome: (val) => val,
    Expenses: (val) => val,
    balance:(val) => val
  }
};
</script>
<style scoped>
.expenseForm {
  margin: 0 auto;
  width: 800px;
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