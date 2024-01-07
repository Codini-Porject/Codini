const Language = require("../models/languages.js");

const getAllLanguages = async (req, res) => {
  try {
    const languages = await Language.findAll();
    res.json(languages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const getLanguageById = async (req, res) => {
  const { id } = req.params;
  try {
    const language = await Language.findByPk(id);
    if (!language) {
      return res.status(404).json({ message: "Language not found" });
    }
    res.json(language);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const updateLanguage = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const language = await Language.findByPk(id);
    if (!language) {
      return res.status(404).json({ message: "Language not found" });
    }
    await language.update({ name });
    res.json({ message: "Language updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const deleteLanguage = async (req, res) => {
  const { id } = req.params;
  try {
    const language = await Language.findByPk(id);
    if (!language) {
      return res.status(404).json({ message: "Language not found" });
    }
    await language.destroy();
    res.json({ message: "Language deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const addLanguage = async (req, res) => {
  const { name } = req.body;
  try {
    const newLanguage = await Language.create({ name });
    res.status(201).json(newLanguage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  getAllLanguages,
  getLanguageById,
  updateLanguage,
  deleteLanguage,
  addLanguage,
};
