const express = require('express')
const cors = require('cors');
const app = express()
const routes= require("./src/routes/useRoute")
const port = 3000
require("./src/config/db")
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());

app.use("/api", routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


