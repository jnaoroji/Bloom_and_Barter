//creating the route for the user
const router = require('express').Router();
const passport = require('passport');

const userRoutes = require('./userRoutes');
const swapRoutes = require('./swapRoutes');
//const apiRoutes = require('./api');

// Login with Facebook
router.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook callback URL
router.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/your-swaps',
    failureRedirect: '/login',
  })
);

router.use('/users', userRoutes);
router.use('/swaps', swapRoutes);
router.use('/profile', swapRoutes);

module.exports = router;
