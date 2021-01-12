const express = require("express");
const { getMaxListeners } = require("../app");
const router = express.Router();
const { User } = require("../models/user.models");
router.get("/welcome", function (req, res, next) {
  res.status(200).send({ welcomeMessage: "Step 1 (completed)" });
});

router.get("/test", async (req, res) => {
  const testData = {
    name: "Alekzander",
    email: "alekzander@gmail.com",
    password: "password123unsecureaf",
  };

  const user = new User(testData);
  try {
    await user.save();
    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    console.log(err);
  }

  res.status(200).send("Use this page to test things");
});

module.exports = router;
