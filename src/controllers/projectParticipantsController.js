const fs = require("fs").promises;

const FILE = "src/data/project_participants.json";

const readProjectParticipants = async () => {
  try {
    const fileContent = await fs.readFile(FILE, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    return [];
  }
};

const writeProjectParticipants = async (participants) => {
  try {
    const existingData = await readProjectParticipants();
    // Filter out duplicates by checking if each participant already exists in the array
    const uniqueParticipants = participants.filter((newParticipant) => {
      return !existingData.some((existingParticipant) => {
        return (
          newParticipant.name === existingParticipant.name &&
          newParticipant.date_of_birth === existingParticipant.date_of_birth &&
          newParticipant.address === existingParticipant.address &&
          newParticipant.phone_number === existingParticipant.phone_number
        );
      });
    });
    const newData = [...existingData, ...uniqueParticipants];
    await fs.writeFile(FILE, JSON.stringify(newData, null, 2), "utf-8");
    return uniqueParticipants;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

const createProjectParticipants = async (req, res) => {
  try {
    const participants = req.body;

    const uniqueParticipants = await writeProjectParticipants(participants);

    res.status(200).json({
      message: "Project participants created successfully",
      data: uniqueParticipants,
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createProjectParticipants };
