var express = require('express');
var router = express.Router();

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
