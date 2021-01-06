'use strict';
module.exports = (sequelize, DataTypes) => {
  const Enrollment = sequelize.define('Enrollment', {
    status: DataTypes.STRING
  }, {});
  Enrollment.associate = function(models) {
    Enrollment.belongsTo(models.Person, {
      foreignKey: 'teacherId'
    });

    Enrollment.belongsTo(models.Class, {
      foreignKey: 'classId'
    });
  };
  return Enrollment;
};