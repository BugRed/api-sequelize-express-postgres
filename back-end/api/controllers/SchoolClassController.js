const database = require("../models");
const people = require("../models/schoolclass");

class SchoolClassController {

  static async getAll(req, res) {
    try {
      const allSchoolClass = await database.SchoolClass.findAll();
      return res.status(200).json({ message: "All SchoolClass view!", schoolclass: allSchoolClass });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const schoolclass = await database.SchoolClass.findOne({ where: { id: Number(id) } });
      return res.status(200).json({ message: "Id found!", schoolclass: schoolclass });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async post(req, res) {
    const newSchoolClass = req.body;
    try {
      const newCreatedSchoolClass = await database.SchoolClass.create(newSchoolClass);
      res.status(201).json(newCreatedSchoolClass);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async put(req, res) {
    const { id } = req.params;
    const newInfo = req.body;
    try {
      await database.SchoolClass.update(newInfo, { where: { id: Number(id) } });
      const updateSchoolClass = await database.SchoolClass.findOne({ where: { id: Number(id) } });
      res.status(200).json({ message: `SchoolClass ${id} update`, schoolclass: updateSchoolClass });
    } catch (error) {
      return res.status(500).json(error.message);
    }

  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      await database.SchoolClass.destroy({ where: { id: Number(id) } });
      res.status(200).json({ message: `SchoolClass ${id} delete successefully!`});
    } catch (error) {
      return res.status(500).json(error.message);
    }

  }
}

module.exports = SchoolClassController;

