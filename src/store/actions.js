import Vue from "vue";

require("../firebaseConfig.js");
import firebase from "firebase";
import router from "../router";

export const actions = Vue.observable({
    isSidebarOpen: false
});

export default {
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
        } else {
            commit("SET_USER", null)
        }
    },
    SIGN_UP: async ({commit}, payload) => {
        commit('SET_LOADING', true);
        commit('SET_ERROR', false);

        firebase // this is an asynchronous function
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
                        commit('SET_LOADING', false);
                        commit('SET_ERROR', false);
                        router.push({ name: "/login" });
                    });
            })
            .catch(err => {
                this.error = err.message;
                console.log(err);
                console.log(err.message);
            });

    }
}


