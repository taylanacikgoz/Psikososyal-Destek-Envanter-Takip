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

router.get("/personel/:Personel_id", async (req, res, next) => {
  try {
    const Personel = await dataModel.getById(req.params.Personel_id);
    res.status(201).json(Personel);
  } catch (error) {
    next(error);
  }
});

router.delete("/personel/:Personel_id", async (req, res, next) => {
  try {
    await dataModel.deleteById(req.params.Personel_id);
    res.status(201).json({
      message: `${req.params.Personel_id} numaralı Personel silindi.`,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/personel", async (req, res, next) => {
  try {
    const Personel = await dataModel.createPersonel(req.body);
    res.status(201).json(Personel);
  } catch (error) {
    next(error);
  }
});

router.put("/personel/:Personel_id", async (req, res, next) => {
  try {
    const updatedRecord = await dataModel.updatePersonel(
      req.body,
      req.params.Personel_id
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
