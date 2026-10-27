const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
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
    location: {
      type: String,
      required: [true, "Please add a location"],
    },
    category: {
      type: String,
      enum: ["Technology", "Workshop", "Conference", "Festival", "Sports", "Other"],
      default: "Other",
    },
    organizer: {
      type: String,
      default: "Admin",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);
