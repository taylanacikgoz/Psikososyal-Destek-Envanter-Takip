const router = require("express").Router();
const dataModel = require("./getData-model");

router.get("/envanter", async (req, res, next) => {
  try {
    const Envanter = await dataModel.getAll();
    res.status(201).json(Envanter);
  } catch (error) {
    next(error);
  }
});

router.get("/envanter/:Envanter_id", async (req, res, next) => {
  try {
    const Envanter = await dataModel.getById(req.params.Envanter_id);
    res.status(201).json(Envanter);
  } catch (error) {
    next(error);
  }
});

router.delete("/envanter/:Envanter_id", async (req, res, next) => {
  try {
    await dataModel.deleteById(req.params.Envanter_id);
    res.status(201).json({
      message: `${req.params.Envanter_id} numaralı Envanter silindi.`,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/envanter", async (req, res, next) => {
  try {
    const Envanter = await dataModel.createEnvanter(req.body);
    res.status(201).json(Envanter);
  } catch (error) {
    next(error);
  }
});

router.put("/envanter/:Envanter_id", async (req, res, next) => {
  try {
    const updatedRecord = await dataModel.updateEnvanter(
      req.body,
      req.params.Envanter_id
    );
    res.json(updatedRecord);
  } catch (error) {
    next(error);
  }
});

router.use((error, req, res, next) => {
  res.status(400).json(error);
});

module.exports = router;
