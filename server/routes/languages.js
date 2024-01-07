const express = require("express");
const router = express.Router();
const languagesController = require("../controllers/languagesController.js");

router.get("/", languagesController.getAllLanguages);
router.get("/getOneLanguage/:id", languagesController.getLanguageById);
router.post("/addLanguage", languagesController.addLanguage);
router.put("/updatelanguage/:id", languagesController.updateLanguage);
router.delete("/deleteLanguage/:id", languagesController.deleteLanguage);

module.exports = router;
