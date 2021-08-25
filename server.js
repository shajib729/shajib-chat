require("dotenv").config()
const express = require('express')
const app = express()
const http=require("http").createServer(app)
const port = process.env.PORT || 5000
const path = require('path')
const cookieParser = require('cookie-parser')
const io = require("socket.io")(http)
const fileUpload = require('express-fileupload');

const {users,addUser,removeUser,getUser} = require('./socket/socketController')

require('./db/conn')
app.use(cookieParser())
//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

app.use('/api', require('./routes/user'))
app.use('/api', require('./routes/conversation'))
app.use('/api', require('./routes/message'))


//TODO: socket io
// io.on('connection', (socket) => {
//   console.log(`A user is connected ${socket.id}`);

//   // When a user is joined
//   socket.on('join', ({userId,conversationId}) => {
//     const data=addUser(userId, conversationId, socket.id);
//     console.log(data);
  
//     // send all conected users to client 
//     io.emit("getUsers", users)

//     // socket.join(data.conversationId)//check this 

//     // io.to(data.conversationId).emit('conversatonId',{})  
//   })

//   //S Send message
//   socket.on('sendMessage', (data) => {
//     console.log(data);
//   })

//   socket.on("disconnect", () => {
//     console.log(`${socket.id} is disconected`);
//   })
// })


// 3: setup in heroku 
if (process.env.NODE_ENV === "production") {
    // Serve any static files
    app.use(express.static(path.join(__dirname, "my-app/build")));
    // Handle React routing, return all requests to React app
    app.get("*", function (req, res) {
      res.sendFile(path.join(__dirname, "my-app/build", "index.html"));
    });
}

http.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})