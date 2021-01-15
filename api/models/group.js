'use strict';
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Groups', {
    startAt: DataTypes.DATEONLY
  }, {});
  Class.associate = function(models) {
    Class.belongsTo(models.People, {
      foreignKey: 'teacherId'
    });

    Class.belongsTo(models.Levels, {
      foreignKey: 'levelId'
    });

    Class.hasMany(models.Enrollments, {
      foreignKey: 'groupId'
    });
  };
  return Class;
};