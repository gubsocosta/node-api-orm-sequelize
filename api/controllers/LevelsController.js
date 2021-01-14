const database = require('../models');

class LevelsController {
    static async getAll(req, res) {
        try {
            const levels = await database.Levels.findAll();
    
            return res.status(200).json(levels);
        } catch(error) {
            return res.status(500).json(error.message); 
        }
    }

    static async findById(req, res) {
        const { id } = req.params;
        try {
            const level = await database
                .Levels
                .findOne({ 
                    where: { id: Number(id) }
                });
            
            return res.status(200).json(level);
        } catch (error) {
            return res.status(500).json(error.message); 
        }
    }

    static async create(req, res) {
        const level = req.body;

        try {
            const newPerson = await database.Levels.create(level);

            return res.status(201).json(newPerson);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async update(req, res) {
        const { id } = req.params;

        try {
            await database
                .Levels
                .update(
                    req.body,
                    {
                        where: { id: id }
                    }
                );
            const level = await database
                .Levels
                .findOne({
                    where: { id: id}
                })
            
            return res.status(200).json(level);
        } catch (error) {
            return res.status(500).json(error.message); 
        }
    }

    static async delete(req, res) {
        const { id } = req.params;

        try {
            await database.Levels.destroy({
                where: { id: id }
            });

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json(error.message); 
        }
    }
}

module.exports = LevelsController;