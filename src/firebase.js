import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBEoFzxxRiSLg-mhMD1Ct54Cx1pFTyVNrg",
    authDomain: "crud-603f3.firebaseapp.com",
    databaseURL: "https://crud-603f3.firebaseio.com",
    projectId: "crud-603f3",
    storageBucket: "crud-603f3.appspot.com",
    messagingSenderId: "1011272231998",
    appId: "1:1011272231998:web:f150ac9b0449e421e0f56f",
    measurementId: "G-KMJHQ1YGQB"
};
// Initialize Firebase
var fireDb=firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();


