<template>
  <div>
    <layout>
      <div class="expenseForm">
        <h2>Expenses</h2>
        <form @submit.prevent="logIn" class>
          <div class="input form-group">
            <label>Item Purchased</label>
            <input
              class="form-control"
              type="text"
              v-model="item"
              placeholder="Enter Item Purchased"
              required
            />
          </div>
          <div class="input form-group">
            <label>Price</label>
            <input
              class="form-control"
              type="text"
              v-model="price"
              placeholder="Price of Item"
              required
            />
          </div>
          <div class="input form-group">
            <label>Quantity Purchased</label>
            <input
              class="form-control"
              type="text"
              v-model="quantity"
              placeholder="Enter Quantity Purchased"
              required
            />
          </div>
          <div class="input form-group">
            <label>Cash Received</label>
            <input
              class="form-control"
              type="text"
              v-model="amountReceived"
              placeholder="Amount Received"
              required
            />
          </div>
          <div class="input form-group">
            <label>Cash Returned</label>
            <input
              class="form-control"
              type="text"
              v-model="amountReturned"
              placeholder="Amount Returned"
              required
            />
          </div>
          <button type="button" class="btn shadow my-button" @click="OnSaveExpense">Save</button>
        </form>
      </div>
    </layout>
  </div>
</template>
<script>
import { expensesCollection } from "../firebaseConfig";
import layout from "../components/layout";
export default {
  name: "expenselist",
  components: {
    layout
  },
  data() {
    return {
      item: "",
      price: 0,
      quantity: 0,
      amountReceived: 0,
      amountReturned: 0
    };
  },
  methods: {
    OnSaveExpense: function() {
      expensesCollection.doc().set({
        item: this.item,
        price: this.price,
        quantity: this.quantity,
        amountReceived: this.amountReceived,
        amountReturned: this.amountReturned
      });
    }
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
</style>