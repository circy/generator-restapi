var express = require('express');
var router = express.Router();

var Controller = require('../controller/<%= name %>');

router.get('/:name',Controller.get);
router.post('/:name',Controller.post);

module.exports = router;

