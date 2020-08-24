<template>
  <div>
    <layout>
      <div class="div-wrapper">
          <div class="container">
              <div class="row">
                <div class="col-6">
                <button class="newExpense" @click="createNewBudget">New Budget</button>
                </div>
                <div class="col-6">
                <button class="savingLimit" @click="createSavingLimit">Set Saving Limit</button>
                </div>
              </div>
          </div>
        <h2>Budget</h2>
        <img src="../assets/5.gif" alt v-if="!loading" />
        <p v-if="!this.budgetLists.length" class="notify">{{this.noBudget}}</p>
        <div v-if="this.budgetLists.length">
          <table class="table table-hover">
            <thead class="table-header">
              <tr>
                <th>S/N</th>
                <th scope="col">Date</th>
                <th scope="col">Budget Category</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(budgetList,index) in budgetLists" :key="index">
                <th scope="row">{{index}}</th>
                <td>{{budgetList.date}}</td>
                <td>{{budgetList.budgetCategory}}</td>
                <td>{{budgetList.amount}}</td>
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
      noBudget: "You have not set up your Budget",
      totalBudget: 0,
      data: {
        date: 0,
        budgetCategory: 0,
        amount: 0,
      }
    };
  },
  components: {
    layout
  },
  methods: {
    createNewBudget: function() {
      this.$router.push("/createBudget");
    },
    createSavingLimit: function() {
      this.$router.push("/createSavings");
    },
    getBudget() {
      this.$store.dispatch('getBudget')
    }
  },
  mounted() {
    this.getBudget();
  },
 computed: {
    loading() {
      return this.$store.getters.loading;
    },
    budgetLists() {
      return this.$store.getters.budgetlist;
    }
  },
  watch: {
    loading: (val) => val,
    budgetLists: (val) => val,
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
.savingLimit{
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
