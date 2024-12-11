const mongoose = require('mongoose');

const connectDb=async()=>{
        await mongoose.connect("mongodb+srv://abhi:abhi@cluster1.p6lnqsp.mongodb.net/magnetbrain")
        .then(()=>{"connected to database"})
        .catch(err=>{"error connecting to database",err});
}
module.exports =connectDb;