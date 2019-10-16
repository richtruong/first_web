const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
//serving static files
app.use(express.static('public'))
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

require('./models/wish')

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//app.use(bodyParser.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// import routes
require('./routes')(app);

app.set('view engine', 'ejs')

app.listen(port, () => {
    console.log("server is running on port" + port)
})
