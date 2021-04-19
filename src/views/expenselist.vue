<template>
  <div>
    <layout>
      <div class="div-wrapper">
        <div>
          <button class="newExpense" @click="createNewExpense">New Expense</button>
        </div>
        <h2>Recent Expenses</h2>
        <img src="../assets/5.gif" alt v-if="!loading" />
        <p v-if="!this.expenseLists.length" class="notify">{{this.noExpense}}</p>
        <div>
          <table class="table table-hover" v-if="this.expenseLists.length">
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
                <th scope="row">{{++index}}</th>
                <td>{{expenseList.date}}</td>
                <td>{{expenseList.expenseCategory}}</td>
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
import layout from "../components/layout";
export default {
  data() {
    return {
      noExpense: "You have no Expenses",
      totalExpense: 0,
      data: {
        date: 0,
        expenseCategory: "",
        amount: 0,
      }
    };
  },
  components: {
    layout
  },
  methods: {
    createNewExpense() {
      this.$router.push("/createExpense");
    },
    getExpenses() {
      this.$store.dispatch('getExpenses')
    },
  },
  mounted() {
    this.getExpenses();
  },
 computed: {
    loading() {
      return this.$store.getters.loading;
    },
    expenseLists() {
      return this.$store.getters.expenselist;
    }
  },
  watch: {
    loading: (val) => val,
    expenseLists: (val) => val,
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
.notify{
  padding-top: 20px;
}
</style>
