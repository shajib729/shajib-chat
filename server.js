require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const path = require('path')

require('./db/conn')
app.use(express.json());
app.use('/', require('./routes/user'))

// 3: setup in heroku 
if (process.env.NODE_ENV !== 'production') {
    app.use(express.static(path.join(__dirname,"/my-app/build/")))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,"my-app",'build','index.html'))
    })
}

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})