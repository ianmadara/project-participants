const validateHeaders = (req, res, next) => {
    const requiredHeaders = ["nrc-api-key", "content-type"];
  
    for (const header of requiredHeaders) {
      const lowercaseHeader = header.toLowerCase();
      if (!req.headers[lowercaseHeader]) {
        return res.status(400).json({ error: `Missing required header: ${header}` });
      }
    }
  
    const apiKey = req.headers["nrc-api-key"];
  const testKey = process.env.API_KEY || "test-api-key";
    if (!apiKey || apiKey !== testKey) {
      return res.status(401).json({ error: "Invalid API key" });
    }
    next();
  };
  
  module.exports = validateHeaders;
  