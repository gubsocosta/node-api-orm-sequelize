'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Enrollments', [
      {
        status: "done",
        studentId: 1,
        groupId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "done",
        studentId: 2,
        groupId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "done",
        studentId: 3,
        groupId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "done",
        studentId: 4,
        groupId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "canceled",
        studentId: 1,
        groupId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "canceled",
        studentId: 2,
        groupId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Enrollments', null, {});
  }
};
