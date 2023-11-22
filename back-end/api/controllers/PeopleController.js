const database = require('../models');
const people = require('../models/people');

class PeopleController {

    static async getAll(req, res) {
        try {
            const allPeople = await database.People.findAll();
            return res.status(200).json({ message: "All people view!", people: allPeople });
        } catch (error) {
            return res.stayus(500).json(error.message);
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const people = await database.People.findOne({ where: { id: Number(id) } });
            return res.status(200).json({ message: "Id found!", pople: people })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async post(req, res) {
        const newPeople = req.body;
        try {
            const newCreatedPeople = await database.People.create(newPeople);
            res.status(201).json(newCreatedPeople);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async put(req, res) {
        const { id } = req.params;
        const newInfo = req.body;
        try {
            await database.People.update(newInfo, { where: { id: Number(id) } });
            const updatePeople = await database.People.findOne({ where: { id: Number(id) } });
            res.status(200).json({ message: `People ${id} update`, people: updatePeople });
        } catch (error) {
            return res.status(500).json(error.message);
        }

    };

    static async delete(req, res) {
        const { id } = req.params;
        try {
            await database.People.destroy({ where: { id: Number(id) } });
            res.status(200).json({ message: `People ${id} delete successefully!`});
        } catch (error) {
            return res.status(500).json(error.message);
        }

    };
}

module.exports = PeopleController;

