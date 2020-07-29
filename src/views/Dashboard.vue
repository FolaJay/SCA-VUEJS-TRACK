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
            <div class="col-6">
              <div class="row">
                <div class="col-sm-4" >
                  <div class="shadow" >
                    <div class="box-text">
                      <h2>Total Income</h2>
                      <p>${{this.total}}</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="shadow" >
                    <div class="box-text">
                      <h2>Total Expenses</h2>
                      <p>${{this.totalExpense}}</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="shadow">
                    <div class="box-text" >
                      <h2>Available Balance</h2>
                      <p>${{this.balance}}</p>
                    </div>
                  </div>
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
          for (i = 0; i < vm.expenseLists.length; i++) {
            vm.totalExpense += parseInt(vm.expenseLists[i].amount) 
            return vm.balance = parseInt(vm.total) - parseInt(vm.totalExpense) 
          }
        }).catch((error) => {
        console.log("Error getting documents: ", error);
        });
      });
    },
  },
created () {
    this.getIncome();
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