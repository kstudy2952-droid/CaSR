const express = require("express");
const QRCode = require("qrcode");
const { nanoid } = require("nanoid");
const QR = require("../models/QR");

const router = express.Router();

router.post("/create", async (req, res) => {
  const { url } = req.body;
  const shortId = nanoid(7);
  await QR.create({ shortId, originalUrl: url });

  const qrLink = `http://localhost:5000/q/${shortId}`;
  const qrImage = await QRCode.toDataURL(qrLink);
  res.json({ qrLink, qrImage });
});

router.get("/:id", async (req, res) => {
  const qr = await QR.findOne({ shortId: req.params.id });
  if (!qr) return res.send("Invalid QR");
  res.redirect(qr.originalUrl);
});

module.exports = router;
