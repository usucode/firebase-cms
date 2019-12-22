import firebase from 'firebase'
import Vue from 'vue'

Vue.config.productionTip = false

// Initialize Firebase
var firebaseConfig = {
  apiKey: 'AIzaSyDXej1rqPHTGJBfPdWJI1Nd57wYZg9YQew',
  authDomain: 'fir-cms-5593c.firebaseapp.com',
  databaseURL: 'https://fir-cms-5593c.firebaseio.com',
  projectId: 'fir-cms-5593c',
  storageBucket: 'fir-cms-5593c.appspot.com',
  messagingSenderId: '731959655977',
  appId: '1:731959655977:web:af6656a3bb3ef91571e638',
  measurementId: 'G-W7FQPXF0CV'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

// Firestore
// const db = firebase.firestore()
// const settings = { timestampsInSnapshots: true }
// db.settings(settings)
// export { db }
