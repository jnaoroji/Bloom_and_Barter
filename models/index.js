const User = require('./User');
const Swap = require('./Swap');

User.hasMany(Swap, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Swap };
