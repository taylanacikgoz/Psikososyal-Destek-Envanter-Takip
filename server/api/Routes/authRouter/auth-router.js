const router = require("express").Router();
const {
  usernameVarmi,
  rolAdiGecerlimi,
  checkPayload,
} = require("./auth-middleware");
const { JWT_SECRET } = require("../../secrets/index"); // bu secret'ı kullanın!
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const personelModel = require("../PersonelRoutes/getData-model");

router.post(
  "/register",
  checkPayload,
  rolAdiGecerlimi,
  async (req, res, next) => {
    try {
      let hashedPassword = bcryptjs.hashSync(req.body.Password);
      let userRequestModel = {
        Personel_Adi: req.body.Personel_Adi,
        Password: hashedPassword,
        Rol_Adi: req.body.Rol_Adi,
      };
      const registeredUser = await personelModel.ekle(userRequestModel);
      res.status(201).json(registeredUser);
    } catch (error) {
      next(error);
    }
  }
);

router.post("/login", checkPayload, usernameVarmi, (req, res, next) => {
  try {
    let payload = {
      subject: req.currentUser.Personel_id,
      Personel_Adi: req.currentUser.Personel_Adi,
      Rol_Adi: req.currentUser.Rol_Adi,
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
    res.json({
      message: `${req.currentUser.Personel_Adi} geri geldi!`,
      token: token,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
