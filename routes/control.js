var express = require('express');
var router = express.Router();
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

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

/* Enable pihole. */
router.get('/enable', function(req, res, next) {
    global.stat = "Enabled";
    res.send(global.stat);
});

/* Disable pihole */
router.get('/disable', function(req, res, next) {
    global.stat = "Disabled";
    //res.setHeader('content-type', 'text/plain');
    res.send(global.stat);
});

module.exports = router;
