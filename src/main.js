const readExcelFile  = require("./utils/excelUtils");
const  createProjectParticipants  = require("./services/projectParticipantsService");

const main = async () => {
  try {
    const excelFilePath = "src/data/project_participants.xlsx"; 
    const allSheetData = readExcelFile(excelFilePath);
    for (const sheetData of allSheetData) {
      // console.log("singleData:", sheetData);
    }
    if (allSheetData.length === 0) {
      console.log("No data found in the Excel sheets.");
      return;
    }
    console.log("Creating project participants...");
    console.log("allSheetData:", allSheetData);
    await createProjectParticipants(allSheetData);
    console.log("Project participants created successfully.");
  } catch (error) {
    console.log("Posting encountred an errr ", error.message);
  }
};

main();

