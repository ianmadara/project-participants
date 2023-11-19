const xlsx = require("node-xlsx");

const { parseDateString, convertExcelDateToISO8601 } = require("./dateUtils");

const readExcelFile = (filePath) => {
  const workSheetsFromFile = xlsx.parse(filePath);
  const allData = [];

  workSheetsFromFile.forEach((sheet) => {
    const sheetData = sheet.data;
    const headers = sheetData[0];
    const data = sheetData.slice(1).map((row) => {
      // Check if the row has values for all headers
      if (headers.every((header) => row[headers.indexOf(header)] !== undefined)) {
        // Check if all required headers have non-empty values
        if (headers.every((header) => {
          const value = row[headers.indexOf(header)];
          return value !== undefined && value !== null && value !== "";
        })) {
          const rowData = {};
          row.forEach((cell, index) => {
            const header = headers[index];
            if (header === "date_of_birth" && cell) {
              rowData[header] =
                typeof cell === "number" ? convertExcelDateToISO8601(cell) : parseDateString(cell);
            } else {
              rowData[header] = cell;
            }
          });
          return rowData;
        }
      }

      return null; // Skip rows that don't meet the criteria
    });

    // Filter out null (empty) rows
    const filteredData = data.filter((row) => row !== null);
    allData.push(filteredData);
  });

  // Flatten the array of sheet data
  return allData.reduce(
    (accumulator, currentSheetData) => [...accumulator, ...currentSheetData],
    []
  );
};


module.exports = readExcelFile;
