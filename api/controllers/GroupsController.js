const database = require('../models');

class GroupsController {
    static async getAll(req, res) {
        try {
            const groups = await database.Groups.findAll();
    
            return res.status(200).json(groups);
        } catch(error) {
            return res.status(500).json(error.message); 
        }
    }

    static async findById(req, res) {
        const { id } = req.params;
        try {
            const group = await database
                .Groups
                .findOne({ 
                    where: { id: Number(id) }
                });
            
            return res.status(200).json(group);
        } catch (error) {
            return res.status(500).json(error.message); 
        }
    }

    static async create(req, res) {
        const group = req.body;

        try {
            const newGroup = await database.Groups.create(group);

            return res.status(201).json(newGroup);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async update(req, res) {
        const { id } = req.params;

        try {
            await database
                .Groups
                .update(
                    req.body,
                    {
                        where: { id: id }
                    }
                );
            const group = await database
                .Groups
                .findOne({
                    where: { id: id}
                })
            
            return res.status(200).json(group);
        } catch (error) {
            return res.status(500).json(error.message); 
        }
    }

    static async delete(req, res) {
        const { id } = req.params;

        try {
            await database.Groups.destroy({
                where: { id: id }
            });

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json(error.message); 
        }
    }
}

module.exports = GroupsController;