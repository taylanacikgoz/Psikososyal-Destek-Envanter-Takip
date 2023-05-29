require("dotenv").config();
const server = require("./api/server");

const PORT = process.env.SERVER_PORT || 6000;

server.listen(PORT, () => {
  console.log(`***Server running on ${PORT}`);
});
