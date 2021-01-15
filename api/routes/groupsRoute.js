const { Router } = require('express');
const GroupsController = require('../controllers/GroupsController');

const router = Router();

router.route('/groups')
    .get(GroupsController.getAll)
    .post(GroupsController.create);

router.route('/groups/:id')
    .get(GroupsController.findById)
    .put(GroupsController.update)
    .delete(GroupsController.delete);

module.exports = router;