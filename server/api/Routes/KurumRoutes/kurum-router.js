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

router.get("/kurum/:Kurum_id", async (req, res, next) => {
  try {
    const Kurum = await dataModel.getById(req.params.Kurum_id);
    res.status(201).json(Kurum);
  } catch (error) {
    next(error);
  }
});

router.delete("/kurum/:Kurum_id", async (req, res, next) => {
  try {
    await dataModel.deleteById(req.params.Kurum_id);
    res.status(201).json({
      message: `${req.params.Kurum_id} numaralı Kurum silindi.`,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/kurum", async (req, res, next) => {
  try {
    const Kurum = await dataModel.createKurum(req.body);
    res.status(201).json(Kurum);
  } catch (error) {
    next(error);
  }
});

router.put("/kurum/:Kurum_id", async (req, res, next) => {
  try {
    const updatedRecord = await dataModel.updateKurum(
      req.body,
      req.params.Kurum_id
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
