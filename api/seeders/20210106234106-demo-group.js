'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Groups', [
			{
				startAt: "2020-02-01",
				levelId: 1,
				teacherId: 6,
				createdAt: new Date(),
				updatedAt: new Date()				 
			},
			{
				startAt: "2020-02-01",
				levelId: 2,
				teacherId: 5,
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				startAt: "2020-02-01",
				levelId: 3,
				teacherId: 6,
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				startAt: "2020-07-01",
				levelId: 3,
				teacherId: 6,
				createdAt: new Date(),
				updatedAt: new Date()			
			}
		], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Groups', null, {});
  }
};
