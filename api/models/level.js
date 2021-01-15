'use strict';
module.exports = (sequelize, DataTypes) => {
  const Level = sequelize.define('Levels', {
    description: DataTypes.STRING
  }, {});
  Level.associate = function(models) {
    Level.hasMany(models.Groups);
  };
  return Level;
};