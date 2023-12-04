const { Router } = require("express");
const LevelController = require("../controllers/LevelController");

const router = Router();

router
  .get("/level", LevelController.getAll)
  .get("/level/:id", LevelController.getById)
  .post("/level", LevelController.post)
  .put("/level/:id", LevelController.put)
  .delete("/level/:id", LevelController.delete);


module.exports = router;