var express = require('express')

// App setup
var app = express();
var server = app.listen(4000, () => {
    console.log("Listening to requests on port 4000");
})


// Static files
app.use(express.static('public'));
