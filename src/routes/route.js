const express = require('express');
const externalModule = require('../logger/logger')
const internalModule = require('../util/helper')
const innerModule = require('../validator/formatter')
const router = express.Router();
const _ = require('lodash');


router.get('/test-me', function (req, res) {

    externalModule.welcome()
    internalModule.print()
    innerModule.notes()

    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const newArray = _.chunk(months, 4);
    console.log(newArray);

    const oddNumber = [3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
    const lastElement = _.tail(oddNumber);
    console.log(lastElement);
    res.send('My second ever api!')

    const a = [1, 2];
    const b = [2, 3];
    const c = [4, 5];
    const d = [5, 6]
    const e = [6, 7]
    const f = _.union(a, b, c, d, e);
    console.log(f)

    const movies = [['horror' , 'The Shining'], ['comedy', 'the mask'], ['action', 'avengers']];
    const paired = _.fromPairs(movies)
    console.log(paired);
});





module.exports = router;
