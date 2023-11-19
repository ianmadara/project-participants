const express = require("express");
const validateHeaders = require("../middlewares/validateHeadersMiddleware");
const createProjectParticipants = require("../services/projectParticipantsService");
const projectParticipantsController = require("../controllers/projectParticipantsController");

const router = express.Router();
//this is the route for testing the API via postman or any other tool
router.post("/api/v1/project-participants",validateHeaders, async (req, res) => {
    try {
      const participants = [Object(req.body)];
      await createProjectParticipants(participants);
      res.status(200).json({ message: "Project participants created successfully" });
    } catch (error) {
      console.error("Error creating project participants:", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

router.post( "/project-participants",validateHeaders, projectParticipantsController.createProjectParticipants);

module.exports = router;
