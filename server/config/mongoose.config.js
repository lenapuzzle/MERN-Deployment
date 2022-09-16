const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/belt_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Database connection established"))
    .catch(err => console.log("There was an error", err))