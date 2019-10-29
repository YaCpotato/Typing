import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
        apiKey: "AIzaSyAhOYwlPhnftzKYTv4N61DfBSdVZMTnTQ8",
        authDomain: "vue-typinng.firebaseapp.com",
        databaseURL: "https://vue-typinng.firebaseio.com",
        projectId: "vue-typinng",
        storageBucket: "vue-typinng.appspot.com",
        messagingSenderId: "790852671532",
        appId: "1:790852671532:web:441739608f841c38849989"
    }    
  )
}

export default firebase