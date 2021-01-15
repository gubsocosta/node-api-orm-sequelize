'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('People', {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  Person.associate = function(models) {
    Person.hasMany(models.Groups, {
      foreignKey: 'teacherId'
    });
    Person.hasMany(models.Enrollments, {
      foreignKey: 'studentId'
    });
  };
  return Person;
};