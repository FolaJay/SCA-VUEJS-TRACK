<template>
  <div>
    <layout>
      <div>
        <button class="newExpense" @click="createNewExpense">New Expense</button>
      </div>
      <div>
        <table  class="table table-hover">
            <thead class="thead-light">
                <tr>
                    <th>#</th>
                    <th scope="col">Item(s) Purchased</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Amount Collected</th>
                    <th scope="col">Amount Returned</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for ="(List,index) in Lists" :key="index">
                    <th scope="row">{{index+1}}</th>
                    <td>{{data.item}}</td>
                    <td>{{data.price}}</td>
                    <td>{{data.quantity}}</td>
                    <td>{{data.amountReceived}}</td>
                    <td>{{data.Returned}}</td>
                </tr>
            </tbody>
        </table>
      </div>
    </layout>
  </div>
</template>
<script>
import { expensesCollection } from "../firebaseConfig";
import layout from "../components/layout";
export default {
  data() {
    return {
        data:{
            "item":"",
            "price":0,
            "quantity":0,
            "amountReceived":0,
            "amountReturned":0,
        },
        "Lists": [],
    };
  },
  components: {
    layout
  },
  methods: {
    createNewExpense: function() {
      this.$router.push("/createExpense");
    },
    getExpenses: function() {
      expensesCollection.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          console.log(doc.data());
             
        });
      });
    }
  },
  beforeMount() {
    this.getExpenses();
  }
};
</script>
<style scoped>
.newExpense {
  background-color: rgb(53, 48, 48);
  border: 1px solid rgb(53, 48, 48);
  border-radius: 20px;
  padding: 10px 40px;
  margin-left: 20px;
  margin-top: 30px;
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
