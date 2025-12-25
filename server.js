const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const qrRoutes = require("./routes/qr");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/casr");

app.use("/api/qr", qrRoutes);
app.use("/q", qrRoutes);

app.listen(5000, () => console.log("CaSR backend running"));
