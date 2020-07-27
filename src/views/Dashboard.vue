<template>
  <div class="wrapper">
    <layout>
        <div>
      <div class="inner-wrapper">
          <h1>Welcome</h1>
          <div class="row">
            <div class="col-sm-4" >
              <div class="box shadow" style="background-color:#D2B4DE">
                <div class="box-text">
                  <h2>Total Income</h2>
                  <p>{{this.total}}</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="box shadow" style="background-color:#2E86C1">
                <div class="box-text">
                  <h2>Total Expenses</h2>
                  <p>{{this.totalExpense}}</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="box shadow" style="background-color:#F5B041">
                <div class="box-text" >
                  <h2>Available Balance</h2>
                  <p>{{this.total}} - {{this.totalExpense }}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    </layout>
  </div>
</template>
<script>
import { incomeCollection } from "../firebaseConfig";
import { expensesCollection } from "../firebaseConfig";
import layout from "../components/layout";
import firebase from "firebase";
require("../firebaseConfig.js");
// import firebase from "firebase";
export default {
  name: 'dashboard',
  props:['Income'],
  data() {
    return {
      message: 'Dashboard',
      Profile:'',
      username: null,
      amount: 0,
      count:0,
      income:0,
      total:0,
      totalExpense:0,
      expenseLists: [],
      balance:0
      
    }
  },
  components: {
    layout
  },
  methods: {  
    getIncome() {
      firebase.auth().onAuthStateChanged((user) => {
        incomeCollection.where("customerId", "==", user.uid)
          .get()
          .then(querySnapshot =>  {
              querySnapshot.forEach(doc => {
                const data = doc.data()
                this.total  += parseInt(data.income)  
              });
              // console.log(this.total);
          })
          .catch((error) => {
          console.log("Error getting documents: ", error);
        });
        
      });
    },
    getExpenses() {
      firebase.auth().onAuthStateChanged((user) => {
        expensesCollection.where("customerId", "==", user.uid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
              this.expenseLists.push(doc.data());  
          });
          var i;
          var vm = this;
          for (i = 0; i < this.expenseLists.length; i++) {
            vm.totalExpense += parseInt(this.expenseLists[i].amount)  
          }
        }).catch((error) => {
        console.log("Error getting documents: ", error);
        });
      });
    },
    availableBalance() {
      console.log(this.total);
      this.balance = parseInt(this.total - this.totalExpense )
    }
  },
  mounted () {
    this.getIncome();
    this.availableBalance();
    this.getExpenses();
    
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
.box{
  background-color: #ffffff;
  height: 250px;
  border-radius: 5%;
}
.box-text{
  text-align: center;
  margin-top:50px;
  padding-top:50px;
}
.box-text p{
  padding-top:50px;
  font-size: 40px;
  color:#000;
}
h1{
  padding-top:30px;
}
</style>