const database = require('../models');

class ClassesController {
    static async getAll(req, res) {
        try {
            const classes = await database.Classes.findAll();
    
            return res.status(200).json(classes);
        } catch(error) {
            return res.status(500).json(error.message); 
        }
    }

    static async findById(req, res) {
        const { id } = req.params;
        try {
            const classroom = await database
                .Classes
                .findOne({ 
                    where: { id: Number(id) }
                });
            
            return res.status(200).json(classroom);
        } catch (error) {
            return res.status(500).json(error.message); 
        }
    }

    static async create(req, res) {
        const classroom = req.body;

        try {
            const newClassroom = await database.Classes.create(classroom);

            return res.status(201).json(newClassroom);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async update(req, res) {
        const { id } = req.params;

        try {
            await database
                .Classes
                .update(
                    req.body,
                    {
                        where: { id: id }
                    }
                );
            const classroom = await database
                .Classes
                .findOne({
                    where: { id: id}
                })
            
            return res.status(200).json(classroom);
        } catch (error) {
            return res.status(500).json(error.message); 
        }
    }

    static async delete(req, res) {
        const { id } = req.params;

        try {
            await database.Classes.destroy({
                where: { id: id }
            });

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json(error.message); 
        }
    }
}

module.exports = ClassesController;