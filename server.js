require("dotenv").config()
const express = require('express')
const app = express()
const http=require("http").createServer(app)
const port = process.env.PORT || 5000
const path = require('path')
const cookieParser = require('cookie-parser')
// const io=require("sockekt.io")

require('./db/conn')
app.use(cookieParser())
//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes/user'))
app.use('/api', require('./routes/conversation'))
app.use('/api', require('./routes/message'))

// 3: setup in heroku 
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname,"/my-app/build/")))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,"my-app",'build','index.html'))
    })
}

http.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})