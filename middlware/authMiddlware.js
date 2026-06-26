import { body, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const verifyToken = (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header) {
      return res.status(401).json({ message: "ne trouve pas  token" });
    }

    const token = header.split(" ")[1];
    // jwt.verify() => est un bibliothéque dyal jsonwebtoken pour verify wach token sale7 ola la
    //JWTS=>secret key howa li n géneriw et verify token
    //  hna 9arna signature m3a process.env.JWTS
    const decoded = jwt.verify(token, process.env.JWTS);

    req.user = decoded; // id w role kayb9aw f req.user

    next();
  } catch (err) {
    res.status(401).json({ message: "Token invalid" });
  }
};

export const isAdmin = (req, res, next) => {
  // req.user khdinah mn middleware verifyToken
  if (req.user.role !== "admin") {
    // 403=> Forbidden
    return res.status(403).json({ message: "Non autorisé, seulement admin" });
  }
  next();
};

export const checkEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    console.log("reeeeeeeeeeeeeeeeeeeee", email);

    const emailExist = await User.findOne({ email });
    console.log(emailExist);

    if (emailExist) {
      return res.status(409).json({
        message: "Email already exists",
      });
    }

    next();
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: err.message,
    });
  }
};

export const checkAdminExists = async (req, res, next) => {
  try {
    const { role } = req.body;

    if (role === "admin") {
      const adminExist = await User.findOne({ role: "admin" });
      if (adminExist) {
        // 400 => bad req
        return res.status(400).json({ message: "Admin déjà créé" });
      }
    }

    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};

export const registerValidation = [
  body("name").notEmpty().withMessage("name obligatoire"),

  body("email").isEmail().withMessage("email invalide"),

  body("passeword")
    // au moins 6
    .isLength({ min: 6 })
    .withMessage("password doit avoir au moins 6 caractères"),

  body("role")
    // ila user madakhlch role machi mochil kamel
    .optional()
    .isIn(["user", "admin"])
    .withMessage("role doit être user ou admin"),
];

// validation dyal login
export const loginValidation = [
  body("email").isEmail().withMessage("email invalide"),

  body("passeword").notEmpty().withMessage("password obligatoire"),
];

// middleware kaychecki errors
export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};
