const bodyParse = require('body-parser');
const people = require('./peopleRoutes');
const level = require('./levelRoutes');
const schoolclass = require('./schoolclassRoutes');

module.exports = app =>{
    app.use(bodyParse.json(),
            people,
            level,
            schoolclass);
}