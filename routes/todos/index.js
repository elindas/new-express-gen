const express = require("express");
const router = express.Router();

const { getAll, deleteById, updateById } = require("./controller");

router.get("/", getAll);
router.get("/task/:todo", require("./controller").getByUsername);
router.post("/", require("./controller").addData);

router.delete("/:id", deleteById);

router.put("/:id", updateById);


module.exports = router;
