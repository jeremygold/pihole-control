var express = require('express');
var router = express.Router();

/* Enable pihole. */
router.get('/enable', function(req, res, next) {
    console.log("Enabling pihole");
    global.stat = "Enabled";
    res.send(global.stat);
});

/* Disable pihole */
router.get('/disable', function(req, res, next) {
    console.log("Disabling pihole");
    global.stat = "Disabled";
    res.send(global.stat);
});

module.exports = router;
