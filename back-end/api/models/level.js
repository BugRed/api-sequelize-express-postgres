'use strict';
module.exports = (sequelize, DataTypes) => {
  const Level = sequelize.define('Level', {
    descr_level: DataTypes.STRING
  }, {});
  Level.associate = function(models) {
    Level.hasMany(models.SchoolClass, {
      foreignKey: 'level_id'
    });
  };
  return Level;
}; 