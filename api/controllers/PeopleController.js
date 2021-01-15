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
                        where: { id: Number(id) }
                    }
                );
            const person = await database
                .People
                .findOne({
                    where: { id: Number(id) }
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

    static async findEnrollmentById(req, res) {
        const { studentId, enrollmentId } = req.params;

        try {
           const enrollment = await database.Enrollments.findOne({
               where: {
                   id: Number(enrollmentId),
                   studentId: Number(studentId)
               }
           });

           return res.status(200).json(enrollment);
        } catch (error) {
            return res.status(500).json(error.message); 
        }
    }

    static async createEnrollment(req, res) {
        const { studentId } = req.params;
        const newEnrollment = {...req.body, studentId: Number(studentId) };

        try {
            const enrollment = await database.Enrollments.create(newEnrollment);
            return res.status(201).json(enrollment);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateEnrollment(req, res) {
        const { studentId, enrollmentId } = req.params;
        const enrollmentData = req.body;

        try {
            await database.Enrollments.update(
                enrollmentData,
                {
                    where: {
                        id: Number(enrollmentId),
                        studentId: Number(studentId)
                    }
                }
            );

            const enrollment = await database.Enrollments.findOne({
                where: {
                    id: Number(enrollmentId),
                    studentId: Number(studentId)
                }
            });
 
            return res.status(200).json(enrollment);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async deleteEnrollment(req, res) {
        const { enrollmentId } = req.params;

        try {
            await database.Enrollments.destroy({
                where: { id: Number(enrollmentId) }
            });

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PeopleController;