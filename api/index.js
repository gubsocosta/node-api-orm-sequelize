const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/',
    (req, res) => res
        .status(200)
        .send({ message: 'Welcome the API ORM Sequelize' })
);

app.listen(port, () => console.log(`Server listening in ${port}`));

module.exports = app;