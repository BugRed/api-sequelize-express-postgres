"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("SchoolClasses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_start: {
        type: Sequelize.DATEONLY
      },
      teaching_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "People", key: "id"}
      },
      level_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Level", key: "id"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("SchoolClasses");
  }
};