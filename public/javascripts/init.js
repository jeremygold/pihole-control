// Initialize Firebase
var config = {
    apiKey: "AIzaSyD7BweyD6hJYW4NqTULbxw0MdyoWg6jftg",
    authDomain: "pihole-control.firebaseapp.com",
    databaseURL: "https://pihole-control.firebaseio.com",
    projectId: "pihole-control",
    storageBucket: "pihole-control.appspot.com",
    messagingSenderId: "210194800964"
};
firebase.initializeApp(config);
document.addEventListener('DOMContentLoaded', _ => initialize());

