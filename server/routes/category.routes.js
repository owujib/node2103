const { getAllCategory, create } = require('../controller/categoryController');
const { roles } = require('../controller/authController');
const router = require('express').Router();

router.get('/', getAllCategory);

router.post('/new', roles('user'), create);

module.exports = router;
