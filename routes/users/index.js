const express = require("express");
const router = express.Router();
const { upload } = require("../../config");

router.get("/", require("./controller").getAll);

router.post("/", upload.single("avatar"), require("./controller").postData);
router.get("/username/:username", require("./controller").getByUsername);

module.exports = router;
