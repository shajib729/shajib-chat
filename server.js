require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const path = require('path')

require('./db/conn')
app.use(express.json());
app.use('/',require('./routes/user'))

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})