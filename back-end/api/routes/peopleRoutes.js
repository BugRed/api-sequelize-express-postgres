const { Router } = require("express");
const PeopleController = require("../controllers/PeopleController");

const router = Router();

router
  .get("/people", PeopleController.getAll)
  .get("/people/:id", PeopleController.getById)
  .post("/people", PeopleController.post)
  .put("/people/:id", PeopleController.put)
  .delete("/people/:id", PeopleController.delete)
  .get("/people/:studentId/registration/:registrationId", PeopleController.getByRegistration)
  .post("/people/:studentId/registration", PeopleController.postRegistration)
  .put("/people/:studentId/registration/:registrationId", PeopleController.putRegistration)
  .delete("/people/:studentId/registration/:registrationId", PeopleController.deleteRegistration);



module.exports = router;