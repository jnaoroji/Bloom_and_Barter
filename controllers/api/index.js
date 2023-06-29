//creating the route for the user
const router = require('express').Router();

const userRoutes = require('./userRoutes');
const swapRoutes = require('./swapRoutes');
//const apiRoutes = require('./api');

router.use('/users', userRoutes);
router.use('/swaps', swapRoutes);
router.use('/profile', swapRoutes);


module.exports = router;
