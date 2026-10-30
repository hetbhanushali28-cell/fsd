const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    title: {
      type: String,
      required: [true, "Please add a title"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    date: {
      type: String,
      required: [true, "Please add a date"],
    },
    time: {
      type: String,
      default: "10:00",
    },
    location: {
      type: String,
      required: [true, "Please add a location"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);
