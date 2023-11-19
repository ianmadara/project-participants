const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const projectParticipantsRoutes = require("./routes/projectParticipantsRoutes");

const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(projectParticipantsRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
