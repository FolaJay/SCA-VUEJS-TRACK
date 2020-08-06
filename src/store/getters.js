
export default {
    user(state){
        return state.user
    },
    isLoggedIn(state) {
        return state.user.loggedIn; // get logged in from user
    },
    loading(state){
        return state.loading
    },
    error(state){
        return state.error
    },
    show_modal(state) {
        return state.show_modal
    },
    totalIncome(state) {
        return state.income
    },
    Expenses(state) {
        return state.expense
    },
    balance(state) {
        return state.balance
    },
    expenselist(state) {
        return state.expenselists 
    }
    
}