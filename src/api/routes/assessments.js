const router = require("express").Router();
const Assessment = require("../models/Assessments");

//Create new assessment 

router.post("/", async (req, res, next) => {
  const newAssessment = new Assessment(req.body);

  try {
    const savedAssessment = await newAssessment.save();
    res.status(200).json(savedAssessment);
  } catch (err) {
    next(err);
  }
});

//update existing locations
// router.put("/:id", async (req, res, next) => {
//   try {
//     const updatedLocation = await Location.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     res.status(200).json(updatedLocation);
//   } catch (err) {
//     next(err);
//   }
// });

//Delete an existing assessment
router.delete("/:id", async (req, res, next) => {
  try {
    await Assessment.findByIdAndDelete(req.params.id);
    res.status(200).json("Assessment has been deleted");
  } catch (err) {
    next(err);
  }
});

// //Get specific location
// router.get("/:id", async (req, res, next) => {
//   try {
//     const location = await Location.findById(req.params.id);
//     res.status(200).json(location);
//   } catch (err) {
//     next(err);
//   }
// });

//Get all locations
router.get("/", async (req, res, next) => {
  try {
    const assessments = await Assessment.find();
    res.status(200).json(assessments);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
