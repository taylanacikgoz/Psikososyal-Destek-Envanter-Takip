const router = require("express").Router();
const dataModel = require("./getData-model");

router.get("/kurum", async (req, res, next) => {
  try {
    const Kurum = await dataModel.getAll();
    res.status(201).json(Kurum);
  } catch (error) {
    next(error);
  }
});

router.use((error, req, res, next) => {
  res.status(400).json(error);
});

module.exports = router;
