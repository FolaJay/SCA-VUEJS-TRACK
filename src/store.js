
// State is an object that holds all your global objects/arrays/variables for your app. It allows you to set the userProfile object as a global object for the app, so you can access its properties on multiple views.
import Vue from "vue";
import Vuex from "vuex";

require('./firebaseConfig.js')   
// import the firebaseConfig file.

Vue.use(Vuex);

export default new Vuex.Store({
    // Add the properties to the state object.
    state: {
        user: {
            loggedIn: false, // tells us whether the user has been authenticated or not
            data: null   // holds information about the logged-in user
        }
    },
    getters: {
        user(state){
            return state.user
        },
        isLoggedIn(state) {
            return state.user.loggedIn; // get logged in from user
        }
    },
    // login action commits the SET_LOGGED_IN and SET_USER mutations defined
    actions: {
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
        }
    },

    // Create the setCurrentUser and setUserProfile mutations to update the user in the state object.
    mutations: {
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
        }
        
    }
})


