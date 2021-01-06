'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('People', {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  Person.associate = function(models) {
    Person.hasMany(models.Class, {
      foreignKey: 'teacherId'
    });
    Person.hasMany(models.Enrollment, {
      foreignKey: 'studentId'
    });
  };
  return Person;
};