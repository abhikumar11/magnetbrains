const express=require('express');
const router=express.Router();
router.use("/api",require("./order"));
module.exports = router;