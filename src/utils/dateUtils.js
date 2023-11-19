const { parse, isValid, format } = require("date-fns");


const convertExcelDateToISO8601 = (excelDate) => {
  const excelEpoch = new Date("1899-12-30");
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const daysSinceEpoch = excelDate - 1; 
  const dateInMilliseconds =
    excelEpoch.getTime() + daysSinceEpoch * millisecondsPerDay;

  if (isValid(dateInMilliseconds)) {
    return format(dateInMilliseconds, "yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
  } else {
    console.warn(
      `Warning: Unable to convert Excel date to ISO-8601 for ${excelDate}`
    );
    return null;
  }
};

const parseDateString = (dateString) => {
  const possibleFormats = [
    "MM.dd.yy",
    "MM/dd/yy",
    "M/d/yyyy",
    "MM/dd/yy",
    "MM.dd.yy",
  ];

  for (const formatString of possibleFormats) {
    try {
      const parsedDate = parse(dateString, formatString, new Date());
      if (isValid(parsedDate)) {
        return format(parsedDate, "yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
      }
    } catch (error) {
      // Ignore errors
    }
  }

  console.warn(`Warning: Unable to parse date for ${dateString}`);
  return null;
};

module.exports = { convertExcelDateToISO8601, parseDateString };
