const express=require('express');
const router=express.Router();

router.post("/order/saveorder");
router.get("/order/showorder/:id");
module.exports = router;