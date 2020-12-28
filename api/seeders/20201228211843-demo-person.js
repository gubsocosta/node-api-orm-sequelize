'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('People', [
      {
        name: 'John Doe',
        active: false,
        email: 'john@mail.com',
        role: 'student',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gabriel Costa',
        active: true,
        email: 'gabriel@mail.com',
        role: 'teacher',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Maria Beatriz',
        active: true,
        email: 'bia@mail.com',
        role: 'student',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ana Vitoria',
        active: true,
        email: 'vivi@mail.com',
        role: 'student',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Joao Lucas',
        active: true,
        email: 'joao@mail.com',
        role: 'student',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Paulo Deivid',
        active: true,
        email: 'paulo@mail.com',
        role: 'student',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Erick Finamor',
        active: true,
        email: 'erick@mail.com',
        role: 'student',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }
};
