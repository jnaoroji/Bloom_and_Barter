// Creating the route for the comment
const router = require('express').Router();
const { Swap } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a post
router.post('/', withAuth, async (req, res) => {
  try {
    const newSwap = await Swap.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSwap);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a  comment
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const swapData = await Swap.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!swapData) {
      res.status(404).json({ message: 'No Plant found with this id!' });
      return;
    }

    res.status(200).json(swapData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
