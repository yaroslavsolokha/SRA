var express = require('express');
var router = express.Router();

/* GET Custom page. */
router.get('/', function(req, res, next) {
    res.render('custom', { title: 'Custom page' });
});

module.exports = router;