
import firebase from 'firebase'
import 'firebase/firestore'
import store from './store'

// firebase init
const config ={
    apiKey: "AIzaSyAs5K7YXyi3Jwaum0EAE6-gC3hvouL5ofw",
    authDomain: "expense-app-f21c2.firebaseapp.com",
    databaseURL: "https://expense-app-f21c2.firebaseio.com",
    projectId: "expense-app-f21c2",
    storageBucket: "expense-app-f21c2.appspot.com",
}
firebase.initializeApp(config);


// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const user = auth.user;

firebase.auth().onAuthStateChanged(async user => {
    await store.dispatch("login", user);
});


// date issue fix according to firebase
// const settings = {
//     timestampsInSnapshots: true
// }
// db.settings(settings)

// firebase collections
const expensesCollection = db.collection('Expenses');
const incomeCollection = db.collection('Income');
const budgetCollection = db.collection('Budget');
const savingCollection = db.collection('Savings');


// const commentsCollection = db.collection('comments')
// const likesCollection = db.collection('likes')

export {
    db,
    auth,
    user,
    expensesCollection,
    incomeCollection,
    budgetCollection,
    savingCollection,
    // commentsCollection,
    // likesCollection
}

