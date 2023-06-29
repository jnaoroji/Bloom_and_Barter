const router = require('express').Router();
const { User, Swap } = require('../models');
const withAuth = require('../utils/auth');
const passport = require ('passport');
const FacebookStrategy = require ('passport-facebook').Strategy;


//gets all existing listings for homepage
router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const swapData = await Swap.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const swaps = swapData.map((swap) => swap.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      swaps,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//gets all existing listings created by user
router.get('/your-swaps', withAuth, async (req, res) => {
  try {
    // Get all swaps and JOIN with user data
    const swapData = await Swap.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const swaps = swapData.map((swap) => swap.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('your-swaps', {
      swaps,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//gets each listing by id
router.get('/swap/:id', async (req, res) => {
  try {
    const swapData = await Swap.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const swap = swapData.get({ plain: true });

    res.render('swap', {
      swap,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/create-swap', withAuth, (req, res) => {
  res.render('create-swap', {
    logged_in: req.session.logged_in,
  });
});

// Edit a swap post
router.get('/edit-swap/:id', withAuth, async (req, res) => {
  try {
    const swapData = await Swap.findByPk(req.params.id, {
      where: { user_id: req.session.user_id },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const swap = swapData.get({ plain: true });

    res.render('edit-swap', {
      swap,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

//Login Via Facebook

router.get('/auth/facebook',
  passport.authenticate('facebook'));
 
router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
    
  async function(req, res) { 
    // Successful authentication, redirect home.
    //gets facebook id (acts as username)
    const userData = req.user.dataValues.FacebookId
      req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.redirect('/');
     
    });

  });


module.exports = router;
