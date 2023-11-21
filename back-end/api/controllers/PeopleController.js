const database = require('../models');

class PeopleController {

    static async getAll(req, res) {
        try {
            const allPeople = await database.People.findAll();
            return res.status(200).json({ message: "All people view!", people: allPeople });
        }
        catch(error){
            return res.stayus(500).json(error.message);
        }
    }

};

module.exports = PeopleController;

