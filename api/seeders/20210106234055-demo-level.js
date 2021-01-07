'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Levels', [
			{
				description: 'easy',
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				description: 'medium',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				description: 'advanced',
				createdAt: new Date(),
				updatedAt: new Date()
			} 
	], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Levels', null, {});
  }
};
