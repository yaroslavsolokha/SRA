var express = require('express');
var router = express.Router();

/* GET People page. */
router.get('/', function(req, res, next) {
    res.render('people', { title: 'People page' });
});

module.exports = router;