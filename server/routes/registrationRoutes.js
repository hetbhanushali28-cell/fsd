const express = require("express");
const router = express.Router();
const Registration = require("../models/Registration");
const { protect } = require("../middleware/authMiddleware");

// POST /api/registrations - Register for an event
router.post("/", protect, async (req, res) => {
  try {
    const { eventId } = req.body;

    if (!eventId) {
      return res.status(400).json({ message: "Event ID is required" });
    }

    const existingRegistration = await Registration.findOne({
      userId: req.user._id,
      eventId,
    });

    if (existingRegistration) {
      return res.status(400).json({ message: "Already registered for this event" });
    }

    const registration = await Registration.create({
      userId: req.user._id,
      eventId,
    });

    res.status(201).json(registration);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// GET /api/registrations - Get user's registrations
router.get("/", protect, async (req, res) => {
  try {
    const registrations = await Registration.find({ userId: req.user._id }).populate("eventId");
    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// DELETE /api/registrations/:id - Cancel a registration
router.delete("/:id", protect, async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id);

    if (!registration) {
      return res.status(404).json({ message: "Registration not found" });
    }

    if (registration.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await Registration.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Registration cancelled", id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

module.exports = router;
