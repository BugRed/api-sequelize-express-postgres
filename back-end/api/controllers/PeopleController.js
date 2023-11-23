const database = require('../models');
const people = require('../models/people');

class PeopleController {

    static async getAll(req, res) {
        try {
            const allPeople = await database.People.findAll();
            return res.status(200).json({ message: "All people view!", people: allPeople });
        } catch (error) {
            return res.status(500).json(error.message);
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
            res.status(200).json({ message: `People ${id} delete successefully!` });
        } catch (error) {
            return res.status(500).json(error.message);
        }

    };

    static async getByRegistration(req, res) {
        const { studentId, registrationId } = req.params;
        try {
            const registration = await database.Registration.findOne({
                where: {
                    id: Number(registrationId),
                    student_id: Number(studentId)
                }
            });
            return res.status(200).json({ message: "Id found!", registration: registration })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static async postRegistration(req, res) {
        const { studentId } = req.params;
        const newRegistration = { ...req.body, student_id: Number(studentId) };
        try {
            const newCreatedRegistration = await database.Registration.create(newRegistration);
            res.status(201).json(newCreatedRegistration);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static async putRegistration(req, res) {
        const { studentId, registrationId } = req.params;
        const newInfo = req.body;
        try {
            await database.Registration.update(newInfo, {
                where: {
                    id: Number(registrationId),
                    student_id: Number(studentId)
                }
            });
            const updateRegistration = await database.Registration.findOne({ where: { id: Number(registrationId) } });
            res.status(200).json({ message: `registration ${registrationId} update`, registration: updateRegistration });
        } catch (error) {
            return res.status(500).json(error.message);
        }

    };

    static async deleteRegistration(req, res) {
        const { studentId, registrationId } = req.params;
        try {
            await database.Registration.destroy({
                where: {
                    id: Number(registrationId),
                    student_id: Number(studentId)
                }
            });
            res.status(200).json({ message: `Registration ${registrationId} delete successefully!` });
        } catch (error) {
            return res.status(500).json(error.message);
        }

    };
}

module.exports = PeopleController;

