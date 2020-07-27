<template>
  <div>
    <layout>
      <div class="div-wrapper">
        <div>
          <button class="newExpense" @click="createNewExpense">New Expense</button>
        </div>
        <h2>Recent Expenses</h2>
        <div>
          <table class="table table-hover">
            <thead class="thead-light">
              <tr>
                <th>#</th>
                <th scope="col">Date</th>
                <th scope="col">Expenses</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(expenseList,index) in expenseLists" :key="index">
                <th scope="row">{{index}}</th>
                <td>{{expenseList.date}}</td>
                <td>{{expenseList.expense}}</td>
                <td>{{expenseList.amount}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </layout>
  </div>
</template>
<script>
import { expensesCollection } from "../firebaseConfig";
import layout from "../components/layout";
import firebase from "firebase";
export default {
  data() {
    return {
      expenseLists: [],
      totalExpense: 0,
      data: {
        date: 0,
        expense: 0,
        amount: 0,
      }
    };
  },
  components: {
    layout
  },
  methods: {
    createNewExpense: function() {
      this.$router.push("/createExpense");
    },
    getExpenses() {
      firebase.auth().onAuthStateChanged((user) => {
        expensesCollection.where("customerId", "==", user.uid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
              this.expenseLists.push(doc.data());  
          });
        }).catch((error) => {
        console.log("Error getting documents: ", error);
        });
      });
    },
    getTotalExpenses() {
      //  console.log(this.expenseLists);
      // this.totalExpenses += parseInt(this.expenseLists.amount) 
    }
  },

  mounted() {
    this.getExpenses();
    
  }
};
</script>
<style scoped>
.div-wrapper {
  margin: 0 auto;
  width: 60%;
}
.newExpense {
  background-color: rgb(53, 48, 48);
  border: 1px solid rgb(53, 48, 48);
  border-radius: 20px;
  padding: 10px 40px;
  margin-left: 20px;
  margin-top: 30px;
  margin-bottom: 40px;
  color: #ffffff;
  text-decoration: none;
}
.newExpense:hover {
  background-color: #ffffff;
  border: 2px solid #ffaf7b;
  color: #4d4d4d;
  transition: 0.7s;
}
</style>
