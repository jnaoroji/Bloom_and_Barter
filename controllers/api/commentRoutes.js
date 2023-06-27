// Creating the route for the comment
const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");
const helpers = require('../../utils/helpers');

// Get all swaps
router.get('/', async (req, res) => {
  res.render('all'),
});

// Get specific swap
router.get('/swap/:num', async (req, res) =>{
  return res.render('dish', dishes[req.params.num - 1]);
})

// Create a new comment
router.post("/", withAuth, async (req, res) => {
  try {    
    
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a comment
router.delete('/:id', async (req, res) => {
  // deleting a comment using the "id"
  await Comment.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.json({ success: true });
});

// Update a comment
router.put('/:id', async (req, res) => {
  try {
    await Comment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});

module.exports = router;
