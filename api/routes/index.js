const bodyParser = require('body-parser');
const people = require('./peopleRoute');

module.exports = app => {
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
        res
            .status(200)
            .send('Node API with Sequelize ORM v1.0.0');
    });

    app.use(people);
};