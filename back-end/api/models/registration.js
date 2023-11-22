'use strict';
module.exports = (sequelize, DataTypes) => {
  const Registration = sequelize.define('Registration', {
    status: DataTypes.STRING
  }, {});
  Registration.associate = function(models) {
    Registration.belongsTo(models.People, {
      foreignKey: 'student_id'
    });
    Registration.belongsTo(models.SchoolClass, {
      foreignKey: 'schoolclass_id'
    });
  };
  return Registration;
}; 