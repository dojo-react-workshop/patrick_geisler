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

app.listen(port, function() {
  console.log(`This is up and running`);
})
