
import {actions} from "./actions";

export default {
    // mutations are always synchronus
     // sets the loggedIn property on state.user to the value that was passed to it
     SET_LOGGED_IN(state, value) {
        state.user.loggedIn = value;
    },
    SET_LOGGED_OUT(state) {
        console.log(state)
        state.user = { loggedIn: false, data: null};
    },
    // makes changes to the data property on the state.user
    SET_USER(state, data) {
        state.user.data = data;
    },
    TOGGLE_SIDEBAR() {
        actions.isSidebarOpen = !actions.isSidebarOpen
    },
    SET_SHOW_MODAL(state, payload) {
        state.show_modal = payload
    },
    SET_LOADING(state, value) {
        state.loading = value;
    },
    SET_ERROR(state, value) {
        state.user.loggedIn = value;
    },
    SET_ERROR_MSG(state, value) {
        state.user.loggedIn = value;
    },
    SUM_EXPENSE(state, payload) {
        state.count += payload;
    },
    TOTAL_INCOME(state, payload) {
        state.income = payload
    },
    TOTAL_EXPENSE(state, payload) {
        state.expense = payload
    },
    BALANCE(state, payload) {
        state.balance = payload
    },
    EXPENSELIST(state, payload) {
        state.expenselists.push(payload)
    },
}