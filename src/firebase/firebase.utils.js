import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {

    apiKey: "AIzaSyDT3frQX_MrAzJsU8fY88jEyaMIKzUhe7c",
    authDomain: "clothingstoredb.firebaseapp.com",
    databaseURL: "https://clothingstoredb.firebaseio.com",
    projectId: "clothingstoredb",
    storageBucket: "clothingstoredb.appspot.com",
    messagingSenderId: "846189006462",
    appId: "1:846189006462:web:d087ac90250c2fe6d7922f",
    measurementId: "G-SZBN6E41B6"

}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase