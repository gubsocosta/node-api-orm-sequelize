const bodyParser = require('body-parser');

const groups = require('./groupsRoute');
const levels = require('./levelsRoute');
const people = require('./peopleRoute');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.get('/', (req, res) => {
        res
            .status(200)
            .send('Node API with Sequelize ORM v1.0.0');
    });

    app.use(groups, levels, people);
};