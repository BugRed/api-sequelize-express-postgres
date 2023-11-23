const database = require('../models');
const level = require('../models/level');

class LevelController {

    static async getAll(req, res) {
        try {
            const allLevel = await database.Level.findAll();
            return res.status(200).json({ message: "All level view!", level: allLevel });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const level = await database.Level.findOne({ where: { id: Number(id) } });
            return res.status(200).json({ message: "Id found!", level: level })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async post(req, res) {
        const newLevel = req.body;
        try {
            const newCreatedLevel = await database.Level.create(newLevel);
            res.status(201).json(newCreatedLevel);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async put(req, res) {
        const { id } = req.params;
        const newInfo = req.body;
        try {
            await database.Level.update(newInfo, { where: { id: Number(id) } });
            const updateLevel = await database.Level.findOne({ where: { id: Number(id) } });
            res.status(200).json({ message: `Level ${id} update`, level: updateLevel });
        } catch (error) {
            return res.status(500).json(error.message);
        }

    };

    static async delete(req, res) {
        const { id } = req.params;
        try {
            await database.Level.destroy({ where: { id: Number(id) } });
            res.status(200).json({ message: `Level ${id} delete successefully!`});
        } catch (error) {
            return res.status(500).json(error.message);
        }

    };
}

module.exports = LevelController;

