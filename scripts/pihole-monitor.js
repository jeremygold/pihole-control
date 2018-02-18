#!/usr/bin/node

var exec = require('child_process').exec;
var admin = require("firebase-admin");
var serviceAccount = require("./pihole-control-private-key.json");

const stateRef = 'pihole-state';

function log(error, stdout, stderr) { 
    console.log("stdout: " + stdout);
}

function addDatabaseCallback() {
    console.log("Adding Database Callback");
    admin.database().ref(stateRef).on('value', function(snapshot) {
        console.log("Dbase change detected - Status is now " + snapshot.val().stat);
        exec("/home/pi/git/pihole-control/scripts/set-config.sh " + snapshot.val().stat, log);
    });
}

var app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://pihole-control.firebaseio.com/"
});

addDatabaseCallback();
