const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    removeUser

  } = require('../../controllers/userController');
  
  // /api/thoughts
  router.route('/').get(getUsers).post(createUser);
  
  // /api/thoughts/:thoughtsId
  router.route('/:userId').get(getSingleUser).put(updateUser).delete(removeUser);

module.exports = router;
