const io = require("socket.io")(process.env.PORT || 5001, {
    cors: {
        origin: '*',
    }
});

let users = [];

const addUser = (userId, socketId) => {
    !users.some(user=>user.userId === userId) &&
        users.push({ userId, socketId })
}

const getUser = (userId) => {
    return users.find(user=>user.userId === userId);
}

const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId)
}

io.on("connection", (socket) => {
    
    //when connect
    socket.on("addParticipant", userId => {
        if(userId){
            console.log("participant connected!");
            addUser(userId, socket.id);
            io.emit("getUsers", users);
        }
    })

    //send and get messages
    socket.on("sendMessage", ({senderId, receivers, message}) => {
        for(let i=0;i<receivers.length;i++){
            if(receivers[i].user_id !== senderId){
                const user = getUser(receivers[i].user_id);
                if(user){
                    io.to(user.socketId).emit("getMessage", {
                        conversation_id: receivers[i].conversation_id, message
                    })
                }
            }
        }
    });

    //when disconnect
    socket.on("disconnect", () => {
        removeUser(socket.id)
        io.emit("getUsers", users);
    })
})