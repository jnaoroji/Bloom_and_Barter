const router = require('express').Router();
const { User, Swap } = require('../models');
const withAuth = require('../utils/auth');

// Get all homepage
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

    req.session.save(() => {
        // Set up session to count the number of times the user visits
        if (req.session.countVisit) {
          // If the 'countVisit' session variable already exists, increment it by 1
          req.session.countVisit++;
        } else {
          // If the 'countVisit' session variable doesn't exist, set it to 1
          req.session.countVisit = 1;
        }
  
        res.render('homepage', {
          swaps,
          // We send over the current 'countVisit' session variable to be rendered
          countVisit: req.session.countVisit,
        });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// Get a swap
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
      ...swap,
      logged_in: req.session.logged_in
      //countVisit: req.session.countVisit, ---ADD THIS TO COUNT THE VISITS
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
      //countVisit: req.session.countVisit, ---ADD THIS TO COUNT THE VISITS
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;