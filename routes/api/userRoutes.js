const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
  } = require('../../controllers/userController');
  
  // /api/thoughts
  router.route('/').get(getUsers).post(createUser);
  
  // /api/thoughts/:thoughtsId
  router.route('/:userId').get(getSingleUser);

module.exports = router;
