const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController');

const router = Router();

router
.get('/people', PeopleController.getAll)
.get('/people/:id', PeopleController.getById)
.post('/people', PeopleController.post)
.put('/people/:id', PeopleController.put)
.delete('/people/:id', PeopleController.delete)


module.exports = router;