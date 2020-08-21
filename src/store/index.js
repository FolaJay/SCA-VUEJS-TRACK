
// State is an object that holds all your global objects/arrays/variables for your app. It allows you to set the userProfile object as a global object for the app, so you can access its properties on multiple views.
import Vue from "vue";
import Vuex from "vuex";

require('../firebaseConfig.js')   
// import the firebaseConfig file.

import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);

export const action = Vue.observable({
    isSidebarOpen: false
});
const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})

export default store;


