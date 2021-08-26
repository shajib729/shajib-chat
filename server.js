require("dotenv").config()
const express = require('express')
const app = express()
const http=require("http").createServer(app)
const port = process.env.PORT || 5000
const path = require('path')
const cookieParser = require('cookie-parser')
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
}
})
const cors=require('cors')
const fileUpload = require('express-fileupload');
const { disconnect } = require('process');

const {users,addUser,removeUser,getUser,getConversation} = require('./socket/socketController')

require('./db/conn')
app.use(cookieParser())
app.use(cors())
//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(fileUpload({
  limits: { fileSize: 500000 },
}));

app.use('/api', require('./routes/user'))
app.use('/api', require('./routes/conversation'))
app.use('/api', require('./routes/message'))


//TODO: socket io
io.on('connection', (socket) => {
  console.log(`A user is connected ${socket.id}`);

  // When a user is joined
  socket.on('join', ({userId,conversationId,allConversation}) => {
    const data=addUser({userId,conversationId,allConversation, socketId:socket.id});
    // console.log(data);
  
    // send all conected users to client 
    io.emit("getUsers", users)
    console.log(users);
    // socket.broadcast.to(data.conversationId).emit('message',)

    // data.conversationId?socket.join(data.conversationId):null // TODO:

    // io.to(data.conversationId).emit('users',{users:getConversation(data.conversationId)}) // TODO: 
  })

  // When User Send message
  socket.on('sendMessage',async (message) => {
    const receiver =await getUser(message?.receiverId)
    // console.log("receiver",receiver?.socketId,message);
    
    io.to(receiver?.socketId).emit('getMessage', message)
    
  })

  // When User Disconnect
  socket.on("disconnect", () => {
    console.log(`${socket.id} is disconected`);
    const user = removeUser(socket.id)
    
    if (user) {
      io.to(user.conversationId).emit('message',{user:user,activeUser:users,message:"This user is left"})
    }

  })
})


// 3: setup in heroku 
if (process.env.NODE_ENV === "production") {
    // Step 1:
    app.use(express.static(path.resolve(__dirname, "./my-app/build")));
    // Step 2:
    app.get("*", function (request, response) {
      response.sendFile(path.resolve(__dirname, "./my-app/build", "index.html"));
    });
}

http.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})