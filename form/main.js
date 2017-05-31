const express = require('express');
const bp = require('body-parser');
const path = require('path');
const app = express()
const port = 8080;

app.use(bp.urlencoded())
app.use(express.static(path.join(__dirname + `/clients`)))
app.set(`views`, path.join(__dirname + `/clients`))
app.set(`view engine`, `ejs`)

require(`./clients/routes.js`)(app)

app.get('/', function (req, res) {
    const contextObj = {
        title: 'Survey Form'
    }
    res.render('index', contextObj);
})

app.post('/submit', function (req, res) {
    res.json(req.body)
})


app.listen(port, function() {
  console.log(`This is up and running`);
})
