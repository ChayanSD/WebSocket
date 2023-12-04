# WebSocket
    ## Normal client-server connection : 
<img src="./image/Screenshot from 2023-12-04 23-08-43.png">

## Problem for chat application : 
<img src="./image/Screenshot from 2023-12-04 23-12-16.png">

## Solution 

 <b>In socket.io we pass at the header (ws) 
websocket update our connection .</b>

```
io.on('connection',(socket)=>{
   socket.on('user-message',(message)=>{

    io.emit('message',message);

   })
})
```

## How to install this project
 - clone this project.
 - npm install 
 - npm start
 -It will start at localhost3000