// Import required modules
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing'); // Import the Listing model
const bodyParser = require('body-parser');
const ejs = require('ejs');
const ejsMate = require('ejs-mate'); // EJS layout engine
const path = require('path');
const methodOverride = require('method-override');


app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views')); // Set the views directory
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(methodOverride('_method')); // Middleware to support PUT and DELETE methods
app.engine('ejs', ejsMate); // Use ejsMate for EJS layouts
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory

// MongoDB connection URL
const mongo_url = 'mongodb://127.0.0.1:27017/projectbnb';

// Connect to MongoDB
async function main() {
    try {
        await mongoose.connect(mongo_url); // Connect to MongoDB
        console.log("✅ Connected to MongoDB");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
    }
}
main();

// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New Villa",
//     description: "By the beach",
//     price: 1200,
//     location: "Calangute, Goa",
//     country: "India"
//   });

//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("successful testing");
// });

// Define a basic route
app.get('/', async (req, res) => {
    res.render("listings/home.ejs"); // Response for root route
});


//Index route
app.get('/listings', async (req,res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
});

//new route
app.get('/listings/new', (req, res) => {
    res.render("listings/new.ejs"); // Render the new listing form
});

//Show route
app.get('/listings/:id', async (req, res) => {
    let {id} = req.params; 
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
})

//create route
app.post('/listings', async (req, res) => {
    let listing = req.body.listing;

    // Move image string to an object with a url property
    listing.image = {
        url: listing.image
    };

    const newListing = new Listing(listing);
    await newListing.save();
    res.redirect('/listings');
});

// Edit route
app.get('/listings/:id/edit', async (req, res) => {
    let {id} = req.params; 
    const listing = await Listing.findById(id); // Find the listing by ID
    res.render("listings/edit.ejs", {listing}); // Render the edit form with the listing data
});

// Update route
app.put('/listings/:id', async (req, res) => {
    let {id} = req.params; 
    await Listing.findByIdAndUpdate(id, {...req.body.listing}); // Update the listing in the database
    res.redirect("/listings"); // Redirect to the updated listing's show page
});

//delete route
app.delete('/listings/:id', async (req, res) => {
    let {id} = req.params; 
    await Listing.findByIdAndDelete(id); // Delete the listing from the database
    res.redirect("/listings"); // Redirect to the index route
});

// Start the Express server
app.listen(3000, () => {
    console.log("🚀 Server started on port 3000");
});
