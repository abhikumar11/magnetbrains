const mongoose=require('mongoose');

const orderSchema=mongoose.Schema({
    cid:{
        type:"string",
    },
    paystatus:{
        type:"string",
    },
    payid:{
        type:"string",
    },
    transid:{
        type:"string",
    },
    
});
const Order=mongoose.model("Order",orderSchema);
module.exports = Order;