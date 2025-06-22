const mongoose = require('mongoose');
const initData = require('./data.js'); 
const Listing = require('../models/listing.js');

// MongoDB connection URL
const mongo_url = 'mongodb://127.0.0.1:27017/projectbnb';

// Connect to MongoDB
 main()
 .then(() => {
        console.log("✅ Connected to MongoDB");
 })
 .catch((err)=>{console.log(err)});

async function main() {
    await mongoose.connect(mongo_url);
}

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("✅ Database initialized with sample data");
}
initDB();