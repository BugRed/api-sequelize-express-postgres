const { Router } = require('express');
const SchoolClassController = require('../controllers/SchoolClassController');

const router = Router();

router
.get('/schoolclass', SchoolClassController.getAll)
.get('/schoolclass/:id', SchoolClassController.getById)
.post('/schoolclass', SchoolClassController.post)
.put('/schoolclass/:id', SchoolClassController.put)
.delete('/schoolclass/:id', SchoolClassController.delete)


module.exports = router;