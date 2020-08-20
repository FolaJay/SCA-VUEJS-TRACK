<template>
  <div class="wrapper">
    <layout>
        <div>
      <div class="inner-wrapper">
          <h1>Welcome</h1>
          <div class="row">
            <div  class="col-6">
              <div style="background-color:#ffffff">
                <div>
                  <img class="image" src="../assets/image1.png"/>
                </div>
              </div>
            </div>
            <img src="../assets/5.gif" alt v-if="!loading" />
            <div class="col-6">
              <div class="row">
                <div class="col-sm-4" >
                  <div class="shadow" >
                    <div class="box-text">
                      <h2>Total Income</h2>
                      <p>${{this.totalIncome}}</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="shadow" >
                    <div class="box-text">
                      <h2>Total Expenses</h2>
                      <p>${{this.Expenses}}</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="shadow">
                    <div class="box-text" >
                      <h2> Balance</h2>
                      <p>${{this.totalIncome - this.Expenses}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row ">
            <div class="col-6"> 
              <table class="table table-hover table-borderless">
              <thead class="table-primary">
                <tr>
                  <th>S/N</th>
                  <th scope="col">Date</th>
                  <th scope="col">Expense Category</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody class="table-content">
                <tr v-for="(expenseList,index) in expenseLists" :key="index">
                  <th scope="row">{{index}}</th>
                  <td>{{expenseList.date}}</td>
                  <td>{{expenseList.expenseCategory}}</td>
                  <td>{{expenseList.amount}}</td>
                </tr>
              </tbody>
              </table>
            </div>
          </div>
      </div>
    </div>
    </layout>
  </div>
</template>
<script>
import layout from "../components/layout";
require("../firebaseConfig.js");
// import firebase from "firebase";
export default {
  name: 'dashboard',
  props:['Income'],
  data() {
    return {
      message: 'Dashboard',
      amount: 0,
      count:0,
      income:0,
      expense:0,
      total:0,
      totalExpense:0,
      balance:0
      
    }
  },
  components: {
    layout
  },
  methods: {  
    getIncome() {
      console.log(this.Expenses);
      this.$store.dispatch('getIncome')
    }, 
    getExpenses() {
      this.$store.dispatch('getExpenses');
    },
    getExpenseList() {
      console.log(this.expenseLists)
      this.$store.dispatch('getExpenseList')
    }
  },
mounted () {
    this.getIncome();
    this.getExpenses();
  },
  computed: {
    totalIncome() {
      return this.$store.getters.totalIncome;
    },
    Expenses() {
      return this.$store.getters.Expenses;
    },
    expenseLists() {
      return this.$store.getters.expenselist;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
  watch: {
    totalIncome: (val) => val,
    Expenses: (val) => val,
    expenseLists: (val) => val,
    loading: (val) => val,
  }
}

</script>
<style scoped>
.wrapper{
  
    min-height: 100vh;
}
.inner-wrapper{
  margin:0 auto;
  width:80%; 
}
.box-text{
  text-align: center;
  margin-top:170px;
  text-align: center;
  padding-top:30px;
   border-radius: 5%;
  height: 150px;
  border:1px solid #006699;
  transition: 0.5s;

}
.box-text p{
  padding-top:10px;
  font-size: 25px;
  color:#006699;
  font-weight: 400;
}
h1{
  padding-top:10px;
}
h2{
  color:#006699;
}
.image{
  width: 500px;
  height: 500px;
}

</style>