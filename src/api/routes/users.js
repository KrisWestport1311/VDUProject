const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");



//Get all users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

//Update existing user
router.put("/:id", async (req, res, next) => {
  if (req.body.userId === req.params.userId) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can only update your own account");
  }
});

//Delete existing user

router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.userId) {
    try {
      const user = await User.findById(req.params.id);

      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("User not found");
    }
  } else {
    res.status(401).json("You can only delete your own account");
  }
});

//Get a Specific User

router.get("/find/:Id", async (req, res) => {
  try {
    const user = await User.findById(req.params.Id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});


//get count of users
router.get("/find/:Id", async (req, res) => {
  try {
    const user = await User.findById(req.params.Id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
