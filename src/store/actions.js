import Vue from "vue";
require("../firebaseConfig.js");
import { incomeCollection } from "../firebaseConfig";
import { expensesCollection } from "../firebaseConfig";
import firebase from "firebase";
import router from '../router'

export const actions = Vue.observable ({
    isSidebarOpen: false
});

export default {
    // actions can be asynchronous or synchronus
     // login action commits the SET_LOGGED_IN and SET_USER mutations defined
    login({commit}, user) {
        commit("SET_LOGGED_IN", user !== null);
        if (user)  {
            commit("SET_USER", {
                data: {
                    displayName: user.displayName,
                    email:user.email
                    
                },
                loggedIn: true
            });
        }else {
            commit("SET_USER", null)
        }
    },
    signUp: async ({commit}, payload) => {
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
                commit('SET_ERROR', false);
                router.push({ name: "login" });
            });
        }).catch(err => {
            console.log(err.message)
        })
        
    },
    sumExpenses (state, payload) {
        state.commit('SUM_EXPENSE', payload)
    },
    getIncome: async ({commit}) => {
        let total = 0;
        firebase.auth().onAuthStateChanged((user) => {
          incomeCollection.where("customerId", "==", user.uid)
            .get()
            .then(querySnapshot =>  {
                querySnapshot.forEach(doc => {
                  const data = doc.data() 
                  total  += parseFloat(data.income)  
                })
                commit('TOTAL_INCOME', total);
            })
            .catch((error) => {
            console.log("Error getting documents: ", error);
          });
          
        });
    },
    getExpenses: async ({commit}) =>  {
        let totalExpense = 0;
        let balance = 0;
        let expenseLists = [];
        let total = 0;
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
                balance = parseFloat(total) - parseFloat(totalExpense) 
                console.log(balance)
            }
            commit('TOTAL_EXPENSE', totalExpense);
            commit('BALANCE', balance);
          }).catch((error) => {
          console.log("Error getting documents: ", error);
          });
        });
      },
      getExpenseList: async ({commit}) => {   
         let expenseLists  = [];
         firebase.auth().onAuthStateChanged((user) => {
            expensesCollection.where("customerId", "==", user.uid)
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(doc => {
                expenseLists.push(doc.data()); 
                console.log(expenseLists) 
              });
            commit('EXPENSELIST', expenseLists);
            commit('SET_LOADING', false);
            }).catch((error) => {
            console.log("Error getting documents: ", error);
            });
          });
              
      }
};

