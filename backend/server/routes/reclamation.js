const express = require("express");
const router = express.Router();
const reclamationControlleur = require("../controllers/reclamationControlleur");

router.get("/getAll", reclamationControlleur.getAllRec);
router.post("/add", reclamationControlleur.addRec);
router.delete("/del/:id", reclamationControlleur.deleteRec);

module.exports = router;
