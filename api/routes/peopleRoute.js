const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController');

const router = Router();

router.route('/people')
    .get(PeopleController.getAll)
    .post(PeopleController.create);

router.route('/people/:id')
    .get(PeopleController.findById)
    .put(PeopleController.update)
    .delete(PeopleController.delete);

module.exports = router;