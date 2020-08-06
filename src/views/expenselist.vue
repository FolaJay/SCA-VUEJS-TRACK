<template>
  <div>
    <layout>
      <div class="div-wrapper">
        <div>
          <button class="newExpense" @click="createNewExpense">New Expense</button>
        </div>
        <h2>Recent Expenses</h2>
        <img src="../assets/5.gif" alt v-if="!loading" />
        <div>
          <table class="table table-hover">
            <thead class="table-header">
              <tr>
                <th>S/N</th>
                <th scope="col">Date</th>
                <th scope="col">Expense Category</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(expenseList,index) in expenseLists" :key="index">
                <th scope="row">{{index}}</th>
                <td>{{expenseList.date}}</td>
                <td>{{expenseList.expenseCategory}}</td>
                <td>{{expenseList.amount}}</td>
                <td>{{this.expenseLists}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </layout>
  </div>
</template>
<script>
import layout from "../components/layout";
export default {
  data() {
    return {
      expenseLists:[],
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
    // getExpenses() {
      
    // },
    async getExpenseList() {
     this.$store.getters.expenseList
      await this.$store.dispatch('getExpenseList') 
      console.log(this.expenseList)
    }
  },
  mounted() {
    this.getExpenseList();
  },
 computed: {
    loading() {
      return !this.$store.getters.loading;
    },
    expenseList() {
      
      return this.$store.getters.expenseList;
    }
  },
  watch: {
    loading: (val) => !val,
    expenseList: (val) => !val,
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
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 20px;
}
table-header{
  background:#006699 !important ;
}
</style>
