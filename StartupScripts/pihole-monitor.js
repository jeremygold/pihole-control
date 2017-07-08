#!/usr/bin/node

var admin = require("firebase-admin");
var serviceAccount = require("./pihole-control-private-key.json");

const stateRef = 'pihole-state';

function addDatabaseCallback() {
    console.log("Adding Database Callback");
    admin.database().ref(stateRef).on('value', function(snapshot) {
        console.log("Dbase change detected - Status is now " + snapshot.val().stat);
    });
}

var app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://pihole-control.firebaseio.com/"
});

addDatabaseCallback();
