"use strict";
module.exports = (sequelize, DataTypes) => {
  const SchoolClass = sequelize.define("SchoolClass", {
    date_start: DataTypes.DATEONLY
  }, {});
  SchoolClass.associate = function(models) {
    SchoolClass.hasMany(models.Registration, {
      foreignKey: "schoolclass_id"
    });
    SchoolClass.belongsTo(models.People, {
      foreignKey: "teaching_id"
    });
    SchoolClass.belongsTo(models.Level, {
      foreignKey: "level_id"
    });
  };
  return SchoolClass;
};