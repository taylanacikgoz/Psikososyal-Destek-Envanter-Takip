const router = require("express").Router();
const dataModel = require("./getData-model");

router.get("/hizmet", async (req, res, next) => {
  try {
    const Hizmet = await dataModel.getAll();
    res.status(201).json(Hizmet);
  } catch (error) {
    next(error);
  }
});

router.get("/hizmet/:Hizmet_id", async (req, res, next) => {
  try {
    const Hizmet = await dataModel.getById(req.params.Hizmet_id);
    res.status(201).json(Hizmet);
  } catch (error) {
    next(error);
  }
});

router.delete("/hizmet/:Hizmet_id", async (req, res, next) => {
  try {
    await dataModel.deleteById(req.params.Hizmet_id);
    res.status(201).json({
      message: `${req.params.Hizmet_id} numaralı Hizmet silindi.`,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/hizmet", async (req, res, next) => {
  try {
    const Hizmet = await dataModel.createHizmet(req.body);
    res.status(201).json(Hizmet);
  } catch (error) {
    next(error);
  }
});

router.put("/hizmet/:Hizmet_id", async (req, res, next) => {
  try {
    const updatedRecord = await dataModel.updateHizmet(
      req.body,
      req.params.Hizmet_id
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
