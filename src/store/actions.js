import Vue from "vue";
require("../firebaseConfig.js");

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
    }
};

