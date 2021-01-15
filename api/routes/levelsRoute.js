const { Router } = require('express');
const LevelsController = require('../controllers/LevelsController');

const router = Router();

router.route('/levels')
    .get(LevelsController.getAll)
    .post(LevelsController.create);

router.route('/levels/:id')
    .get(LevelsController.findById)
    .put(LevelsController.update)
    .delete(LevelsController.delete);

module.exports = router;