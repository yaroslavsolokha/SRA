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

//http://localhost:3001/people/person/yaroslav.solokha@gmail.com
router.get('/person/:email', function(req, res, next) {
    Person.findOne({
            raw: true,
            where: {
                email: req.params.email,
            }
        })
        .then(function (data) {
            res.json(data)
        });
});

//http://localhost:3001/people/create/Yaroslav/Solokha/yaroslav.solokha@gmail.com
router.get('/create/:name/:lastname/:email', function(req, res, next) {
    Person.sync().then(function() {
        let data = {
            'first_name' : req.params.name,
            'last_name' : req.params.lastname,
            'email' : req.params.email
        };

        Person.create(data).then(function(post) {
            res.send(data);
        })
    });
});

//http://localhost:3001/people/delete/yaroslav.solokha@gmail.com
router.get('/delete/:email', function(req, res, next) {
    Person.findOne({
        where: {
            email: req.params.email,
        }
    })
    .then(function (data) {
        data.destroy();
        res.send('removed');
    });
});

module.exports = router;