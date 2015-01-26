var express = require('express');
var router = express.Router();

var Controller = require('../controller/<%= name %>');

router.get('/',Controller.get);
router.post('/',Controller.post);

module.exports = router;

