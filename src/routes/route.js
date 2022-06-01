const express = require('express');
const externalModule = require('../logger/logger')
const internalModule = require('../util/helper')
const innerModule = require('../validator/formatter')
const router = express.Router();


router.get('/test-me', function (req, res) {
    
    externalModule.welcome()
    internalModule.print()
    innerModule.notes()

    res.send('My first ever api!')
});

module.exports = router;
