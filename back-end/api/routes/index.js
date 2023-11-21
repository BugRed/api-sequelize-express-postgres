const bodyParse = require('body-parser');
const people = require('./peopleRoutes');

module.exports = app =>{
    app.use(bodyParse.json());
    app.use(people);
}