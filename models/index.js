const User = require('./User');
const Swap = require('./Swap');
const Comment = require('./Comment');

User.hasMany(Swap, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Swap.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Swap, Comment };

