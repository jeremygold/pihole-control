var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log("Checking Status");
    console.log(global.stat);
    res.send(global.stat);
});

module.exports = router;
