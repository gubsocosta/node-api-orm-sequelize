const bodyParser = require('body-parser');

const groups = require('./groupsRoute');
const levels = require('./levelsRoute');
const people = require('./peopleRoute');

module.exports = app => {
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
        res
            .status(200)
            .send('Node API with Sequelize ORM v1.0.0');
    });

    app.use(groups);
    app.use(levels);
    app.use(people);
};