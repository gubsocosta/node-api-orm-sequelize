const database = require('../models');

class PeopleController {
    static async getAll(req, res) {
        try {
            const people = await database.People.findAll();
    
            return res.status(200).json(people);
        } catch(error) {
            return res.status(500).json(error.message); 
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
            
            return res.status(200).json(person);
        } catch (error) {
            return res.status(500).json(error.message); 
        }
    }

    static async create(req, res) {
        const person = req.body;

        try {
            const newPerson = await database.People.create(person);

            return res.status(201).json(newPerson);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async update(req, res) {
        const { id } = req.params;

        try {
            await database
                .People
                .update(
                    req.body,
                    {
                        where: { id: id }
                    }
                );
            const person = await database
                .People
                .findOne({
                    where: { id: id}
                })
            
            return res.status(200).json(person);
        } catch (error) {
            return res.status(500).json(error.message); 
        }
    }

    static async delete(req, res) {
        const { id } = req.params;

        try {
            await database.People.destroy({
                where: { id: id }
            });

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json(error.message); 
        }
    }
}

module.exports = PeopleController;