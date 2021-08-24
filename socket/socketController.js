const users = []

// Adding New User
const addUser = (userId,conversationId, socketId) => {
    
    const existingUser = users.find((user) => user.userId===userId)
    
    if (existingUser) {
        
    } else {
        const user = { userId,conversationId,socketId }
        
        users.push(user)

        return user
    }
}

// Remove A User when disconnect
const removeUser = (socketId) => {
    const index = users.findIndex((user) => user.socketId === socketId)
    
    if (index !== -1) {
        return users.splice(index,1)[0]
    }
}

// Get A user 
const getUser = (id) => users.find((user) => user.userId === id)


module.exports={users,addUser,removeUser,getUser}