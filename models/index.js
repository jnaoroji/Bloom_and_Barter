const User = require('./User');
const Swap = require('./Swap');
const Comment = require('./Swap');

User.hasMany(Swap, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Swap.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Swap, Comment };
