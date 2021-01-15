'use strict';
module.exports = (sequelize, DataTypes) => {
  const Enrollment = sequelize.define('Enrollments', {
    status: DataTypes.STRING
  }, {});
  Enrollment.associate = function(models) {
    Enrollment.belongsTo(models.People, {
      foreignKey: 'teacherId'
    });

    Enrollment.belongsTo(models.Groups, {
      foreignKey: 'groupId'
    });
  };
  return Enrollment;
};