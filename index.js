const http = require('http');
const express = require('express');

const app = express();

const server = http.createServer(app);
//socket.io
const {Server} = require('socket.io');
const io = new Server(server);

app.use(express.static('./public'));

app.get('/',(req,res)=>{
    return res.sendFile('./public/index.html');
}
)
//(socket) means client
io.on('connection',(socket)=>{
   socket.on('user-message',(message)=>{

    io.emit('message',message);

   })
})

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
}
)