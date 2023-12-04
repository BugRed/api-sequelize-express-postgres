module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Registrations", [
      {
        status: "confirmado",
        student_id: 1,
        schoolclass_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "confirmado",
        student_id: 2,
        schoolclass_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "confirmado",
        student_id: 3,
        schoolclass_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "confirmado",
        student_id: 4,
        schoolclass_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "cancelado",
        student_id: 1,
        schoolclass_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "cancelado",
        student_id: 2,
        schoolclass_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Registrations", null, {});
  }
};
