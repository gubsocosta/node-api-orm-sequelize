const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController');

const router = Router();

router.route('/people')
    .get(PeopleController.getAll)
    .post(PeopleController.create);

router.route('/people/:id')
    .get(PeopleController.findById)
    // .update(PeopleController.findById)
    // .delete(PeopleController.findById);

module.exports = router;