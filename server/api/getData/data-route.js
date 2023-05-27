const router = require("express").Router();
const dataModel = require("./getData-model");

router.get("/personel", async (req, res, next) => {
  try {
    const Personel = await dataModel.getAll();
    res.status(201).json(Personel);
  } catch (error) {
    next(error);
  }
});

router.use((error, req, res, next) => {
  res.status(400).json(error);
});

module.exports = router;
