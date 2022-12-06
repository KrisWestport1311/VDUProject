const mongoose = require("mongoose");

const AssessmentSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },
    candidate: {
      type: String,
      required: true,
    },
    characters: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    symbols: {
      type: String,
      required: true,
    },
    reflective: {
      type: String,
      required: true,
      unique: true,
    },
    height: {
      type: String,
      required: true,
    },
    feet: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Assessment", AssessmentSchema);
