'use strict';
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    startAt: DataTypes.DATEONLY
  }, {});
  Class.associate = function(models) {
    Class.belongsTo(models.Person, {
      foreignKey: 'studentId'
    });

    Class.belongsTo(models.Level, {
      foreignKey: 'levelId'
    });

    Class.hasMany(models.Enrollment, {
      foreignKey: 'classId'
    });
  };
  return Class;
};