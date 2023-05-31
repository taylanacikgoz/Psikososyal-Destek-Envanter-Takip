const router = require("express").Router();
const dataModel = require("./getData-model");

router.get("/merkez", async (req, res, next) => {
  try {
    const Merkez = await dataModel.getAll();
    res.status(201).json(Merkez);
  } catch (error) {
    next(error);
  }
});

router.delete("/merkez/:Merkez_id", async (req, res, next) => {
  try {
    await dataModel.deleteById(req.params.Merkez_id);
    res
      .status(201)
      .json({ message: `${req.params.Merkez_id} numaralı Merkez silindi.` });
  } catch (error) {
    next(error);
  }
});

router.use((error, req, res, next) => {
  res.status(400).json(error);
});

module.exports = router;
