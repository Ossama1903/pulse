const express = require("express");
const mongoose = require("mongoose");
const config = require("./src/config");

const app = express();

mongoose
  .connect(config.MONGO_URI, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.json());

// // Routes
// app.use("/api/auth", require("./routes/auth"));

const PORT = config.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
