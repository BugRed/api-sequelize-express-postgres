module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('SchoolClasses', [
			{
				date_start: "2020-02-01",
				level_id: 1,
				teaching_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()				 
			},
			{
				date_start: "2020-02-01",
				level_id: 2,
				teaching_id: 5,
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				date_start: "2020-02-01",
				level_id: 3,
				teaching_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()			
				},
			{
				date_start: "2020-07-01",
				level_id: 3,
				teaching_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()			
			}
		], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('SchoolClasses', null, {})
  }
}
