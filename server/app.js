const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

mongoose.Promise = global.Promise;

  mongoose.connect("mongodb://localhost/IOT", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });


const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

// Middlewares moved morgan into if for clear tests
if (!process.env.NODE_ENV === "test") {
  app.use(morgan("dev"));
}

app.use(express.json());

// Routes
app.use("/users", require("./routes/users"));

module.exports = app;
