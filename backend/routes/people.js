import { Person } from '../models';
var express = require('express');
var router = express.Router();

/* GET People page. */
router.get('/', function(req, res, next) {
    res.render('people', { title: 'People page' });
});

router.get('/all', function(req, res, next) {
    Person.findAll()
        .then(function (data) {
            res.json(data)
        });
});

router.get('/person/:id', function(req, res, next) {
    Person.findOne({
            raw: true,
            where: {
                id: req.params.id,
            }
        })
        .then(function (data) {
            res.json(data)
        });
});

//http://localhost:3001/people/create/yaroslav/solokha/yaroslav.solokha@gmail.com
router.get('/create/:name/:lastname/:email', function(req, res, next) {
    Person.build({
        'first_name' : req.params.name,
        'last_name' : req.params.lastname,
        'email' : req.params.email
    }).save();
    //@todo add message
});

router.get('/delete/:name', function(req, res, next) {
    Person.findOne({
        where: {
            first_name: req.params.name,
        }
    })
    .then(function (data) {
        data.destroy();
    });
    //@todo add message
});

module.exports = router;