const sequelize = require('../config/connection');
const { User, Swap, Comment } = require('../models');

const userData = require('./userData.json');
const swapData = require('./swapData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const swap of swapData) {
    await Swap.create({
      ...swap,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  
  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  // for (const comment of commentData) {
  //   await Comment.create(comment);
  // }

  process.exit(0);
};

seedDatabase();
