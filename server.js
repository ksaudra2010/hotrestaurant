// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// array for customers  (DATA) : name,
// , contact info: phone number, email, unique ID
// =============================================================
var reservations = [{
    name: "",
    phone: "",
    email: "",
    uniqueId: 0,

}, ];

var waitlist = [{
    name: "",
    phone: "",
    email: "",
    uniqueId: 0,
}, ];
// object, array, or variable for tables; five tables,

//array or varible for new reservation

// if or switch statement when tables are full to move clients to waiting list
// .map function with ternery operator

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

//add reservation
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});


// Displays all tables
app.get("/tables", function(req, res) {
    return res.json(tables);
});
// display reservations
app.get("/api/reserve", function(req, res) {
    return res.json(reservations);
});
/* // Displays a single character, or returns false
app.get("/api/characters/:character", function(req, res) {
    var chosen = req.params.character;

    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    return res.json(false);
}); */

// posting table data reserving - takes in JSON input

// and a waitlist post route


app.post("/reserve", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    reservations.push(newReservation);

    res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});