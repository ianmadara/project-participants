const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
const APP_ENV = process.env.APP_ENV || "production";
const BASE_URL = process.env.BASE_API_URL || 'http://localhost:' + PORT;

const API_KEY = process.env.API_KEY || "test-api-key";
let API_URL = `${BASE_URL}/project-participants`;
if (APP_ENV === "development")
  API_URL = `${BASE_URL}:${PORT}/project-participants`;

console.log("API_URL", API_URL);
const createProjectParticipants = async (participants) => {
  const headers = {
    "NRC-API-KEY": API_KEY,
    "Content-Type": "application/json; charset=utf-8",
  };

  await axios.post(API_URL, participants, { headers });
};

module.exports = createProjectParticipants;
