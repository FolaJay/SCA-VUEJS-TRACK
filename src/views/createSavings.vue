<template>
  <div>
    <layout>
      <div class="wrapper">
        <h2>Set Saving Limit</h2>
        <form>
          <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="(error,index) in errors" :key ="index">{{ error }}</li>
          </ul>
          </p>
          <div class="input form-group">
            <label>Expected Due Date</label>
            <input
              class="form-control"
              type="date"
              v-model="date"
              placeholder="Expected Due Date"
              required
            />
          </div>
          <div class="input form-group">
            <div class="input form-group">
                <label>Set Saving Limit for the month</label>
                <input
                class="form-control"
                type="text"
                v-model="amount"
                placeholder="Amount"
                required
                />
            </div>
          </div>
          <button
                  type="button"
                  class="btn shadow my-button"
                  @click="OnSave"
          >
            Save <img src="../assets/5.gif"  alt="" v-if="loading">
          </button>
        </form>
      </div>
    </layout>
  </div>
</template>
<script>
import { savingCollection } from "../firebaseConfig";
import layout from "../components/layout";
import firebase from "firebase";
export default {
  name: "income",
  components: {
    layout
  },
  data() {
    return {
      date: 0,
      amount: 0,
      loading: false,
      error: null,
      errors:[],

    };
  },
  methods: {
    OnSave: function() {
      this.loading = !this.loading;
        firebase.auth().onAuthStateChanged((user) => {
          savingCollection.doc().set({
            date:this.date,
            amount: this.amount,
          customerId: user.uid 
          }).then(() => {
            this.$store.commit('SET_SHOW_MODAL', 'show');
            
            this.clearField();
          }).catch(err => {
            this.error = err.message;
            this.errors.push(err.message);
          });
        })
    },
    clearField() {
      this.date = "";
      this.amount = "";
      this.expenseCategory = "";
      this.loading = !this.loading;
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