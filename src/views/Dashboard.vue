<template>
  <div class="wrapper">
    <layout>
        <div>
      <div class="inner-wrapper">
          <h1>Welcome</h1>
          <div class="row">
            <div class="col-sm-4">
              <div class="box shadow">
                <div class="box-text">
                  <h2>Total Income</h2>
                  <p>{{this.total}}</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="box shadow">
                <div class="box-text">
                  <h2>Total Expenses</h2>
                  <p>{{sumExpense}}</p>
                  <button @click="increment">increase</button>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="box shadow">
                <div class="box-text">
                  <h2>Available Balance</h2>
                  <p>{{amount}}</p>
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
      
    }
  },
  components: {
    layout
  },
  computed: {
    sumExpense () {
      // this.count += 10
      return  this.$store.getters.sumExpense
      }
  },
  methods: {
    increment () {
      // this.count += 10
      console.log (this.$store.getters.sumExpense)
      
      // this.$store.commit('SUM_EXPENSE', 10);
      
      this.$store.dispatch('sumExpenses', 20)
    },   
    getIncome() {
      firebase.auth().onAuthStateChanged((user) => {
        incomeCollection.where("customerId", "==", user.uid)
          .get()
          .then(querySnapshot =>  {
              querySnapshot.forEach(doc => {
                const data = doc.data()
                this.total  += parseInt(data.income)  
              });
              console.log(this.total);
          })
          .catch((error) => {
          console.log("Error getting documents: ", error);
        });
        
      });
    },
    totalIncome() {
      console.log(this.total);

      
    }
  },
  mounted () {
    this.getIncome()
    this.totalIncome()
    
  }
}
</script>
<style scoped>
.wrapper{
  background: #5F9EA0;
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
  color:#ffaf7b;
}
h1{
  padding-top:30px;
}
</style>