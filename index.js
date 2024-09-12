const express = require("express");
const router = require("./routes/user_routes");
const errorHandler = require("./utils/errorHandler");
const app = express();
// Middleware for parsing JSON bodies
app.use(express.json());
app.use("/api/user", router);
app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
