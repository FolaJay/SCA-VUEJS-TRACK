
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
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

firebase.auth().onAuthStateChanged(user => {
    store.dispatch("login", user);
});


// date issue fix according to firebase
// const settings = {
//     timestampsInSnapshots: true
// }
// db.settings(settings)

// firebase collections
const expensesCollection = db.collection('Expenses');
const customerCollection = db.collection('Customers');
// const commentsCollection = db.collection('comments')
// const likesCollection = db.collection('likes')

export {
    db,
    auth,
    user,
    expensesCollection,
    customerCollection
    // postsCollection,
    // commentsCollection,
    // likesCollection
}

