const router = require('express').Router();
const postRoutes = require('./postRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/posts', postRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
