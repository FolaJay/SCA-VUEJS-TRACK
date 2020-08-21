import Vue from "vue";
require("../firebaseConfig.js");
import { incomeCollection } from "../firebaseConfig";
import { expensesCollection } from "../firebaseConfig";
import { budgetCollection } from "../firebaseConfig";
import firebase from "firebase";
import router from '../router'

export const actions = Vue.observable({
  isSidebarOpen: false
});

export default {
  // actions can be asynchronous or synchronus
  // login action commits the SET_LOGGED_IN and SET_USER mutations defined
  login({ commit }, user) {
    commit("SET_LOGGED_IN", user !== null);
    if (user) {
      commit("SET_USER", {
        data: {
          displayName: user.displayName,
          email: user.email

        },
        loggedIn: true
      });
    } else {
      commit("SET_USER", null)
    }
  },
  logIn: async ({ commit}, payload) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(
        payload.email,
        payload.password,
      )
      .then(() => {
        if (this.$store.getters.isLoggedIn) {
          this.$router.push({ name: "dashboard" });
        } 
        commit('SET_LOADING', true);
        commit('SET_ERROR', false);
      }).catch(err => {
        commit('SHOW_ERROR', err);
      })
  },
  signUp: async ({ commit }, payload) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(function () {
        const user = firebase.auth().currentUser;
        user
          .updateProfile({
            displayName: payload.username
          })
          .then(() => {
            console.log(user);
            commit('SET_LOADING', true);
            router.push({ name: "login" });
          });
      }).catch(err => {
        commit('SHOW_ERROR', err);
      })

  },
  sumExpenses(state, payload) {
    state.commit('SUM_EXPENSE', payload)
  },
  getIncome: async ({ commit }) => {
    let total = 0;
    firebase.auth().onAuthStateChanged((user) => {
      incomeCollection.where("customerId", "==", user.uid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const data = doc.data()
            total += parseFloat(data.income)
          })
          commit('TOTAL_INCOME', total);
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });

    });
  },
  getExpenses: async ({ commit }) => {
    let totalExpense = 0;
    let expenseLists = [];
    let i;
    firebase.auth().onAuthStateChanged((user) => {
      expensesCollection.where("customerId", "==", user.uid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            expenseLists.push(doc.data());
            console.log(expenseLists)
          });
          for (i = 0; i < expenseLists.length; i++) {
            totalExpense += parseFloat(expenseLists[i].amount)
            console.log(totalExpense)
          }
          commit('TOTAL_EXPENSE', totalExpense);
          commit('EXPENSELIST', expenseLists);
          commit('SET_LOADING', true);
        }).catch((error) => {
          console.log("Error getting documents: ", error);
        });
    });
  },
  getBudget: async ({ commit }) => {
    let totalBudget = 0;
    let budgetLists = [];
    let i;
    firebase.auth().onAuthStateChanged((user) => {
      budgetCollection.where("customerId", "==", user.uid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            budgetLists.push(doc.data());
          });
          for (i = 0; i < budgetLists.length; i++) {
            totalBudget += parseFloat(budgetLists[i].amount)
          }
          commit('TOTAL_BUDGET', totalBudget);
          commit('BUDGETLIST', budgetLists);
          commit('SET_LOADING', true);
        }).catch((error) => {
          console.log("Error getting documents: ", error);
        });
    });
  },
};

