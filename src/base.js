const config = {
    apiKey: "AIzaSyDeiIo15BR6fNB6eGSPhypi7pBYBKPWz4k",
    authDomain: "devpleno-first-app.firebaseapp.com",
    databaseURL: "https://devpleno-first-app.firebaseio.com",
    projectId: "devpleno-first-app",
    storageBucket: "gs://devpleno-first-app.appspot.com",
    messagingSenderId: "468785962232"
}

const Rebase = require('re-base')
const firebase = require('firebase/app')
require('firebase/database')
require('firebase/storage')

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export const storage = app.storage()

export default base
