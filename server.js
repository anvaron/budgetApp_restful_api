// DEPENDENCIES
const app = require("./app.js");

// CONFIG
require("dotenv").config();
const PORT = process.env.PORT || 3003;

// LISTENER
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});