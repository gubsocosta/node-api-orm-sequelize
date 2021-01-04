const database = require('../models');

class PeopleController {
    static async getAll(req, res) {
        try {
            const people = await database.People.findAll();
    
            return res
                .status(200)
                .json(people);
        } catch(error) {
            return res
                .status(500)
                .json(error.message);
        }
    }

    static async findById(req, res) {
        const { id } = req.params;
        try {
            const person = await database
                .People
                .findOne({ 
                    where: { id: Number(id) }
                });
            
            return res
                .status(200)
                .json(person);
        } catch (error) {
            return res
                .status(500)
                .json(error.message);
        }
    }
}

module.exports = PeopleController;