var express = require('express');
var router = express.Router();

/* Enable pihole. */
router.get('/enable', function(req, res, next) {
  console.log("Enabling pihole");
  res.send('Enabled');
});

/* Disable pihole */
router.get('/disable', function(req, res, next) {
    console.log("Disabling pihole");
    res.send("Disabled");
});

module.exports = router;
