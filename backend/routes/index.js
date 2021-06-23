import express from "express";
var router = express.Router();
import {
  addStock,
  getAllStock,
  getStock,
} from "../controllers/stocksController.js";

const verifyLogin = (req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.send({ error: "Login Error" });
  }
};

/* GET home page. */
router.post("/login", (req, res) => {
  console.log(req.body);
  if (req.body.username == "Batman" && req.body.password == "iambatman") {
    req.session.loggedIn = true;
    res.send({ sucess: "logged in success" });
  } else {
    res.send({ error: "Login Error" });
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy();
});
router.get("/", getAllStock);
router.post("/addStock", addStock);
router.post("/getStock/", getStock);

export default router;
