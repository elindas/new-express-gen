const express = require("express");
const router = express.Router();

const { getAll, deleteById, updateById, deleteTask } = require("./controller");

router.get("/", getAll);
router.get("/task/:todo", require("./controller").getByUsername);
router.post("/", require("./controller").addData);

router.delete("/:id", deleteById);
// router.delete("/:todo", deleteTask)
router.put("/:id", updateById);


module.exports = router;
