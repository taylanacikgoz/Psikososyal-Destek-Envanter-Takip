const { JWT_SECRET } = require("../../secrets/index");
const personelModel = require("../PersonelRoutes/getData-model");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

const sinirli = (req, res, next) => {
  try {
    let authHeader = req.headers["authorization"];
    console.log(req.headers); // req.headers.authorization
    if (!authHeader) {
      res.status(401).json({ message: "Token gereklidir" });
    } else {
      jwt.verify(authHeader, JWT_SECRET, (err, decodedToken) => {
        if (err) {
          res.status(401).json({ message: "token gecersizdir" });
        } else {
          req.decodedToken = decodedToken;
          next();
        }
      });
    }
  } catch (error) {
    next(error);
  }
};

const sadece = (Rol_Adi) => (req, res, next) => {
  console.log(req.decodedToken.Rol_Adi);
  try {
    if (req.decodedToken.Rol_Adi == Rol_Adi) {
      next();
    } else {
      res.status(403).json({ message: "Bu, senin için değil" });
    }
  } catch (error) {
    next(error);
  }
};

const usernameVarmi = async (req, res, next) => {
  try {
    let isExist = await personelModel.goreBul(req.body.Personel_Adi);
    if (isExist && isExist.length > 0) {
      let currentUser = isExist[0];
      let isPasswordMatch = bcryptjs.compareSync(
        req.body.Password,
        currentUser.Password
      );
      if (!isPasswordMatch) {
        res.status(401).json({
          message: "Geçersiz kriter",
        });
      } else {
        req.currentUser = currentUser;
        next();
      }
    } else {
      res.status(401).json({
        message: "Geçersiz kriter",
      });
    }
  } catch (error) {
    next(error);
  }
};

const rolAdiGecerlimi = (req, res, next) => {
  try {
    let { Rol_Adi } = req.body;
    if (!Rol_Adi) {
      req.body.Rol_Adi = "Psikolog";
      next();
    } else {
      Rol_Adi = Rol_Adi.trim();
      if (Rol_Adi.length > 32) {
        res
          .status(422)
          .json({ message: "rol adı 32 karakterden fazla olamaz" });
      } else if (Rol_Adi === "Admin") {
        res.status(422).json({ message: "Rol adı admin olamaz" });
      } else {
        req.body.Rol_Adi = Rol_Adi;
        next();
      }
    }
  } catch (error) {
    next(error);
  }
};

const checkPayload = (req, res, next) => {
  try {
    let { Personel_Adi, Password } = req.body;
    if (!Personel_Adi || !Password) {
      res.status(400).json({ messsage: "Eksik alan var" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  sinirli,
  usernameVarmi,
  rolAdiGecerlimi,
  sadece,
  checkPayload,
};
