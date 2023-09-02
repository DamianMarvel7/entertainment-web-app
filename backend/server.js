require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/userRoutes");

// express app
const app = express();

// middleware
app.use(express.json());

app.use(
  cors({
    origin: "*",
    allowedHeaders: ["Content-Type", "Authorization"],
    allowedMethods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/movies", movieRoutes);
app.use("/api/user", userRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port");
    });
  })
  .catch((err) => {
    console.log(err);
  });
