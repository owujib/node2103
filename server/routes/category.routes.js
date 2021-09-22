const {
  getAllCategory,
  create,
  getAllCategoryAndPost,
} = require('../controller/categoryController');
const { roles } = require('../controller/authController');
const router = require('express').Router();

router.get('/', getAllCategory);
router.get('/posts/:id', getAllCategoryAndPost);

router.post('/new', roles('user'), create);

module.exports = router;
